import { SPECS } from "../data";
import { SectionTitle } from "../section-title";

export function SpecsTable() {
  return (
    <section>
      <SectionTitle>Product Specifications</SectionTitle>
      <dl className="overflow-hidden rounded-lg border border-[#dee2e6] text-[13.5px]">
        {SPECS.map((spec) => (
          <div
            key={spec.label}
            className="grid grid-cols-[120px_1fr] gap-4 border-b border-[#dee2e6] px-4 py-3.5 last:border-b-0 even:bg-[#fbfbfa] md:grid-cols-[230px_1fr]"
          >
            <dt className="font-bold text-ink">{spec.label}</dt>
            <dd className="text-[#706f6f]">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
