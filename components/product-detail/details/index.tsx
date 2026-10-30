import { RelatedProducts } from "../related";
import { Reviews } from "../reviews";
import { AboutSection } from "./about-section";
import { SpecsTable } from "./specs-table";

export function ProductDetails() {
  return (
    <div className="space-y-12">
      <AboutSection />
      <SpecsTable />
      <RelatedProducts />
      <Reviews />
    </div>
  );
}
