"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnquiryModal } from "@/components/enquiry-modal";
import { buildWhatsappUrl, siteConfig } from "@/lib/site-config";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const discountPct = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  const whatsappMessage = `Hi ${siteConfig.companyName}, I'm interested in "${product.name}". Could you share pricing and availability?`;

  return (
    <>
      <Card className="group gap-0 py-0 transition-shadow hover:shadow-xl">
        <Link
          href={`/products/${product.id}`}
          className="relative block aspect-square w-full overflow-hidden bg-muted"
        >
          <Image
            src={product.hero}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-contain  transition-transform duration-300 group-hover:scale-105"
          />
          {discountPct > 0 && (
            <Badge className="absolute top-3 left-3 bg-emerald-600 text-white">
              {discountPct}% OFF
            </Badge>
          )}
        </Link>

        <CardContent className="flex flex-1 flex-col gap-2 px-4 pt-4">
          <span className="text-xs font-semibold tracking-wide text-emerald-600 uppercase">
            {product.brand}
          </span>
          <Link href={`/products/${product.id}`}>
            <h3 className="font-heading text-lg leading-snug font-semibold text-foreground hover:text-emerald-700">
              {product.name}
            </h3>
          </Link>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-xl font-bold text-foreground">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.mrp > product.price && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.mrp.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="mt-3 flex-col gap-2 border-t-0 bg-transparent px-4 pb-4">
          <Button
            onClick={() => setEnquiryOpen(true)}
            className="h-11 w-full gap-2 rounded-full bg-foreground text-base font-semibold text-background hover:bg-foreground/85"
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
            className="h-11 w-full gap-2 rounded-full border-emerald-200 bg-emerald-50 text-base font-semibold text-emerald-700 hover:bg-emerald-100"
          >
            <FaWhatsapp className="size-4" />
            WhatsApp Enquiry
          </Button>
        </CardFooter>
      </Card>

      <EnquiryModal
        product={product}
        open={enquiryOpen}
        onOpenChange={setEnquiryOpen}
      />
    </>
  );
}
