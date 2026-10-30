import Link from "next/link";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingBag01Icon } from "@hugeicons/core-free-icons";
import { CART_COOKIE, getCartQuantity } from "@/lib/shopify";

async function BagCount() {
  const cartId = (await cookies()).get(CART_COOKIE)?.value;
  const quantity = cartId ? await getCartQuantity(cartId).catch(() => 0) : 0;
  return <>Bag ({quantity})</>;
}

export function BagLink() {
  return (
    <Link
      href="/cart"
      className="flex h-9 items-center gap-1.5 rounded-full px-2 text-xs font-medium whitespace-nowrap hover:bg-muted"
    >
      <HugeiconsIcon icon={ShoppingBag01Icon} size={18} />
      <Suspense fallback={<>Bag</>}>
        <BagCount />
      </Suspense>
    </Link>
  );
}
