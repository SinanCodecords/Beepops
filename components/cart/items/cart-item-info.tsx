import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { DeliveryTruck01Icon } from "@hugeicons/core-free-icons";
import type { CartItem } from "../data";

export function CartItemInfo({ item }: { item: CartItem }) {
  return (
    <div className="max-w-[300px]">
      <Link href={item.href} className="text-sm font-bold text-ink hover:underline md:text-base">
        {item.title}
      </Link>
      <p className="mt-1.5 text-xs font-medium text-stone">{item.variant}</p>
      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-forest">
        <HugeiconsIcon icon={DeliveryTruck01Icon} size={14} />
        Delivery by: {item.delivery}
      </p>
    </div>
  );
}
