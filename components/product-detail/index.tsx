import Link from "next/link";
import { Fragment } from "react";
import { Container } from "@/components/shared/section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BuyCard } from "./buy-card";
import { PRODUCT } from "./data";
import { ProductDetails } from "./details";
import { Gallery } from "./gallery";
import { Reviews } from "./reviews";

export function ProductDetailPage() {
  return (
    <Container className="py-10 md:py-16">
      <Breadcrumb className="mb-6">
        <BreadcrumbList className="gap-2 text-sm text-[#706f6f] sm:gap-2 md:text-base">
          {PRODUCT.breadcrumbs.map((crumb) => (
            <Fragment key={crumb.label}>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href={crumb.href} />} className="hover:text-ink">
                  {crumb.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold text-ink">{PRODUCT.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
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
