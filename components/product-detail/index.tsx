import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/shared/section";
import { BuyCard } from "./buy-card";
import { PRODUCT } from "./data";
import { ProductDetails } from "./details";
import { Gallery } from "./gallery";
import { Reviews } from "./reviews";

export function ProductDetailPage() {
  return (
    <Container className="py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm md:text-base">
        <ol className="flex flex-wrap items-center gap-2">
          {PRODUCT.breadcrumbs.map((crumb) => (
            <li key={crumb.label} className="flex items-center gap-2 text-[#706f6f]">
              <Link href={crumb.href} className="hover:text-ink">
                {crumb.label}
              </Link>
              <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
            </li>
          ))}
          <li aria-current="page" className="font-semibold text-ink">
            {PRODUCT.title}
          </li>
        </ol>
      </nav>
      <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-x-6 xl:grid-cols-[minmax(0,1fr)_423px]">
        <div className="lg:col-start-1">
          <Gallery />
        </div>
        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <BuyCard />
        </div>
        <div className="space-y-12 lg:col-start-1">
          <ProductDetails />
          <Reviews />
        </div>
      </div>
    </Container>
  );
}
