import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

const field =
  "w-full rounded-sm border border-[#e2e8f0] px-3.5 text-[15px] font-medium text-ink outline-none placeholder:text-[#8a94a6] focus:border-forest";

// Visual only for now: posting comments is wired up in the forms step.
export function CommentForm() {
  return (
    <section className="mt-14">
      <h2 className="font-sans text-[28px] font-bold tracking-normal text-[#081026] normal-case">
        Leave A Comment
      </h2>
      <form className="mt-5 space-y-5">
        <textarea aria-label="Comment" placeholder="Comment.." rows={5} className={`${field} py-3.5`} />
        <div className="grid gap-4 sm:grid-cols-2">
          <input aria-label="Name" placeholder="Name (required)" required className={`${field} h-[42px]`} />
          <input type="email" aria-label="Email" placeholder="Email (required)" required className={`${field} h-[42px]`} />
        </div>
        <button
          type="button"
          className="inline-flex h-[42px] items-center gap-3 rounded-full bg-forest pr-1.5 pl-3.5 text-[13px] font-bold text-white uppercase transition-colors hover:bg-forest-deep"
        >
          Post comment
          <span className="flex size-7 items-center justify-center rounded-full bg-white text-forest">
            <HugeiconsIcon icon={ArrowRight02Icon} size={14} />
          </span>
        </button>
      </form>
    </section>
  );
}
