import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

type Snack = (typeof SNACKS)[number];

// Static for now; swapped for Shopify products later.
const SNACKS = [
  {
    title: "Assorted Protein Bars",
    subtitle: "Box of 5 · Millet + Honey",
    tag: "A mix of flavors",
    rating: "4.8",
    price: "₹499",
    compareAt: "₹599",
    image: "/images/products/assorted-protein-bars.webp",
    href: "/products/assorted-millet-protein-bars",
  },
  {
    title: "Ashwagandha Protein Bars",
    subtitle: "Box of 6 · Energy & Immunity",
    tag: "Ashwagandha",
    rating: "4.9",
    price: "₹549",
    compareAt: "₹649",
    image: "/images/products/ashwagandha-protein-bars.webp",
    href: "/products/ashwagandha-protein-bars",
  },
  {
    title: "Himalayan Honey Sticks",
    subtitle: "Box of 20 · Pure Raw Honey",
    tag: "Honey",
    rating: "4.7",
    price: "₹399",
    compareAt: "₹469",
    image: "/images/products/himalayan-honey.webp",
    href: "/products/himalayan-honey-sticks",
  },
  {
    title: "Super Savor Protein",
    subtitle: "Assorted · High Protein",
    tag: "Super Savor",
    rating: "4.8",
    price: "₹599",
    compareAt: "₹699",
    image: "/images/products/super-savor-protein.webp",
    href: "/products/super-savor-protein",
  },
];

export function FeaturedSnacks() {
  return (
    <Section>
      <SectionHeading eyebrow="Yummy hits!" title="New fav snacks!" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {SNACKS.map((snack) => (
          <SnackCard key={snack.title} snack={snack} />
        ))}
      </div>
    </Section>
  );
}

function SnackCard({ snack }: { snack: Snack }) {
  return (
    <article className="rounded-xl border border-border bg-cream p-3 pb-4 shadow-[0_3px_19px_rgba(0,0,0,0.06)]">
      <Link href={snack.href} className="relative block aspect-square overflow-hidden rounded-2xl">
        <Image
          src={snack.image}
          alt={snack.title}
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
      <div className="px-1.5 pt-4">
        <p className="flex items-center gap-1 text-[10px]">
          <HugeiconsIcon icon={StarIcon} size={11} className="fill-amber text-amber" />
          <span className="font-bold text-[#5c5749]">{snack.rating}</span>
          <span className="font-medium text-[#b0a894]">· {snack.tag}</span>
        </p>
        <h3 className="mt-1.5 text-sm leading-snug text-ink">{snack.title}</h3>
        <p className="mt-1 text-[11px] font-medium text-stone">{snack.subtitle}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-bold text-ink">{snack.price}</span>
            <span className="text-sm font-bold text-[#9b9e9e] line-through">{snack.compareAt}</span>
          </p>
          <Button size="xs" className="h-7 w-[105px] text-[11px] hover:bg-forest-deep">
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
