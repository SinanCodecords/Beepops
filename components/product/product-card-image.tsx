import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Image01Icon } from "@hugeicons/core-free-icons";
import type { Image as ShopifyImage } from "@/lib/shopify";
import { ProductBadges } from "./product-badges";

type Props = {
  href: string;
  image: ShopifyImage | null;
  title: string;
  discount: number;
  soldOut: boolean;
};

export function ProductCardImage({ href, image, title, discount, soldOut }: Props) {
  return (
    <Link href={href} className="relative block aspect-square overflow-hidden bg-cream">
      {image ? (
        <Image
          src={image.url}
          alt={image.altText ?? title}
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
      <ProductBadges discount={discount} soldOut={soldOut} />
    </Link>
  );
}
