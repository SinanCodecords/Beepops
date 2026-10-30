"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Image as ShopifyImage } from "@/lib/shopify/types";
import { cn } from "@/lib/utils";

export function Gallery({ images, title }: { images: ShopifyImage[]; title: string }) {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-8">
      {images.length > 1 && (
        <div className="flex gap-3 md:flex-col md:gap-5">
          {images.map((image, i) => (
            <Button
              key={image.url}
              variant="outline"
              aria-label={`Show image ${i + 1}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "relative size-16 overflow-hidden rounded-lg border-2 bg-white p-0 md:size-[69px]",
                i === active ? "border-amber" : "border-[#e5e5e5] hover:border-amber/50",
              )}
            >
              <Image src={image.url} alt="" fill sizes="69px" className="object-contain p-1" />
            </Button>
          ))}
        </div>
      )}
      <div className="relative aspect-[738/592] flex-1 overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white">
        {current ? (
          <Image
            src={current.url}
            alt={current.altText ?? title}
            fill
            preload
            sizes="(min-width: 1024px) 740px, 100vw"
            className="object-contain"
          />
        ) : (
          <span className="grid h-full place-items-center bg-cream font-logo text-4xl text-forest/40">BeePops</span>
        )}
      </div>
    </div>
  );
}
