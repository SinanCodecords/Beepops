import { BACKGROUND, BARS, CRUMBS, STICKERS } from "./data";
import { HeroLayer } from "./hero-layer";

// Absolutely positioned artwork, scaled with the hero's width.
export function HeroArt() {
  return (
    <div aria-hidden className="absolute inset-0">
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
  );
}
