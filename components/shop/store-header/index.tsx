import { Container } from "@/components/shared/container";
import { StoreSpotlight } from "./store-spotlight";
import { StoreTabs } from "./store-tabs";

// Shared top of the store pages: Shop, Locations, Reviews.
export function StoreHeader() {
  return (
    <Container className="space-y-6 pt-8 md:pt-10">
      <StoreSpotlight />
      <StoreTabs />
    </Container>
  );
}
