import { RELATED } from "../data";
import { SectionTitle } from "../section-title";
import { RelatedCard } from "./related-card";

export function RelatedProducts() {
  return (
    <section>
      <SectionTitle>Other Products from BeePops</SectionTitle>
      <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 md:gap-5">
        {RELATED.map((product) => (
          <RelatedCard key={product.href} product={product} />
        ))}
      </div>
    </section>
  );
}
