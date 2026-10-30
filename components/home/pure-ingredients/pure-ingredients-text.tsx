import { ArrowButton } from "@/components/shared/arrow-button";

export function PureIngredientsText() {
  return (
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
  );
}
