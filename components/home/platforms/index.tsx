import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { PLATFORMS } from "./data";
import { PlatformCard } from "./platform-card";

export function Platforms() {
  return (
    <Section className="my-10 bg-honey py-16 md:my-[35px] md:py-[68px]">
      <SectionHeading
        eyebrow="Clean eating going viral"
        title="On all major platforms"
        align="center"
        className="[&>p]:text-[#3a593e]"
      />
      <p className="mt-4 text-center text-[#5c5749] md:text-lg">
        Keep up with BeePops — catch us wherever you shop!
      </p>
      <div className="mx-auto mt-12 grid max-w-[1216px] grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
        {PLATFORMS.map((p) => (
          <PlatformCard key={p.name} {...p} />
        ))}
      </div>
    </Section>
  );
}
