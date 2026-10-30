import type { Metadata } from "next";
import { CartPage } from "@/components/cart";

export const metadata: Metadata = {
  title: "Shopping Cart",
  robots: { index: false },
};

export default function Cart() {
  return <CartPage />;
}
