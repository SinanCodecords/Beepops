import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";

export function StarRating({ count = 5, size = 18 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <HugeiconsIcon key={i} icon={StarIcon} size={size} className="fill-amber text-amber" />
      ))}
    </div>
  );
}
