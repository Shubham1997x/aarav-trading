"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { EnquiryModal } from "@/components/enquiry-modal";
import { buildWhatsappUrl, siteConfig } from "@/lib/site-config";
import type { Product } from "@/lib/products";

export function ProductDetailActions({ product }: { product: Product }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const whatsappMessage = `Hi ${siteConfig.companyName}, I'm interested in "${product.name}". Could you share pricing and availability?`;

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          onClick={() => setEnquiryOpen(true)}
          className="h-13 flex-1 gap-2 rounded-full bg-foreground px-6 text-base font-semibold text-background hover:bg-foreground/85"
        >
          <LuMessageSquare className="size-4" />
          Send Enquiry
        </Button>
        <Button
          variant="outline"
          nativeButton={false}
          render={
            <a
              href={buildWhatsappUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className="h-13 flex-1 gap-2 rounded-full border-emerald-200 bg-emerald-50 px-6 text-base font-semibold text-emerald-700 hover:bg-emerald-100"
        >
          <FaWhatsapp className="size-4" />
          WhatsApp Enquiry
        </Button>
      </div>

      <EnquiryModal
        product={product}
        open={enquiryOpen}
        onOpenChange={setEnquiryOpen}
      />
    </>
  );
}
