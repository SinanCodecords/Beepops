import Image from "next/image";
import { StarRating } from "@/components/shared/star-rating";
import { RATING_SUMMARY, REVIEWS } from "./data";
import { SectionTitle } from "./details";

export function Reviews() {
  return (
    <section>
      <SectionTitle>Customer Reviews</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-[231px_1fr] md:gap-8">
        <div className="self-start rounded-xl border border-[#e5e5e5] bg-white p-6 text-center">
          <p className="font-heading text-[34px] leading-[1.9] text-forest">{RATING_SUMMARY.average}</p>
          <div className="mt-2 flex justify-center">
            <StarRating size={13} />
          </div>
          <p className="mt-1 text-[11.5px] text-ink">Based on {RATING_SUMMARY.total} ratings</p>
          <div className="mt-4 space-y-3">
            {RATING_SUMMARY.bars.map(({ stars, percent }) => (
              <div key={stars} className="flex items-center gap-2 text-[10.5px]">
                <span className="w-2.5 font-semibold text-ink">{stars}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-[3px] bg-[#f0f0ee]">
                  <div className="h-full rounded-[3px] bg-amber" style={{ width: `${percent}%` }} />
                </div>
                <span className="w-7 text-right text-[#706f6f]">{percent}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {REVIEWS.map((review) => (
            <article key={review.name} className="rounded-xl border border-[#e5e5e5] bg-white p-5">
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
          ))}
        </div>
      </div>
    </section>
  );
}
