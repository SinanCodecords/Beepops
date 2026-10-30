import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon } from "@hugeicons/core-free-icons";

export function HappyFaceCard({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="group relative aspect-[417/738] overflow-hidden rounded-xl bg-white">
      <Image src={image} alt={alt} fill sizes="(min-width: 768px) 30vw, 80vw" className="object-cover" />
      <div className="absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-black/90 to-transparent" />
      <span className="absolute bottom-5 left-5 flex size-12 items-center justify-center rounded-full bg-white/90 text-forest transition-transform group-hover:scale-110">
        <HugeiconsIcon icon={PlayIcon} size={20} className="fill-forest" />
      </span>
    </div>
  );
}
