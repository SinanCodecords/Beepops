import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/shared/section";

const VARIANTS = [
  { title: "Protein Bars", image: "/images/variants/protein-bars.webp", href: "/shop?category=Millet+Protein+Bars" },
  { title: "Honey", image: "/images/variants/honey.webp", href: "/shop?category=Himalayan+Honey" },
  { title: "Super Savor Protein", image: "/images/variants/super-savor.webp", href: "/products/super-savor-protein" },
  { title: "Naturals", image: "/images/variants/naturals.webp", href: "/shop?category=Cookies+%26+Snacks" },
];

export function Variants() {
  return (
    <Section className="relative">
      <SectionHeading eyebrow="Explore the range" title="Our variants" titleClassName="normal-case" />
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {VARIANTS.map(({ title, image, href }) => (
          <Link
            key={title}
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
        ))}
      </div>
    </Section>
  );
}
