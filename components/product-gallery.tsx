"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-muted ring-1 ring-border">
        <Image
          src={active}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-contain"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {images.map((image) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(image)}
              className={cn(
                "relative aspect-square overflow-hidden rounded-xl bg-muted ring-1 ring-border transition-all hover:ring-emerald-400",
                active === image && "ring-2 ring-emerald-600"
              )}
            >
              <Image
                src={image}
                alt={alt}
                fill
                sizes="120px"
                className="object-contain "
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
