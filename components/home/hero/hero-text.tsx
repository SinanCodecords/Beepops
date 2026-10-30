import { ArrowButton } from "@/components/shared/arrow-button";

export function HeroText() {
  return (
    <div className="relative z-10 max-w-[492px]">
      <h1 className="text-[40px] leading-[1.05] text-forest sm:text-5xl lg:text-[clamp(2.75rem,4.2vw,3.75rem)]">
        Snack smart
        <br />
        stay strong
      </h1>
      <ArrowButton href="/shop" className="mt-6">
        Explore our snacks
      </ArrowButton>
    </div>
  );
}
