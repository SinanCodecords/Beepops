import Link from "next/link";
import { getCategory, type Product } from "@/lib/shopify";

export function ProductCardInfo({ product, href }: { product: Product; href: string }) {
  const option = product.variants.length > 1 ? product.options[0] : null;
  return (
    <>
      <p className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
        {getCategory(product.tags, product.productType)}
      </p>
      <h3 className="mt-1 text-lg leading-tight">
        <Link href={href} className="hover:text-forest">
          {product.title}
        </Link>
      </h3>
      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{product.description}</p>
      {option && (
        <p className="mt-2 text-[11px] text-foreground/70">
          {option.name}: {option.values.join(" · ")}
        </p>
      )}
    </>
  );
}
