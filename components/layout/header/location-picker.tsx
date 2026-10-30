import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon } from "@hugeicons/core-free-icons";

// Design placeholder for now.
export function LocationPicker() {
  return (
    <button
      type="button"
      className="hidden h-9 w-64 items-center gap-2 rounded-full bg-muted px-3 text-xs font-medium text-foreground/80 lg:flex"
    >
      <HugeiconsIcon icon={Location01Icon} size={16} />
      Select Location
    </button>
  );
}
