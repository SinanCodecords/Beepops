import type { Metadata } from "next";
import { ReviewsPanel } from "@/components/reviews";
import { StoreHeader } from "@/components/shop";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Store performance ratings and customer reviews for BeePops.",
};

export default function ReviewsPage() {
  return (
    <>
      <StoreHeader />
      <ReviewsPanel />
    </>
  );
}
