import Image from "next/image";
import { StarRating } from "@/components/shared/star-rating";

type Props = { quote: string; name: string; role: string; image: string };

export function TestimonialCard({ quote, name, role, image }: Props) {
  return (
    <figure className="grid w-[85vw] max-w-[709px] shrink-0 snap-start grid-cols-2 overflow-hidden rounded-xl border border-border bg-cream md:h-[472px]">
      <div className="relative min-h-72">
        <Image src={image} alt={name} fill sizes="(min-width: 768px) 354px, 42vw" className="object-cover" />
      </div>
      <div className="flex flex-col p-4 md:p-5">
        <span aria-hidden className="h-14 font-logo text-[110px] leading-[0.9] text-black/10 md:h-28 md:text-[220px]">
          &rdquo;
        </span>
        <blockquote className="mt-auto text-sm text-[#5c5749] md:text-2xl">{quote}</blockquote>
        <figcaption className="mt-5 border-t border-border pt-4">
          <StarRating />
          <p className="mt-2 text-base font-bold text-ink md:text-[22px]">{name}</p>
          <p className="text-xs text-stone md:text-base">{role}</p>
        </figcaption>
      </div>
    </figure>
  );
}
