import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { WELLNESS } from "./data";
import { WellnessCard } from "./wellness-card";

export function Wellness() {
  return (
    <Section>
      <SectionHeading eyebrow="What sets us apart" title="Mindful wellness" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {WELLNESS.map((item) => (
          <WellnessCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
