import type { ShopProduct } from "./data";
import { ShopCardBody } from "./shop-card-body";
import { ShopCardFooter } from "./shop-card-footer";
import { ShopCardImage } from "./shop-card-image";

type Props = { product: ShopProduct; preload?: boolean };

export function ShopCard({ product, preload }: Props) {
  return (
    <article className="flex flex-col rounded-xl border border-[#dee2e6] bg-white p-3 transition-shadow hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)]">
      <ShopCardImage
        src={product.image}
        alt={product.title}
        href={product.href}
        discount={product.discount}
        preload={preload}
      />
      <ShopCardBody product={product} />
      <ShopCardFooter product={product} />
    </article>
  );
}
