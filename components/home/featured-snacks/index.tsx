import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { SNACKS } from "./data";
import { SnackCard } from "./snack-card";

export function FeaturedSnacks() {
  return (
    <Section>
      <SectionHeading eyebrow="Yummy hits!" title="New fav snacks!" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {SNACKS.map((snack) => (
          <SnackCard key={snack.title} snack={snack} />
        ))}
      </div>
    </Section>
  );
}
