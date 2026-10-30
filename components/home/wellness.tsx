import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Leaf01Icon, Plant02Icon, Stethoscope02Icon } from "@hugeicons/core-free-icons";
import { Section, SectionHeading } from "@/components/shared/section";

const WELLNESS = [
  {
    title: "Quality Ingredients",
    text: "We use only the finest natural ingredients sourced from trusted suppliers.",
    image: "/images/wellness/quality-ingredients.webp",
    icon: Leaf01Icon,
  },
  {
    title: "Nutritionist-Led Formulations",
    text: "Each product is crafted by experts in wellness, ensuring efficacy and safety.",
    image: "/images/wellness/nutritionist-led.webp",
    icon: Stethoscope02Icon,
  },
  {
    title: "Sustainability Focus",
    text: "We prioritize eco-friendly practices, positively impacting health and the environment.",
    image: "/images/wellness/sustainability.webp",
    icon: Plant02Icon,
  },
];

export function Wellness() {
  return (
    <Section>
      <SectionHeading eyebrow="What sets us apart" title="Mindful wellness" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {WELLNESS.map(({ title, text, image, icon }) => (
          <article
            key={title}
            className="overflow-hidden rounded-xl border border-border bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
          >
            <div className="relative aspect-[412/263] bg-honey">
              <Image src={image} alt="" fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
            </div>
            <div className="relative px-8 pt-12 pb-9">
              <span className="absolute -top-6 left-8 flex size-12 items-center justify-center rounded-2xl border-2 border-white bg-honey text-white">
                <HugeiconsIcon icon={icon} size={22} />
              </span>
              <h3 className="text-base text-ink">{title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#9b9e9e]">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
