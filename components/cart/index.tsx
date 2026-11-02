import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon, DeliveryTruck01Icon } from "@hugeicons/core-free-icons";
import { Suspense } from "react";
import { ArrowButton } from "@/components/shared/arrow-button";
import { Container } from "@/components/shared/section";
import { formatPrice, getCart, type Cart } from "@/lib/shopify";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CartSummary } from "./cart-summary";
import { LineControls } from "./cart-controls";

export function CartPage() {
  return (
    <Container className="py-10 md:py-16">
      <Breadcrumb>
        <BreadcrumbList className="gap-2 text-sm font-medium text-[#706f6f] sm:gap-2 md:text-lg">
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />} className="hover:text-ink">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold text-forest">Your Shopping Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-6 text-[28px] leading-tight text-forest md:mt-7 md:text-[38px]">
        Shopping Cart
      </h1>
      <Suspense fallback={<p className="mt-7 text-sm text-stone">Loading your bag…</p>}>
        <CartContents />
      </Suspense>
    </Container>
  );
}

// Reads the cart cookie, so it streams in after the static heading.
async function CartContents() {
  const cart = await getCart().catch(() => null);
  if (!cart || cart.lines.nodes.length === 0) return <EmptyCart />;

  return (
    <div className="mt-7 grid grid-cols-[minmax(0,1fr)] items-start gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_420px]">
      <CartItems cart={cart} />
      <CartSummary cart={cart} />
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="mt-7 rounded-xl border border-border bg-white px-6 py-16 text-center">
      <p className="text-lg font-bold text-ink">Your bag is empty</p>
      <p className="mt-2 text-sm text-stone">Add some millet bars or honey and they&apos;ll show up here.</p>
      <ArrowButton href="/shop" className="mt-6">
        Start shopping
      </ArrowButton>
    </div>
  );
}

function CartItems({ cart }: { cart: Cart }) {
  return (
    <section aria-label="Items in your bag" className="overflow-hidden rounded-xl border border-border bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-5">
        <p className="text-base font-bold text-ink md:text-lg">Seller Store: BeePops</p>
        <span className="rounded-md bg-forest/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#344f37] uppercase">
          Verified Farm Network Seller
        </span>
      </div>
      <ul>
        {cart.lines.nodes.map((line) => {
          const { merchandise } = line;
          const image = merchandise.image ?? merchandise.product.featuredImage;
          const href = `/products/${merchandise.product.handle}`;
          return (
            <li key={line.id} className="flex gap-4 border-b border-border p-4 md:gap-6 md:px-6 md:py-6">
              <Link
                href={href}
                className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-[#f5f1e8] md:size-[110px]"
              >
                {image && (
                  <Image src={image.url} alt={image.altText ?? merchandise.product.title} fill sizes="110px" className="object-contain" />
                )}
              </Link>
              <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="max-w-[300px]">
                  <Link href={href} className="text-sm font-bold text-ink hover:underline md:text-base">
                    {merchandise.product.title}
                  </Link>
                  {merchandise.title !== "Default Title" && (
                    <p className="mt-1.5 text-xs font-medium text-stone">{merchandise.title}</p>
                  )}
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-forest">
                    <HugeiconsIcon icon={DeliveryTruck01Icon} size={14} />
                    Delivery date shown at checkout
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                  <p className="sm:text-right">
                    <span className="block text-xs font-medium text-stone">Total</span>
                    <span className="text-base font-bold text-forest">{formatPrice(line.cost.totalAmount)}</span>
                  </p>
                  <LineControls lineId={line.id} quantity={line.quantity} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="flex items-start gap-2 bg-honey/10 px-4 py-4 text-xs font-medium text-ink">
        <HugeiconsIcon icon={CheckmarkBadge01Icon} size={18} className="shrink-0 text-amber" />
        Your purchase is covered by BeePops Direct Quality Pledge. From raw local farms direct to
        your home.
      </p>
    </section>
  );
}
