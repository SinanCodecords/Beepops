import type { Metadata } from "next";
import { AccountPage } from "@/components/account";

export const metadata: Metadata = {
  title: "My Account",
  robots: { index: false },
};

export default function Account() {
  return <AccountPage />;
}
