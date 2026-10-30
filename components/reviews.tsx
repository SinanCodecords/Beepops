import { HugeiconsIcon } from "@hugeicons/react";
import { BubbleChatIcon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/shared/section";

// Store performance badges from the Figma "Reviews" frame (static for now).
const STORE_RATINGS = [
  { title: "Delivery Timeliness", note: "All orders dispatched on time", score: "10/10" },
  { title: "Support Rating", note: "Instant expert support", score: "10/10" },
  { title: "Return Accuracy", note: "Perfect catalog match", score: "10/10" },
  { title: "Fulfillment Rate", note: "100% order execution", score: "10/10" },
  { title: "Overall Rating", note: "Top tier ONDC score", score: "10/10" },
];

const heading = "font-sans text-xl font-extrabold tracking-normal text-forest normal-case md:text-2xl";

export function ReviewsPanel() {
  return (
    <Container className="pt-6 pb-16 md:pb-20">
      <div className="rounded-3xl border border-[#dee2e6] bg-white p-5 md:p-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className={heading}>Store Performance Ratings</h2>
            <p className="text-sm text-[#706f6f]">
              Calculated based on ONDC buyer logs, fulfillment metrics, and official response
              indicators.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {STORE_RATINGS.map((rating) => (
              <div
                key={rating.title}
                className="flex flex-col items-center gap-4 rounded-2xl border border-[#e5e5e5] bg-cream px-3 py-6 text-center"
              >
                <span className="flex size-[72px] items-center justify-center rounded-full bg-[#3d8c47] text-base font-extrabold text-white">
                  {rating.score}
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-forest">{rating.title}</p>
                  <p className="text-[13px] text-[#706f6f]">{rating.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-8 border-[#dee2e6] md:my-10" />
        <div className="flex flex-col items-center gap-5 py-12 text-center md:py-20">
          <span className="flex size-[100px] items-center justify-center rounded-full border border-[#e5e5e5] bg-[#fbfbfb]">
            <HugeiconsIcon icon={BubbleChatIcon} size={40} strokeWidth={1} className="text-[#b0a894]" />
          </span>
          <div className="space-y-2">
            <h3 className={heading}>No reviews found</h3>
            <p className="text-[15px] text-[#706f6f] md:text-base">
              Be the first to share your experience with BeePops products after purchasing!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
