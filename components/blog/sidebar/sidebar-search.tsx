import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";

export function SidebarSearch() {
  return (
    <label className="flex h-9 items-center gap-3 rounded-full border border-[#e5e5e5] px-4 text-sm font-medium text-[#101010]">
      <HugeiconsIcon icon={Search01Icon} size={18} />
      <input
        type="search"
        placeholder="Search"
        aria-label="Search articles"
        className="w-full bg-transparent outline-none placeholder:text-[#101010]"
      />
    </label>
  );
}
