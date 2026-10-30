import { Search01Icon, UserIcon } from "@hugeicons/core-free-icons";
import { IconButtonLink } from "@/components/shared/icon-button-link";
import { BagLink } from "./bag-link";
import { LocationPicker } from "./location-picker";

export function HeaderActions() {
  return (
    <div className="ml-auto flex items-center gap-1 md:gap-3">
      <LocationPicker />
      <IconButtonLink href="/shop" label="Search products" icon={Search01Icon} />
      <IconButtonLink href="/account" label="My account" icon={UserIcon} />
      <BagLink />
    </div>
  );
}
