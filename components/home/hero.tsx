import Image from "next/image";
import { ArrowButton } from "@/components/shared/arrow-button";
import { cn } from "@/lib/utils";

// Positions are percentages of the 1440 x 904 hero area in Figma.
type Layer = { src: string; left: number; top: number; width: number; ratio: number; className?: string };

const W = 1440;
const H = 904;
const Y0 = 134; // header height in Figma

function layer(src: string, x: number, y: number, w: number, h: number, className?: string): Layer {
  const pos = { left: (x / W) * 100, top: ((y - Y0) / H) * 100, width: (w / W) * 100 };
  return { src, ...pos, ratio: w / h, className };
}

const BACKGROUND = layer("/images/hero/brush-strokes.webp", -377, -162, 2308, 836);

const BARS = [
  layer("/images/hero/bar-dates-shadow.webp", 440, 257, 210, 772, "opacity-60"),
  layer("/images/hero/bar-chocolate-shadow.webp", 913, 224, 97, 751, "opacity-60"),
  layer("/images/hero/bar-dates.webp", 491, 189, 523, 930),
  layer("/images/hero/bar-chocolate.webp", 848, 180, 512, 927),
];

const STICKERS = [
  layer("/images/hero/sticker-real-ingredients.webp", 83, 168, 246, 123, "drop-shadow-lg"),
  layer("/images/hero/dashed-arrow.webp", 225, 117, 342, 209),
  layer("/images/hero/badge-real-goodness.webp", 825, 233, 232, 208),
  layer("/images/hero/swirl.webp", 1215, 747, 219, 241),
  layer("/images/hero/sticker-fuel-everyday.webp", 1104, 816, 219, 197, "drop-shadow-lg"),
];

const CRUMBS = [
  layer("/images/hero/caramel-large.webp", 1302, 674, 108, 101),
  layer("/images/hero/puff-1.webp", 1302, 471, 108, 101),
  layer("/images/hero/puff-2.webp", 907, 494, 74, 70),
  layer("/images/hero/puff-3.webp", 1292, 609, 63, 60),
  layer("/images/hero/puff-4.webp", 900, 590, 44, 41),
  layer("/images/hero/caramel-blur.webp", 1379, 409, 61, 57),
  layer("/images/hero/caramel-small.webp", 1383, 581, 43, 40),
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1440px] md:aspect-[1440/904]">
        {/* Phones: crop the artwork around the bars. Desktop: full Figma layout. */}
        <div className="relative aspect-square overflow-hidden md:absolute md:inset-0 md:aspect-auto">
          <div
            aria-hidden
            className="absolute top-0 left-[-48%] aspect-[1440/904] w-[160%] md:inset-0 md:aspect-auto md:w-full"
          >
            <HeroLayer layer={BACKGROUND} preload />
            {CRUMBS.map((l) => (
              <HeroLayer key={l.src} layer={l} />
            ))}
            {BARS.map((l) => (
              <HeroLayer key={l.src} layer={l} preload />
            ))}
            {STICKERS.map((l) => (
              <HeroLayer key={l.src} layer={l} />
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-[492px] px-4 pb-6 md:absolute md:top-[62%] md:left-[4.4%] md:p-0">
          <h1 className="text-[40px] leading-[1.05] text-forest sm:text-5xl lg:text-[clamp(2.75rem,4.2vw,3.75rem)]">
            Snack smart
            <br />
            stay strong
          </h1>
          <ArrowButton href="/shop" className="mt-6">
            Explore our snacks
          </ArrowButton>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none relative -mb-[12%] w-full">
        <Image
          src="/images/hero/ingredients-strip.webp"
          alt=""
          width={2880}
          height={1150}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}

function HeroLayer({ layer, preload }: { layer: Layer; preload?: boolean }) {
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
