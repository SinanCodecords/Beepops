import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import {
  discountPercent,
  formatPrice,
  getCategory,
  getCollectionProducts,
  getProducts,
  getSubtitle,
  type Product,
} from "@/lib/shopify";

// Products in Shopify's "Home page" collection; until it has any, the four newest products.
export async function FeaturedSnacks() {
  const featured = await getCollectionProducts("frontpage", 4);
  const products = featured.length
    ? featured
    : await getProducts({ first: 4, sortKey: "CREATED_AT", reverse: true });

  return (
    <Section>
      <SectionHeading eyebrow="Yummy hits!" title="New fav snacks!" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {products.map((product) => (
          <SnackCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}

function SnackCard({ product }: { product: Product }) {
  const href = `/products/${product.handle}`;
  const price = product.priceRange.minVariantPrice;
  const compareAt = product.compareAtPriceRange.minVariantPrice;
  const discount = discountPercent(price, compareAt);

  return (
    <article className="flex flex-col rounded-xl border border-border bg-cream p-3 pb-4 shadow-[0_3px_19px_rgba(0,0,0,0.06)]">
      <Link href={href} className="relative block aspect-square overflow-hidden rounded-2xl bg-white">
        {product.featuredImage ? (
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText ?? product.title}
            fill
            sizes="(min-width: 1024px) 20vw, 50vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <span className="grid h-full place-items-center font-logo text-2xl text-forest/40">BeePops</span>
        )}
        <Image
          src="/images/icons/veg-mark.webp"
          alt="Vegetarian"
          width={24}
          height={23}
          className="absolute top-2.5 left-2.5 h-[23px] w-6"
        />
      </Link>
      <div className="flex flex-1 flex-col px-1.5 pt-4">
        <p className="text-[10px] font-medium text-[#b0a894]">{getCategory(product.tags, product.productType)}</p>
        <h3 className="mt-1.5 text-sm leading-snug text-ink">
          <Link href={href} className="hover:underline">
            {product.title}
          </Link>
        </h3>
        <p className="mt-1 text-[11px] font-medium text-stone">{getSubtitle(product.description)}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <p className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-bold text-ink">{formatPrice(price)}</span>
            {discount > 0 && (
              <span className="text-sm font-bold text-[#9b9e9e] line-through">{formatPrice(compareAt)}</span>
            )}
          </p>
          <Button size="xs" disabled={!product.availableForSale} className="h-7 w-[105px] text-[11px] hover:bg-forest-deep">
            {product.availableForSale ? "Add" : "Sold out"}
          </Button>
        </div>
      </div>
    </article>
  );
}
