import { HugeiconsIcon } from "@hugeicons/react";
import { BubbleChatIcon } from "@hugeicons/core-free-icons";

export function EmptyReviews() {
  return (
    <div className="flex flex-col items-center gap-5 py-12 text-center md:py-20">
      <span className="flex size-[100px] items-center justify-center rounded-full border border-[#e5e5e5] bg-[#fbfbfb]">
        <HugeiconsIcon icon={BubbleChatIcon} size={40} strokeWidth={1} className="text-[#b0a894]" />
      </span>
      <div className="space-y-2">
        <h3 className="font-sans text-xl font-extrabold tracking-normal text-forest normal-case md:text-2xl">
          No reviews found
        </h3>
        <p className="text-[15px] text-[#706f6f] md:text-base">
          Be the first to share your experience with BeePops products after purchasing!
        </p>
      </div>
    </div>
  );
}
