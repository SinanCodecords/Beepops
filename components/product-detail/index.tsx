import { Container } from "@/components/shared/container";
import { Breadcrumbs } from "./breadcrumbs";
import { BuyCard } from "./buy-card";
import { ProductDetails } from "./details";
import { Gallery } from "./gallery";

export function ProductDetailPage() {
  return (
    <Container className="py-10 md:py-16">
      <Breadcrumbs />
      <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-x-6 xl:grid-cols-[minmax(0,1fr)_423px]">
        <div className="lg:col-start-1">
          <Gallery />
        </div>
        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <BuyCard />
        </div>
        <div className="lg:col-start-1">
          <ProductDetails />
        </div>
      </div>
    </Container>
  );
}
