import Image from "next/image";
import Link from "next/link";
import type { RelatedProduct } from "../data";

export function RelatedCard({ product }: { product: RelatedProduct }) {
  return (
    <Link
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
  );
}
