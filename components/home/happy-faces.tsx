import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon } from "@hugeicons/core-free-icons";
import { Section, SectionHeading } from "@/components/shared/section";

// Instagram reels; swap the images for embedded videos later.
const HAPPY_FACES = [
  { image: "/images/happy-faces/video-1.webp", alt: "Girl enjoying BeePops at home" },
  { image: "/images/happy-faces/video-2.webp", alt: "BeePops products on a table" },
  { image: "/images/happy-faces/video-3.webp", alt: "Kids snacking on BeePops when mom is away" },
];

export function HappyFaces() {
  return (
    <Section>
      <SectionHeading title="Happy faces" />
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {HAPPY_FACES.map(({ image, alt }) => (
          <div key={image} className="group relative aspect-[417/738] overflow-hidden rounded-xl bg-white">
            <Image src={image} alt={alt} fill sizes="(min-width: 768px) 30vw, 80vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-black/90 to-transparent" />
            <span className="absolute bottom-5 left-5 flex size-12 items-center justify-center rounded-full bg-white/90 text-forest transition-transform group-hover:scale-110">
              <HugeiconsIcon icon={PlayIcon} size={20} className="fill-forest" />
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
