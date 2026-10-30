import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { HAPPY_FACES } from "./data";
import { HappyFaceCard } from "./happy-face-card";

export function HappyFaces() {
  return (
    <Section>
      <SectionHeading title="Happy faces" />
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {HAPPY_FACES.map((item) => (
          <HappyFaceCard key={item.image} {...item} />
        ))}
      </div>
    </Section>
  );
}
