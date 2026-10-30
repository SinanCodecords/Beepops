import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  Call02Icon,
  Location01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { Container } from "@/components/shared/section";

const CONTACTS = [
  { label: "Write Email", value: "hello@beepops.in", href: "mailto:hello@beepops.in", icon: Mail01Icon },
  { label: "Visit Now", value: "607 Royal Ensign, C-Scheme, Jaipur 302001", href: null, icon: Location01Icon },
  { label: "Call Us", value: "+91 95571 06284", href: "tel:+919557106284", icon: Call02Icon },
];

const QUOTE_FIELDS = [
  { name: "name", type: "text", placeholder: "Your name" },
  { name: "email", type: "email", placeholder: "Email address" },
  { name: "quantity", type: "text", placeholder: "Estimated quantity (e.g. 5,000 units)" },
];

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3.5 text-[15px] placeholder:text-[#6b6560] focus:border-forest focus:outline-none";

export function BulkOrder() {
  return (
    <section id="bulk-orders" className="mt-10 border-y border-border py-14 md:mt-[35px] md:py-[74px]">
      <Container className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <span className="inline-block rounded-full bg-[#fed43e] px-3.5 py-1.5 text-xs font-bold tracking-[0.12em] text-[#3d523c] uppercase">
            For business
          </span>
          <h2 className="mt-6 max-w-[476px] text-[32px] leading-[1.3] text-[#1f1d1b] md:text-[42px]">
            Have a bulk order? Let&rsquo;s talk!
          </h2>
          <p className="mt-6 leading-relaxed text-[#6b6560]">
            For bulk orders, retail partnerships, or custom product inquiries, we&rsquo;re just a
            message away. Whether you need 50 or 5,000 units, we&rsquo;re ready to deliver
            clean-label wellness with care and consistency.
          </p>
          <ul className="mt-10 space-y-6">
            {CONTACTS.map(({ label, value, href, icon }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-ink">
                  <HugeiconsIcon icon={icon} size={18} />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-wide text-[#6b6560] uppercase">{label}</p>
                  {href ? (
                    <a href={href} className="font-semibold text-[#1f1d1b] hover:underline">
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-[#1f1d1b]">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <QuoteForm />
      </Container>
    </section>
  );
}

// Visual only for now; sending is wired up in Step 9.
function QuoteForm() {
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
