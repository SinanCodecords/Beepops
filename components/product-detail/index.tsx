import Link from "next/link";
import { notFound } from "next/navigation";
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
import { getCategory, getProduct } from "@/lib/shopify";
import { BuyCard } from "./buy-card";
import { ProductDetails } from "./details";
import { Gallery } from "./gallery";
import { Reviews } from "./reviews";

export async function ProductDetailPage({ handle }: { handle: string }) {
  const product = await getProduct(handle);
  if (!product) notFound();

  const category = getCategory(product.tags, product.productType);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Shop All", href: "/shop" },
    { label: category, href: `/shop?category=${encodeURIComponent(category)}` },
  ];

  return (
    <Container className="py-10 md:py-16">
      <Breadcrumb className="mb-6">
        <BreadcrumbList className="gap-2 text-sm text-[#706f6f] sm:gap-2 md:text-base">
          {crumbs.map((crumb) => (
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
            <BreadcrumbPage className="font-semibold text-ink">{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-x-6 xl:grid-cols-[minmax(0,1fr)_423px]">
        <div className="lg:col-start-1">
          <Gallery images={product.images} title={product.title} />
        </div>
        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <BuyCard product={product} />
        </div>
        <div className="space-y-12 lg:col-start-1">
          <ProductDetails product={product} category={category} />
          <Reviews />
        </div>
      </div>
    </Container>
  );
}
