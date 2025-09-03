// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import crypto from "crypto"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json().catch(() => ({}))
    const {
      name,
      email,
      company,
      message,
      website,        // honeypot
      utm_source,
      utm_medium,
      utm_campaign,
    } = payload || {}

    // Honeypot → pretend success
    if (website) {
      return NextResponse.json({
        ok: true,
        thankYou: "Thanks! We’ve received your message.",
      })
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // --- ENV / CONFIG ---
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_SECURE,
      MAIL_FROM,    // e.g. 'SmartWhap <noreply@smartwhap.com>' (same domain as DKIM/SPF)
      MAIL_TO,      // team inbox
      BRAND_NAME = "SmartWhap",
      BRAND_COLOR = "#10b981", // emerald
      DKIM_DOMAIN,
      DKIM_KEY_SELECTOR,
      DKIM_PRIVATE_KEY,
      SLACK_WEBHOOK_URL,
      LIST_UNSUB_MAILTO, // optional: e.g. 'mailto:support@smartwhap.com?subject=Unsubscribe'
    } = process.env as Record<string, string | undefined>

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !MAIL_TO) {
      return NextResponse.json({ error: "SMTP/email env vars are not configured" }, { status: 500 })
    }

    const port = Number(SMTP_PORT)
    const secure = typeof SMTP_SECURE === "string"
      ? SMTP_SECURE.toLowerCase() === "true"
      : port === 465

    // Pooled transport (keeps TLS warm) + DKIM if provided
    const transporter = nodemailer.createTransport({
      pool: true,
      host: SMTP_HOST,
      port,
      secure,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      ...(port === 587 && !secure ? { requireTLS: true } : {}),
      dkim: (DKIM_DOMAIN && DKIM_KEY_SELECTOR && DKIM_PRIVATE_KEY)
        ? { domainName: DKIM_DOMAIN, keySelector: DKIM_KEY_SELECTOR, privateKey: DKIM_PRIVATE_KEY }
        : undefined,
    })

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      (req as any).ip ||
      "unknown"

    const leadId = crypto.randomBytes(5).toString("hex")
    const nowISO = new Date().toISOString()

    // --- TEMPLATES (accessible + clean inline CSS) ---
    const baseStyles = `
      body{margin:0;padding:0;background:#f7f9fc}
      .container{max-width:620px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(16,24,40,0.06)}
      .brand{background:${BRAND_COLOR};color:#fff;padding:18px 24px;font-family:Inter,system-ui,Arial,sans-serif}
      .brand h1{margin:0;font-size:18px;letter-spacing:.2px}
      .content{padding:20px 24px;font-family:Inter,system-ui,Arial,sans-serif;color:#0f172a;line-height:1.65}
      .meta{color:#64748b;font-size:12px;margin-top:8px}
      .pill{display:inline-block;background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;border-radius:999px;padding:4px 10px;font-size:12px}
      .field{margin:0 0 10px}
      .label{color:#475569;font-size:12px}
      .value{font-weight:600}
      .box{border-left:3px solid ${BRAND_COLOR};background:#f8fafc;padding:12px 14px;border-radius:8px}
      .footer{padding:16px 24px;text-align:center;color:#6b7280;font-size:12px}
      a{color:${BRAND_COLOR};text-decoration:none}
    `

    const adminSubject = `🟢 New Lead #${leadId}: ${sanitize(name)}${company ? ` — ${sanitize(company)}` : ""}`
    const adminHtml = `
      <!doctype html><html><head><meta charSet="utf-8"/><style>${baseStyles}</style></head><body>
      <div class="container">
        <div class="brand">
          <h1>${BRAND_NAME} — New Contact Lead</h1>
          <div class="meta">Lead ID: ${leadId} · ${nowISO}</div>
        </div>
        <div class="content">
          <div class="field"><span class="label">Name</span><div class="value">${sanitize(name)}</div></div>
          <div class="field"><span class="label">Email</span><div class="value"><a href="mailto:${sanitize(email)}">${sanitize(email)}</a></div></div>
          <div class="field"><span class="label">Company</span><div class="value">${sanitize(company || "—")}</div></div>
          <div class="field"><span class="label">UTM</span><div class="value">${sanitize(utm_source || "—")} / ${sanitize(utm_medium || "—")} / ${sanitize(utm_campaign || "—")}</div></div>
          <div class="field"><span class="label">IP</span><div class="value">${sanitize(ip)}</div></div>

          <p class="label" style="margin-top:14px;">Message</p>
          <div class="box">${sanitize(message).replace(/\n/g, "<br/>")}</div>

          <p style="margin-top:16px">
            <a class="pill" href="mailto:${MAIL_FROM.replace(/.*<(.+?)>.*/, '$1')}?subject=Lead%20${encodeURIComponent(leadId)}">Reply now</a>
          </p>
        </div>
        <div class="footer">You’re receiving this because this inbox is set as the contact receiver for ${BRAND_NAME}.</div>
      </div>
      </body></html>
    `
    const adminText = [
      `${BRAND_NAME} — New Contact Lead`,
      `Lead ID: ${leadId} · ${nowISO}`,
      ``,
      `Name: ${unescapeText(name)}`,
      `Email: ${unescapeText(email)}`,
      `Company: ${unescapeText(company || "-")}`,
      `Message:`,
      unescapeText(message),
    ].join("\n")

    const userSubject = `Thanks, ${sanitize(name)} — we got your message`
    const userHtml = `
      <!doctype html><html><head><meta charSet="utf-8"/><style>${baseStyles}</style></head><body>
      <div class="container">
        <div class="brand">
          <h1>Thanks for contacting ${BRAND_NAME}!</h1>
          <div class="meta">Reference: #${leadId}</div>
        </div>
        <div class="content">
          <p>Hi ${sanitize(name)},</p>
          <p>We’ve received your message and a specialist will reply shortly. Here’s a copy for your records:</p>
          <div class="box">${sanitize(message).replace(/\n/g, "<br/>")}</div>
          <p style="margin-top:14px">If you need to add details, just reply to this email and keep the reference <strong>#${leadId}</strong> in the subject.</p>
          <p style="margin-top:14px">— ${BRAND_NAME} Team</p>
        </div>
        <div class="footer">
          This is a confirmation email. No marketing involved.
          ${LIST_UNSUB_MAILTO ? ` · <a href="${LIST_UNSUB_MAILTO}">Unsubscribe from future emails</a>` : ""}
        </div>
      </div>
      </body></html>
    `
    const userText = [
      `Thanks for contacting ${BRAND_NAME}!`,
      `Reference: #${leadId}`,
      ``,
      `Hi ${unescapeText(name)},`,
      `We’ve received your message and will reply shortly. Your message:`,
      ``,
      unescapeText(message),
      ``,
      `— ${BRAND_NAME} Team`,
    ].join("\n")

    // --- Send admin (lead) email ---
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: adminSubject,
      html: adminHtml,
      text: adminText,
      replyTo: email, // reply goes to prospect
      headers: {
        "X-Entity-Ref-ID": leadId,
        "X-Priority": "3 (Normal)",
        ...(LIST_UNSUB_MAILTO ? { "List-Unsubscribe": `<${LIST_UNSUB_MAILTO}>` } : {}),
      },
    })

    // --- Send auto-reply to submitter ---
    await transporter.sendMail({
      from: MAIL_FROM,
      to: email,
      subject: userSubject,
      html: userHtml,
      text: userText,
      replyTo: MAIL_TO, // if they reply, it goes to your team inbox
      headers: {
        "Auto-Submitted": "auto-replied", // prevents loops
        "X-Auto-Response-Suppress": "OOF, All",
        "X-Entity-Ref-ID": leadId,
        ...(LIST_UNSUB_MAILTO ? { "List-Unsubscribe": `<${LIST_UNSUB_MAILTO}>` } : {}),
      },
    })

    // --- Optional: Slack ping ---
    if (SLACK_WEBHOOK_URL) {
      try {
        await fetch(SLACK_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `*New Contact Lead* (#${leadId})
• *Name:* ${name}
• *Email:* ${email}
• *Company:* ${company || "-"}
• *UTM:* ${utm_source || "-"} / ${utm_medium || "-"} / ${utm_campaign || "-"}
• *IP:* ${ip}`,
          }),
        })
      } catch { /* non-blocking */ }
    }

    return NextResponse.json({
      ok: true,
      leadId,
      thankYou: `Thanks, ${name}! We’ve received your message. Ref #${leadId}.`,
    })
  } catch (err: any) {
    console.error("CONTACT_SMTP_ERROR:", err)
    return NextResponse.json({ error: "Server error sending email" }, { status: 500 })
  }
}

/** Escape for HTML */
function sanitize(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

/** Plain-text variant (no HTML entities) */
function unescapeText(s: string) {
  return String(s).replace(/\r\n/g, "\n")
}
