import Image from "next/image";
import { Section } from "@/components/shared/section";
import { PureIngredientsText } from "./pure-ingredients-text";

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
      <PureIngredientsText />
    </Section>
  );
}
