"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PRODUCT } from "./data";

export function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-8">
      <div className="flex gap-3 md:flex-col md:gap-5">
        {PRODUCT.images.map((src, i) => (
          <Button
            key={i}
            variant="outline"
            aria-label={`Show image ${i + 1}`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "relative size-16 overflow-hidden rounded-lg border-2 bg-white p-0 md:size-[69px]",
              i === active ? "border-amber" : "border-[#e5e5e5] hover:border-amber/50",
            )}
          >
            <Image src={src} alt="" fill sizes="69px" className="object-contain p-1" />
          </Button>
        ))}
      </div>
      <div className="relative aspect-[738/592] flex-1 overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white">
        <Image
          src={PRODUCT.images[active]}
          alt={PRODUCT.title}
          fill
          preload
          sizes="(min-width: 1024px) 740px, 100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
