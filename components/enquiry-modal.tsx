"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { LuSend } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { buildMailtoUrl, siteConfig } from "@/lib/site-config";
import type { Product } from "@/lib/products";

export function EnquiryModal({
  product,
  open,
  onOpenChange,
}: {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    `Hi, I'm interested in "${product.name}". Please share pricing and availability.`
  );

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const body = [
      `Product: ${product.name}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailtoUrl = buildMailtoUrl({
      subject: `Enquiry: ${product.name}`,
      body,
    });

    window.location.href = mailtoUrl;
    toast.success("Opening your email app…", {
      description: `Your enquiry for "${product.name}" is ready to send.`,
    });
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-bold">
            Send Enquiry
          </DialogTitle>
          <DialogDescription className="text-base">
            {product.name} — we&apos;ll get back to you by email at{" "}
            {siteConfig.enquiryEmail}.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-1">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="enquiry-name" className="text-sm font-medium">
              Your Name
            </Label>
            <Input
              id="enquiry-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="h-11 text-base"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="enquiry-phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <Input
              id="enquiry-phone"
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="h-11 text-base"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="enquiry-email" className="text-sm font-medium">
              Email (optional)
            </Label>
            <Input
              id="enquiry-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-11 text-base"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="enquiry-message" className="text-sm font-medium">
              Message
            </Label>
            <Textarea
              id="enquiry-message"
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none text-base"
            />
          </div>

          <DialogFooter className="mt-1 -mx-0 -mb-0 rounded-none border-none bg-transparent p-0">
            <Button
              type="submit"
              className="h-11 w-full gap-2 rounded-full bg-emerald-600 text-base font-semibold text-white hover:bg-emerald-700 sm:w-auto"
            >
              <LuSend className="size-4" />
              Send Enquiry
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
