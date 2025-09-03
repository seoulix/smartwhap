import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyPGCD7pA8_7qM5gwoOoOtv6O402JwATJT8-HLlpu1NvdWpPvB7FhiXtb5k8s56TcBm/exec";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    console.log("1. Received email:", email);
    
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const fullUrl = `${SCRIPT_URL}?email=${encodeURIComponent(email)}`;
    console.log("2. Making request to:", fullUrl);

    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });
    
    console.log("3. Response status:", response.status);
    console.log("4. Response ok:", response.ok);
    console.log("5. Response headers:", Object.fromEntries(response.headers));
    
    if (!response.ok) {
      console.log("6. Response not OK - getting text...");
      const errorText = await response.text();
      console.error("7. Apps Script returned non-OK:", errorText);
      return NextResponse.json({ error: "Google Script returned error: " + errorText }, { status: 500 });
    }

    console.log("8. Getting response text...");
    const rawText = await response.text();
    console.log("9. Raw response:", rawText);
    console.log("10. Raw response length:", rawText.length);
    console.log("11. Raw response type:", typeof rawText);
    
    if (!rawText || rawText.trim() === '') {
      console.error("12. Empty response from Apps Script");
      return NextResponse.json({ error: "Empty response from Google Script" }, { status: 500 });
    }

    console.log("13. Attempting to parse JSON...");
    let data;
    try {
      data = JSON.parse(rawText);
      console.log("14. Successfully parsed JSON:", data);
    } catch (parseError) {
      console.error("15. Failed parsing JSON from Apps Script:", rawText);
      console.error("16. Parse error details:", parseError);
      return NextResponse.json({ error: "Invalid JSON response from Google Script: " + rawText }, { status: 500 });
    }

    console.log("17. Returning success response");
    return NextResponse.json({ message: "Success", data });
  } catch (error) {
    console.error("18. API Route Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}