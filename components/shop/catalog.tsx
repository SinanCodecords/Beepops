import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import {
  discountPercent,
  formatPrice,
  getCategory,
  getProducts,
  getSubtitle,
  type Product,
} from "@/lib/shopify";
import { ShopFilters } from "./filters";
import { parseShopParams, toShopifyQuery, type ShopSearchParams } from "./params";

const CHIPS = ["Jaipur Crafted", "Clean Nutrition"];

// Filters sidebar + product grid. Both read the URL, so they stream in after the static shell.
export function ShopCatalog({ searchParams }: { searchParams: Promise<ShopSearchParams> }) {
  return (
    <Container className="grid gap-6 py-8 lg:grid-cols-[272px_1fr] lg:items-start lg:py-8 lg:pb-24">
      <Suspense fallback={<div className="h-12 rounded-xl border border-[#dee2e6] lg:h-[460px]" />}>
        <ShopFilters />
      </Suspense>
      <Suspense fallback={<GridSkeleton />}>
        <Results searchParams={searchParams} />
      </Suspense>
    </Container>
  );
}

async function Results({ searchParams }: { searchParams: Promise<ShopSearchParams> }) {
  const filters = parseShopParams(await searchParams);
  const products = await getProducts({
    sortKey: filters.sort.sortKey,
    reverse: filters.sort.reverse,
    query: toShopifyQuery(filters),
  });

  return (
    <div className="min-w-0 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[15.5px] text-ink">
          Showing <strong className="font-semibold">{products.length}</strong> signature BeePops
          products
        </p>
        <ul className="flex gap-2">
          {CHIPS.map((chip) => (
            <li key={chip} className="rounded-full bg-forest px-3 py-1.5 text-[10.7px] font-semibold text-white">
              {chip}
            </li>
          ))}
        </ul>
      </div>
      {products.length ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {products.map((product, i) => (
            <ShopCard key={product.id} product={product} preload={i < 3} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-[#dee2e6] py-16 text-center text-sm text-[#706f6f]">
          No products match these filters. Try a different category or price range.
        </p>
      )}
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="grid gap-5 pt-14 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="aspect-[288/400] animate-pulse rounded-xl bg-cream" />
      ))}
    </div>
  );
}

function ShopCard({ product, preload }: { product: Product; preload?: boolean }) {
  const href = `/products/${product.handle}`;
  const price = product.priceRange.minVariantPrice;
  const compareAt = product.compareAtPriceRange.minVariantPrice;
  const discount = discountPercent(price, compareAt);
  const image = product.featuredImage;

  return (
    <article className="flex flex-col rounded-xl border border-[#dee2e6] bg-white p-3 transition-shadow hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)]">
      <Link href={href} className="relative block aspect-[288/253] overflow-hidden rounded-lg bg-cream">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            preload={preload}
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <span className="grid h-full place-items-center font-logo text-2xl text-forest/40">BeePops</span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 left-3 rounded-[4px] bg-amber px-2 py-1 text-[10px] leading-none font-bold text-white uppercase">
            {discount}% off
          </span>
        )}
      </Link>
      <div className="px-1 pt-4">
        <p className="truncate text-[11px] font-semibold text-[#706f6f]">
          {getCategory(product.tags, product.productType)}
        </p>
        <h3 className="mt-2 text-xs leading-relaxed text-[#1b3a2d]">
          <Link href={href} className="hover:underline">
            {product.title}
          </Link>
        </h3>
        <p className="mt-0.5 text-[11px] text-[#706f6f]">{getSubtitle(product.description)}</p>
      </div>
      <div className="mt-auto flex items-center justify-between gap-2 px-1 pt-4">
        <p className="flex items-baseline gap-1.5">
          <span className="text-[17.5px] font-extrabold text-ink">{formatPrice(price)}</span>
          {discount > 0 && (
            <span className="text-xs text-[#706f6f] line-through">{formatPrice(compareAt)}</span>
          )}
        </p>
        <Button size="sm" className="px-4 text-xs font-bold hover:bg-forest-deep" disabled={!product.availableForSale}>
          {product.availableForSale ? "Add To Bag" : "Sold Out"}
        </Button>
      </div>
    </article>
  );
}
