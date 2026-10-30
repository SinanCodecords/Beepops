import Image from "next/image";
import { ArrowButton } from "@/components/shared/arrow-button";
import { Section } from "@/components/shared/section";

export function PureIngredients() {
  return (
    <Section containerClassName="grid items-start gap-8 md:grid-cols-[686fr_565fr] md:gap-7">
      <div className="relative aspect-[686/547] overflow-hidden">
        <Image
          src="/images/about/pure-ingredients.webp"
          alt="Smiling grandmother enjoying BeePops Ashwagandha millet protein bars"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-[34px] leading-[1.15] text-forest md:text-[clamp(2.25rem,3.4vw,3.3rem)]">
          Pure ingredients, real growth
        </h2>
        <p className="mt-6 text-lg font-medium text-[#888] uppercase md:text-[22px]">
          From our farm network to your table, naturally
        </p>
        <p className="mt-6 text-base font-medium text-[#888] md:text-justify md:text-[22px] md:leading-snug">
          Every ingredient we use is grown with intention and care, from the very first seed to the
          final harvest. We partner closely with local cultivators and communities to ensure that
          each crop is responsibly nurtured, free from harmful chemicals, and picked at peak
          freshness. Because real wellness starts at the root.
        </p>
        <ArrowButton href="/about" className="mt-10 self-start">
          About us
        </ArrowButton>
      </div>
    </Section>
  );
}
