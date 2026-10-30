import type { Metadata } from "next";
import { StoreLocation } from "@/components/locations";
import { StoreHeader } from "@/components/shop";

export const metadata: Metadata = {
  title: "Locations",
  description: "Visit the BeePops flagship store in C-Scheme, Jaipur.",
};

export default function LocationsPage() {
  return (
    <>
      <StoreHeader />
      <StoreLocation />
    </>
  );
}
