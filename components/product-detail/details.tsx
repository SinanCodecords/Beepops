import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { ABOUT, RELATED, SPECS } from "./data";

// About, specs and related products under the gallery.
export function ProductDetails() {
  return (
    <>
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
      <section>
        <SectionTitle>Other Products from BeePops</SectionTitle>
        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 md:gap-5">
          {RELATED.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="w-[240px] shrink-0 snap-start rounded-xl border border-[#e5e5e5] bg-white p-4 transition-shadow hover:shadow-md sm:w-auto"
            >
              <div className="relative aspect-[236/154]">
                <Image src={product.image} alt={product.title} fill sizes="240px" className="object-contain" />
              </div>
              <h3 className="mt-3 text-xs leading-snug text-forest">{product.title}</h3>
              <p className="mt-1 text-[11.5px] text-[#706f6f]">{product.subtitle}</p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="text-[13.5px] font-extrabold text-forest">{product.price}</span>
                <span className="text-[11.5px] text-[#706f6f] line-through">{product.compareAt}</span>
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-sans text-lg font-extrabold tracking-normal text-forest normal-case md:text-xl">
      {children}
    </h2>
  );
}
