import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { VALUES } from "./data";
import { ValueCard } from "./value-card";

export function Values() {
  return (
    <Section className="md:pt-[70px]">
      <SectionHeading eyebrow="What we stand for" title="Mindful wellness" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {VALUES.map((item) => (
          <ValueCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
