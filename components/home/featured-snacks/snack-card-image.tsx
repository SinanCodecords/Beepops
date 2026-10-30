import Image from "next/image";
import Link from "next/link";

export function SnackCardImage({ src, alt, href }: { src: string; alt: string; href: string }) {
  return (
    <Link href={href} className="relative block aspect-square overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 20vw, 50vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
      <Image
        src="/images/icons/veg-mark.webp"
        alt="Vegetarian"
        width={24}
        height={23}
        className="absolute top-2.5 left-2.5 h-[23px] w-6"
      />
    </Link>
  );
}
