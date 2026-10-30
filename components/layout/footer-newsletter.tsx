import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon } from "@hugeicons/core-free-icons";

// Signup is wired up in Step 9.
export function FooterNewsletter() {
  return (
    <div>
      <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-white uppercase">
        Stay in the loop
      </p>
      <p className="text-sm text-white/75">
        Get wholesome clean-eating tips, recipes &amp; exclusive product launch offers.
      </p>
      <div className="mt-5 flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/5 pr-1 pl-4">
        <HugeiconsIcon icon={Mail01Icon} size={16} className="shrink-0 text-white/70" />
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          className="min-w-0 flex-1 bg-transparent text-sm placeholder:text-white/60 focus:outline-none"
        />
        <button
          type="button"
          className="h-10 rounded-full bg-white px-5 text-sm font-medium text-forest hover:bg-white/90"
        >
          Join
        </button>
      </div>
    </div>
  );
}
