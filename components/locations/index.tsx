import { Container } from "@/components/shared/container";
import { AddressPanel } from "./address-panel";
import { StoreMap } from "./store-map";

export function StoreLocation() {
  return (
    <Container className="py-8 md:pb-24">
      <div className="grid gap-6 rounded-3xl border border-[#dee2e6] bg-white p-4 md:p-6 lg:grid-cols-[441px_1fr] lg:min-h-[508px]">
        <AddressPanel />
        <StoreMap />
      </div>
    </Container>
  );
}
