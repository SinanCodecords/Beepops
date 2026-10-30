import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { ABOUT } from "../data";
import { SectionTitle } from "../section-title";

export function AboutSection() {
  return (
    <section>
      <SectionTitle>{ABOUT.title}</SectionTitle>
      <p className="text-[13.5px] leading-relaxed text-[#706f6f]">{ABOUT.body}</p>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {ABOUT.benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-1.5 text-[12.5px] font-semibold text-ink">
            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} className="text-amber" />
            {benefit}
          </li>
        ))}
      </ul>
    </section>
  );
}
