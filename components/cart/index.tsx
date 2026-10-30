import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CheckmarkBadge01Icon,
  DeliveryTruck01Icon,
} from "@hugeicons/core-free-icons";
import { Container } from "@/components/shared/section";
import { CartSummary } from "./cart-summary";
import { QuantityStepper } from "./quantity-stepper";

// Design stage: static bag contents. Replaced by the Shopify cart later.
const ITEMS = [
  {
    id: "honey-sticks-50",
    title: "BeePops Honey Sticks | Box Of 50 | Pure Himalayan Honey",
    variant: "Box of 50 Sticks · Pure Raw Wild Mustard Honey",
    delivery: "Wednesday, 03 Sept",
    image: "/images/products/himalayan-honey.webp",
    href: "/products/himalayan-honey",
    quantity: 1,
    total: "₹180",
  },
];

export function CartPage() {
  return (
    <Container className="py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="text-sm md:text-lg">
        <ol className="flex items-center gap-2 font-medium">
          <li className="flex items-center gap-2 text-[#706f6f]">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
          </li>
          <li aria-current="page" className="font-semibold text-forest">
            Your Shopping Cart
          </li>
        </ol>
      </nav>
      <h1 className="mt-6 text-[28px] leading-tight text-forest md:mt-7 md:text-[38px]">
        Shopping Cart
      </h1>
      <div className="mt-7 grid grid-cols-[minmax(0,1fr)] items-start gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_420px]">
        <CartItems />
        <CartSummary />
      </div>
    </Container>
  );
}

function CartItems() {
  return (
    <section aria-label="Items in your bag" className="overflow-hidden rounded-xl border border-border bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-5">
        <p className="text-base font-bold text-ink md:text-lg">Seller Store: BeePops</p>
        <span className="rounded-md bg-forest/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#344f37] uppercase">
          Verified Farm Network Seller
        </span>
      </div>
      <ul>
        {ITEMS.map((item) => (
          <li key={item.id} className="flex gap-4 border-b border-border p-4 md:gap-6 md:px-6 md:py-6">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-[#f5f1e8] md:size-[110px]">
              <Image src={item.image} alt={item.title} fill sizes="110px" className="object-contain" />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="max-w-[300px]">
                <Link href={item.href} className="text-sm font-bold text-ink hover:underline md:text-base">
                  {item.title}
                </Link>
                <p className="mt-1.5 text-xs font-medium text-stone">{item.variant}</p>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-forest">
                  <HugeiconsIcon icon={DeliveryTruck01Icon} size={14} />
                  Delivery by: {item.delivery}
                </p>
              </div>
              <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                <p className="sm:text-right">
                  <span className="block text-xs font-medium text-stone">Total</span>
                  <span className="text-base font-bold text-forest">{item.total}</span>
                </p>
                <QuantityStepper initial={item.quantity} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="flex items-start gap-2 bg-honey/10 px-4 py-4 text-xs font-medium text-ink">
        <HugeiconsIcon icon={CheckmarkBadge01Icon} size={18} className="shrink-0 text-amber" />
        Your purchase is covered by BeePops Direct Quality Pledge. From raw local farms direct to
        your home.
      </p>
    </section>
  );
}
