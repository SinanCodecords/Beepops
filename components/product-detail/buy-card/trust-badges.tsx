import { HugeiconsIcon } from "@hugeicons/react";
import { DeliveryTruck01Icon, SecurityCheckIcon } from "@hugeicons/core-free-icons";
import { TRUST_BADGES } from "../data";

const ICONS = { doctor: SecurityCheckIcon, shipping: DeliveryTruck01Icon };

export function TrustBadges() {
  return (
    <ul className="mt-3 space-y-2.5 border-t border-[#e5e2d9] pt-4 text-[12.5px] text-[#706f6f]">
      {TRUST_BADGES.map((badge) => (
        <li key={badge.id} className="flex items-center gap-2">
          <HugeiconsIcon icon={ICONS[badge.id]} size={15} />
          {badge.label}
        </li>
      ))}
    </ul>
  );
}
