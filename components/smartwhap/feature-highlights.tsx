"use client";

import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  Plug,
  ShoppingCart,
  Webhook,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import { DialogFooter, DialogHeader } from "../ui/dialog";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";

const items = [
  {
    title: "Automated OpenAI-Powered Chat",
    desc: "Context-aware replies, tone control, translation, and summarization with GPT.",
    icon: Bot,
    img: "/aipoweredchat.png",
  },
  {
    title: "No-Code AI Agent Builder",
    desc: "Create personal AI agents with prompts, memory, and guardrails—no code.",
    icon: Workflow,
    img: "/AI-Agent-Builder-no-code.png",
  },
  {
    title: "E-commerce & Webhook Integrations",
    desc: "Shopify, WooCommerce, custom carts—abandoned carts, COD confirmation, order updates.",
    icon: ShoppingCart,
    img: "/webhook.png",
  },
  {
    title: "REST APIs",
    desc: "Connect any third-party tool with instant webhooks and secure, documented APIs.",
    icon: Webhook,
    img: "/API-integration.png",
  },
  {
    title: "No-Code Workflows",
    desc: "Drag-and-drop flows: triggers, conditions, actions, delays, fallbacks, and alerts.",
    icon: Plug,
    img: "/No-code-workflow.png",
  },
  {
    title: "Insights & Reporting",
    desc: "Track delivery, CTR, CSAT, agent SLAs, and conversion with real-time dashboards.",
    icon: BarChart3,
    img: "/Reporting-analytics.png",
  },
];

function FeatureHighlights() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <section
      id="highlights"
      aria-labelledby="highlights-title"
      className="scroll-mt-20 py-14 md:py-6"
    >
      <div className="container mx-auto px-4">
        {/* Title & Intro */}
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="highlights-title"
            className="text-pretty text-1xl md:text-4xl font-bold"
          >
            Smart Features that convert conversations into revenue
          </h2>
          <p className="mt-3 text-muted-foreground max-w-prose mx-auto">
            Stand out from competitors with AI-first automation, no-code
            workflows, and enterprise-ready integrations—all in one
            WhatsApp-powered platform.
          </p>
        </div>
        {/* <Dialog
          open={!!dialogOpen}
          onOpenChange={() => {
            setSelectedImage(null);
            setDialogOpen(false);
          }}
        >
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Image Preview</DialogTitle>
            </DialogHeader>

            <div className="max-h-[70vh] overflow-y-auto pr-2 scrollbar-hide space-y-6">
              <Card
                style={{ borderRadius: "var(--border-radius)" }}
                className="bg-gray-50 border-none shadow-none"
              >
                <CardContent className="p-4 space-y-2">
                  <img
                    className="h-16 w-16"
                    src={selectedImage || "/placeholder.svg"}
                    alt="Image Preview"
                  />{" "}
                </CardContent>
              </Card>
            </div>
            <DialogFooter>
              <Button
                style={{ borderRadius: "var(--border-radius)" }}
                variant="outline"
                onClick={() => {
                  setSelectedImage(null);
                  setDialogOpen(false);
                }}
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-xl border bg-card p-4 md:p-5 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
                <div className="mt-4 overflow-hidden rounded-lg border">
                  <motion.div
                    initial={{ scale: 1.02 }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src={item.img || "/placeholder.svg"}
                      width={480}
                      height={240}
                      alt={`${item.title} illustration`}
                      className="w-full h-auto"
                      onClick={() => {
                        setSelectedImage(item.img);
                        setDialogOpen(true);
                      }}
                    />
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureHighlights;
export { FeatureHighlights };
