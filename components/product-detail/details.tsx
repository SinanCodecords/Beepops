import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import {
  formatPrice,
  getProductRecommendations,
  getProducts,
  getSubtitle,
  type Product,
} from "@/lib/shopify";

const BENEFITS = ["100% Natural Ingredients", "No Refined Sugar", "Doctor-Approved & Kid-Safe"];

// The first sentence of a description is the subtitle; the rest is the "About" text.
function aboutText(description: string) {
  return description.split(". ").slice(1).join(". ") || description;
}

function specs(product: Product, category: string) {
  const rows = [
    { label: "Pack Size", value: getSubtitle(product.description).split(" · ")[0] },
    { label: "Category", value: category },
    { label: "Made In", value: "Jaipur, Rajasthan" },
    { label: "Availability", value: product.availableForSale ? "In stock" : "Sold out" },
  ];
  if (product.variants.length > 1) {
    rows.splice(1, 0, { label: "Options", value: product.variants.map((v) => v.title).join(", ") });
  }
  return rows;
}

// Shopify's recommendations, topped up with other products when it has too few.
async function related(product: Product) {
  const picks = await getProductRecommendations(product.id);
  const others = picks.length >= 3 ? picks : [...picks, ...(await getProducts({ first: 6 }))];
  const seen = new Set([product.id]);
  return others.filter((p) => !seen.has(p.id) && seen.add(p.id)).slice(0, 3);
}

// About, specs and related products under the gallery.
export async function ProductDetails({ product, category }: { product: Product; category: string }) {
  const relatedProducts = await related(product);

  return (
    <>
      <section>
        <SectionTitle>About {product.title}</SectionTitle>
        <p className="text-[13.5px] leading-relaxed text-[#706f6f]">{aboutText(product.description)}</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {BENEFITS.map((benefit) => (
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
          {specs(product, category).map((spec) => (
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
          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              href={`/products/${item.handle}`}
              className="w-[240px] shrink-0 snap-start rounded-xl border border-[#e5e5e5] bg-white p-4 transition-shadow hover:shadow-md sm:w-auto"
            >
              <div className="relative aspect-[236/154] overflow-hidden rounded-lg bg-cream">
                {item.featuredImage && (
                  <Image src={item.featuredImage.url} alt={item.title} fill sizes="240px" className="object-contain" />
                )}
              </div>
              <h3 className="mt-3 text-xs leading-snug text-forest">{item.title}</h3>
              <p className="mt-1 text-[11.5px] text-[#706f6f]">{getSubtitle(item.description)}</p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="text-[13.5px] font-extrabold text-forest">
                  {formatPrice(item.priceRange.minVariantPrice)}
                </span>
                {Number(item.compareAtPriceRange.minVariantPrice.amount) > 0 && (
                  <span className="text-[11.5px] text-[#706f6f] line-through">
                    {formatPrice(item.compareAtPriceRange.minVariantPrice)}
                  </span>
                )}
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
