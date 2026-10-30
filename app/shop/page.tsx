import type { Metadata } from "next";
import { ShopCatalog, StoreHeader } from "@/components/shop";

export const metadata: Metadata = {
  title: "Shop",
  description: "Millet protein bars, Himalayan honey and clean snacks, handcrafted in Jaipur.",
};

export default function ShopPage({ searchParams }: PageProps<"/shop">) {
  return (
    <>
      <StoreHeader />
      <ShopCatalog searchParams={searchParams} />
    </>
  );
}
