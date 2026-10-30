import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TESTIMONIALS } from "./data";
import { TestimonialCard } from "./testimonial-card";

export function Testimonials() {
  return (
    <Section>
      <SectionHeading eyebrow="Happy faces" title="Loved by many" />
      <div className="-mr-4 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:-mr-8">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </Section>
  );
}
