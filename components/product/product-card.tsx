import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Image01Icon } from "@hugeicons/core-free-icons";
import { formatPrice, type Product } from "@/lib/shopify";

// Tags that act as shop categories; the rest (e.g. "Jaipur Crafted") are badges.
const CATEGORY_TAGS = ["Millet Protein Bars", "Himalayan Honey", "Cookies & Snacks", "Peanut Butter"];

function discountPercent(price: number, compareAt: number) {
  return compareAt > price ? Math.round(((compareAt - price) / compareAt) * 100) : 0;
}

export function ProductCard({ product }: { product: Product }) {
  const price = product.priceRange.minVariantPrice;
  const compareAt = product.compareAtPriceRange.minVariantPrice;
  const discount = discountPercent(Number(price.amount), Number(compareAt.amount));
  const category = product.tags.find((t) => CATEGORY_TAGS.includes(t)) ?? product.productType;
  const hasOptions = product.variants.length > 1;
  const href = `/products/${product.handle}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-white transition-shadow hover:shadow-md">
      <Link href={href} className="relative block aspect-square overflow-hidden bg-cream">
        {product.featuredImage ? (
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText ?? product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <HugeiconsIcon icon={Image01Icon} size={28} />
            <span className="text-xs">No image yet</span>
          </div>
        )}
        {discount > 0 && (
          <span className="absolute top-3 left-3 rounded-md bg-amber px-2 py-0.5 text-[10px] font-bold text-forest uppercase">
            {discount}% off
          </span>
        )}
        {!product.availableForSale && (
          <span className="absolute top-3 right-3 rounded-md bg-foreground/80 px-2 py-0.5 text-[10px] font-bold text-white uppercase">
            Sold out
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
          {category}
        </p>
        <h3 className="mt-1 text-lg leading-tight">
          <Link href={href} className="hover:text-forest">
            {product.title}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{product.description}</p>

        {hasOptions && (
          <p className="mt-2 text-[11px] text-foreground/70">
            {product.options[0].name}: {product.options[0].values.join(" · ")}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <p className="flex items-baseline gap-1.5">
            <span className="text-base font-bold">
              {hasOptions && <span className="text-xs font-medium">From </span>}
              {formatPrice(price)}
            </span>
            {discount > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(compareAt)}
              </span>
            )}
          </p>
          {/* Add to Bag gets wired to the Shopify cart in Step 5. */}
          <button
            type="button"
            disabled={!product.availableForSale}
            className="h-8 shrink-0 rounded-full bg-forest px-4 text-xs font-medium text-white transition-colors hover:bg-forest-deep disabled:opacity-50"
          >
            Add To Bag
          </button>
        </div>
      </div>
    </article>
  );
}
