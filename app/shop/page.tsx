import type { Metadata } from "next";
import { ShopExplorer, StoreHeader } from "@/components/shop";

export const metadata: Metadata = {
  title: "Shop",
  description: "Millet protein bars, Himalayan honey and clean snacks, handcrafted in Jaipur.",
};

export default function ShopPage() {
  return (
    <>
      <StoreHeader />
      <ShopExplorer />
    </>
  );
}
