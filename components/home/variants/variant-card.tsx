import Image from "next/image";
import Link from "next/link";

type Props = { title: string; image: string; href: string };

export function VariantCard({ title, image, href }: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-6 rounded-xl border border-border bg-cream px-4 pt-6 pb-7 transition-shadow hover:shadow-md"
    >
      <Image
        src={image}
        alt={title}
        width={406}
        height={480}
        sizes="(min-width: 1024px) 15vw, 40vw"
        className="h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-60"
      />
      <h3 className="text-center text-base text-forest md:text-lg">{title}</h3>
    </Link>
  );
}
