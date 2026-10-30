import { Container } from "@/components/shared/container";
import { BulkOrderInfo } from "./bulk-order-info";
import { QuoteForm } from "./quote-form";

export function BulkOrder() {
  return (
    <section id="bulk-orders" className="mt-10 border-y border-border py-14 md:mt-[35px] md:py-[74px]">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-20">
        <BulkOrderInfo />
        <QuoteForm />
      </Container>
    </section>
  );
}
