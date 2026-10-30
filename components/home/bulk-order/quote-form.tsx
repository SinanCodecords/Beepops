import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { QUOTE_FIELDS } from "./data";

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3.5 text-[15px] placeholder:text-[#6b6560] focus:border-forest focus:outline-none";

// Visual only for now; sending is wired up in Step 9.
export function QuoteForm() {
  return (
    <div className="rounded-xl border-2 border-border bg-white p-5 md:p-7">
      <h3 className="text-2xl text-[#1f1d1b] md:text-[27px]">Request a quote</h3>
      <p className="mt-2 text-sm text-[#6b6560]">Queries, pricing &amp; collaborations</p>
      <div className="mt-8 space-y-4">
        {QUOTE_FIELDS.map((f) => (
          <input key={f.name} aria-label={f.placeholder} {...f} className={inputClass} />
        ))}
        <textarea
          name="requirements"
          aria-label="Tell us about your requirements"
          placeholder="Tell us about your requirements"
          rows={4}
          className={inputClass}
        />
      </div>
      <button
        type="button"
        className="mt-8 flex h-14 w-full items-center justify-between rounded-full bg-forest pr-3 pl-6 text-[15px] font-semibold text-white uppercase hover:bg-forest-deep"
      >
        Send request
        <span className="flex size-8 items-center justify-center rounded-full bg-white text-forest">
          <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
        </span>
      </button>
    </div>
  );
}
