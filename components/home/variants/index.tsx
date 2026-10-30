import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { VARIANTS } from "./data";
import { VariantCard } from "./variant-card";

export function Variants() {
  return (
    <Section className="relative">
      <SectionHeading eyebrow="Explore the range" title="Our variants" titleClassName="normal-case" />
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {VARIANTS.map((v) => (
          <VariantCard key={v.title} {...v} />
        ))}
      </div>
    </Section>
  );
}
