import { Container } from "@/components/shared/container";
import { ShopFilters } from "./filters";
import { ShopProducts } from "./products";

export function ShopExplorer() {
  return (
    <Container className="grid gap-6 py-8 lg:grid-cols-[272px_1fr] lg:items-start lg:py-8 lg:pb-24">
      <ShopFilters />
      <ShopProducts />
    </Container>
  );
}
