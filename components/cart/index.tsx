import { Container } from "@/components/shared/container";
import { CartBreadcrumbs } from "./cart-breadcrumbs";
import { CartItems } from "./items";
import { CartSummary } from "./summary";

export function CartPage() {
  return (
    <Container className="py-10 md:py-16">
      <CartBreadcrumbs />
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
