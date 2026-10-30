import Image from "next/image";
import Link from "next/link";

type Props = { src: string; alt: string; href: string; discount: string; preload?: boolean };

export function ShopCardImage({ src, alt, href, discount, preload }: Props) {
  return (
    <Link href={href} className="relative block aspect-[288/253] overflow-hidden rounded-lg bg-cream">
      <Image
        src={src}
        alt={alt}
        fill
        preload={preload}
        sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
      <span className="absolute top-3 left-3 rounded-[4px] bg-amber px-2 py-1 text-[10px] leading-none font-bold text-white uppercase">
        {discount}
      </span>
    </Link>
  );
}
