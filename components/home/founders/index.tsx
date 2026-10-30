import { Eyebrow } from "@/components/shared/eyebrow";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FOUNDERS } from "./data";
import { FounderCard } from "./founder-card";

export function Founders() {
  return (
    <Section>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Founder highlight" title="Promise makers" />
        <Eyebrow>Doctor-led · family-safe · Jaipur-born</Eyebrow>
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-5">
        {FOUNDERS.map((f) => (
          <FounderCard key={f.name} {...f} />
        ))}
      </div>
    </Section>
  );
}
