import { ProductGrid } from "@/components/product/product-grid";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

// Temporary home page: all Shopify products. The real design lands in Step 2.
export default function Home() {
  return (
    <Container className="py-16">
      <SectionHeading eyebrow="Live from Shopify" title="All products" />
      <ProductGrid />
    </Container>
  );
}
