import { discountPercent, type Product } from "@/lib/shopify";
import { AddToBagButton } from "./add-to-bag-button";
import { ProductCardImage } from "./product-card-image";
import { ProductCardInfo } from "./product-card-info";
import { ProductPrice } from "./product-price";

export function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.handle}`;
  const price = product.priceRange.minVariantPrice;
  const compareAt = product.compareAtPriceRange.minVariantPrice;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-white transition-shadow hover:shadow-md">
      <ProductCardImage
        href={href}
        image={product.featuredImage}
        title={product.title}
        discount={discountPercent(price, compareAt)}
        soldOut={!product.availableForSale}
      />
      <div className="flex flex-1 flex-col p-4">
        <ProductCardInfo product={product} href={href} />
        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <ProductPrice price={price} compareAt={compareAt} showFrom={product.variants.length > 1} />
          <AddToBagButton disabled={!product.availableForSale} />
        </div>
      </div>
    </article>
  );
}
