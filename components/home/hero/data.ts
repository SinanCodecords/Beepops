// Positions are percentages of the 1440 x 904 hero area in Figma.
export type HeroLayer = {
  src: string;
  left: number;
  top: number;
  width: number;
  ratio: number;
  className?: string;
};

const W = 1440;
const H = 904;
const Y0 = 134; // header height in Figma

function layer(src: string, x: number, y: number, w: number, h: number, className?: string) {
  const pos = { left: (x / W) * 100, top: ((y - Y0) / H) * 100, width: (w / W) * 100 };
  return { src, ...pos, ratio: w / h, className } satisfies HeroLayer;
}

export const BACKGROUND = layer("/images/hero/brush-strokes.webp", -377, -162, 2308, 836);

export const BARS = [
  layer("/images/hero/bar-dates-shadow.webp", 440, 257, 210, 772, "opacity-60"),
  layer("/images/hero/bar-chocolate-shadow.webp", 913, 224, 97, 751, "opacity-60"),
  layer("/images/hero/bar-dates.webp", 491, 189, 523, 930),
  layer("/images/hero/bar-chocolate.webp", 848, 180, 512, 927),
];

export const STICKERS = [
  layer("/images/hero/sticker-real-ingredients.webp", 83, 168, 246, 123, "drop-shadow-lg"),
  layer("/images/hero/dashed-arrow.webp", 225, 117, 342, 209),
  layer("/images/hero/badge-real-goodness.webp", 825, 233, 232, 208),
  layer("/images/hero/swirl.webp", 1215, 747, 219, 241),
  layer("/images/hero/sticker-fuel-everyday.webp", 1104, 816, 219, 197, "drop-shadow-lg"),
];

export const CRUMBS = [
  layer("/images/hero/caramel-large.webp", 1302, 674, 108, 101),
  layer("/images/hero/puff-1.webp", 1302, 471, 108, 101),
  layer("/images/hero/puff-2.webp", 907, 494, 74, 70),
  layer("/images/hero/puff-3.webp", 1292, 609, 63, 60),
  layer("/images/hero/puff-4.webp", 900, 590, 44, 41),
  layer("/images/hero/caramel-blur.webp", 1379, 409, 61, 57),
  layer("/images/hero/caramel-small.webp", 1383, 581, 43, 40),
];
