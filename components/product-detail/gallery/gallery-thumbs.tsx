import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = { images: string[]; active: number; onSelect: (index: number) => void };

export function GalleryThumbs({ images, active, onSelect }: Props) {
  return (
    <div className="flex gap-3 md:flex-col md:gap-5">
      {images.map((src, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Show image ${i + 1}`}
          aria-pressed={i === active}
          onClick={() => onSelect(i)}
          className={cn(
            "relative size-16 shrink-0 overflow-hidden rounded-lg border-2 bg-white md:size-[69px]",
            i === active ? "border-amber" : "border-[#e5e5e5] hover:border-amber/50",
          )}
        >
          <Image src={src} alt="" fill sizes="69px" className="object-contain p-1" />
        </button>
      ))}
    </div>
  );
}
