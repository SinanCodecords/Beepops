import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { ShopFilters } from "./filters";

type ShopProduct = ReturnType<typeof p>;

const p = (
  title: string, subtitle: string, category: string, rating: string,
  price: string, compareAt: string, discount: string, image: string, handle: string,
) => ({
  title, subtitle, category, rating, price, compareAt, discount,
  image: `/images/shop/${image}.webp`,
  href: `/products/${handle}`,
});

// Static Figma content for now; replaced by Shopify products later.
const PRODUCTS = [
  p("Assorted Millet Protein Bars", "Box of 6 · Energy & Immunity", "Millet Protein Bars", "4.8", "₹499", "₹599", "16% off", "assorted-millet-protein-bars", "assorted-millet-protein-bars"),
  p("Himalayan Raw Honey", "500g · Pure Wildflower Honey", "Himalayan Honey", "4.9", "₹399", "₹469", "15% off", "himalayan-raw-honey", "himalayan-raw-honey"),
  p("BeePops Honey Bear", "350g · Squeeze Bear Jar", "Himalayan Honey", "4.7", "₹280", "₹320", "12% off", "honey-bear", "beepops-honey-bear"),
  p("Himalayan Honey Sticks", "Box of 20 · Clean Energy", "Himalayan Honey", "4.8", "₹349", "₹399", "12% off", "honey-sticks", "himalayan-honey-sticks"),
  p("Honey Oats Cookies", "250g · Doctor-Led Clean Label", "Cookies & Snacks", "4.6", "₹180", "₹220", "18% off", "honey-oats-cookies", "honey-oats-cookies"),
  p("Dates & Peanut Butter Bar", "Pack of 5 · High Fiber", "Millet Protein Bars", "4.9", "₹450", "₹520", "13% off", "dates-peanut-butter-bar", "dates-peanut-butter-bar"),
  p("Berry Mix Trail Mix", "200g · Loaded with Antioxidants", "Cookies & Snacks", "4.8", "₹299", "₹349", "14% off", "berry-trail-mix", "berry-mix-trail-mix"),
  p("Crunchy Organic Peanut Butter", "400g · Zero Added Oils", "Peanut Butter", "4.7", "₹220", "₹260", "15% off", "organic-peanut-butter", "crunchy-organic-peanut-butter"),
];

const CHIPS = ["Jaipur Crafted", "Clean Nutrition"];

// Filters sidebar + product grid.
export function ShopCatalog() {
  return (
    <Container className="grid gap-6 py-8 lg:grid-cols-[272px_1fr] lg:items-start lg:py-8 lg:pb-24">
      <ShopFilters />
      <div className="min-w-0 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[15.5px] text-ink">
            Showing <strong className="font-semibold">{PRODUCTS.length}</strong> signature BeePops
            products
          </p>
          <ul className="flex gap-2">
            {CHIPS.map((chip) => (
              <li key={chip} className="rounded-full bg-forest px-3 py-1.5 text-[10.7px] font-semibold text-white">
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {PRODUCTS.map((product, i) => (
            <ShopCard key={product.href} product={product} preload={i < 3} />
          ))}
        </div>
      </div>
    </Container>
  );
}

function ShopCard({ product, preload }: { product: ShopProduct; preload?: boolean }) {
  return (
    <article className="flex flex-col rounded-xl border border-[#dee2e6] bg-white p-3 transition-shadow hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)]">
      <Link href={product.href} className="relative block aspect-[288/253] overflow-hidden rounded-lg bg-cream">
        <Image
          src={product.image}
          alt={product.title}
          fill
          preload={preload}
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-[4px] bg-amber px-2 py-1 text-[10px] leading-none font-bold text-white uppercase">
          {product.discount}
        </span>
      </Link>
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
      <div className="mt-auto flex items-center justify-between gap-2 px-1 pt-4">
        <p className="flex items-baseline gap-1.5">
          <span className="text-[17.5px] font-extrabold text-ink">{product.price}</span>
          <span className="text-xs text-[#706f6f] line-through">{product.compareAt}</span>
        </p>
        <Button size="sm" className="px-4 text-xs font-bold hover:bg-forest-deep">
          Add To Bag
        </Button>
      </div>
    </article>
  );
}
