import Image from "next/image";
import { cn } from "@/lib/utils";
import type { HeroLayer as Layer } from "./data";

export function HeroLayer({ layer, preload }: { layer: Layer; preload?: boolean }) {
  return (
    <div
      className={cn("pointer-events-none absolute", layer.className)}
      style={{ left: `${layer.left}%`, top: `${layer.top}%`, width: `${layer.width}%` }}
    >
      <Image
        src={layer.src}
        alt=""
        width={1000}
        height={Math.round(1000 / layer.ratio)}
        sizes={`${Math.ceil(layer.width)}vw`}
        preload={preload}
        className="h-auto w-full"
      />
    </div>
  );
}
