import { HugeiconsIcon } from "@hugeicons/react";
import { Bookmark02Icon, FavouriteIcon, Share08Icon } from "@hugeicons/core-free-icons";
import { POST } from "./data";

const iconButton = "flex items-center gap-1.5 text-[15px] font-medium text-[#101010] hover:text-forest";

// Visual only for now: likes, saving and sharing get wired up later.
export function PostActions() {
  return (
    <div className="flex items-center gap-4">
      <button type="button" aria-label="Like this post" className={iconButton}>
        <HugeiconsIcon icon={FavouriteIcon} size={18} />
        {POST.likes}
      </button>
      <button type="button" aria-label="Save this post" className={iconButton}>
        <HugeiconsIcon icon={Bookmark02Icon} size={18} />
      </button>
      <button type="button" aria-label="Share this post" className={iconButton}>
        <HugeiconsIcon icon={Share08Icon} size={18} />
      </button>
    </div>
  );
}
