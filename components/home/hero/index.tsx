import { HeroArt } from "./hero-art";
import { HeroText } from "./hero-text";
import { IngredientsStrip } from "./ingredients-strip";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1440px] md:aspect-[1440/904]">
        {/* Phones: crop the artwork around the bars. Desktop: full Figma layout. */}
        <div className="relative aspect-square overflow-hidden md:absolute md:inset-0 md:aspect-auto">
          <div className="absolute top-0 left-[-48%] aspect-[1440/904] w-[160%] md:inset-0 md:aspect-auto md:w-full">
            <HeroArt />
          </div>
        </div>
        <div className="relative z-10 px-4 pb-6 md:absolute md:top-[62%] md:left-[4.4%] md:p-0">
          <HeroText />
        </div>
      </div>
      <IngredientsStrip />
    </section>
  );
}
