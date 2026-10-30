import Image from "next/image";
import { StarRating } from "@/components/shared/star-rating";
import type { Review } from "./data";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-xl border border-[#e5e5e5] bg-white p-5">
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image src={review.avatar} alt="" width={35} height={35} className="rounded-full" />
          <div>
            <p className="text-[13.5px] font-bold text-ink">{review.name}</p>
            <p className="text-[10.5px] text-ink/70">{review.when}</p>
          </div>
        </div>
        <StarRating size={13} />
      </header>
      <h3 className="mt-3 font-sans text-[13.5px] font-extrabold tracking-normal text-forest normal-case">
        {review.title}
      </h3>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#706f6f]">{review.body}</p>
    </article>
  );
}
