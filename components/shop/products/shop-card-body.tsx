import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";
import type { ShopProduct } from "./data";

export function ShopCardBody({ product }: { product: ShopProduct }) {
  return (
    <div className="px-1 pt-4">
      <div className="flex items-center justify-between gap-2 text-[11px]">
        <p className="flex items-center gap-1 font-bold text-[#5c5749]">
          <HugeiconsIcon icon={StarIcon} size={11} className="text-amber" />
          {product.rating}
        </p>
        <p className="truncate font-semibold text-[#706f6f]">{product.category}</p>
      </div>
      <h3 className="mt-2 text-xs leading-relaxed text-[#1b3a2d]">
        <Link href={product.href} className="hover:underline">
          {product.title}
        </Link>
      </h3>
      <p className="mt-0.5 text-[11px] text-[#706f6f]">{product.subtitle}</p>
    </div>
  );
}
