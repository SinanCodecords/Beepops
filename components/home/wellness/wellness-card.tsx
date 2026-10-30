import Image from "next/image";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

type Props = { title: string; text: string; image: string; icon: IconSvgElement };

export function WellnessCard({ title, text, image, icon }: Props) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
      <div className="relative aspect-[412/263] bg-honey">
        <Image src={image} alt="" fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
      </div>
      <div className="relative px-8 pt-12 pb-9">
        <span className="absolute -top-6 left-8 flex size-12 items-center justify-center rounded-2xl border-2 border-white bg-honey text-white">
          <HugeiconsIcon icon={icon} size={22} />
        </span>
        <h3 className="text-base text-ink">{title}</h3>
        <p className="mt-3 text-[17px] leading-relaxed text-[#9b9e9e]">{text}</p>
      </div>
    </article>
  );
}
