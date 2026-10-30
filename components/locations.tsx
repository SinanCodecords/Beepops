import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon } from "@hugeicons/core-free-icons";
import { ArrowButton } from "@/components/shared/arrow-button";
import { Container } from "@/components/shared/section";

const MAP_QUERY = encodeURIComponent("Prithviraj Road, C-Scheme, Jaipur, Rajasthan 302001");
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

const ADDRESS_ROWS = [
  { label: "Store Name:", value: "BeePops — Jaipur Flagship" },
  {
    label: "Postal Address:",
    value: "Plot No. SRC Royal Encpt, L-8 Prithviraj Road, C-Scheme, Jaipur, Rajasthan - 302001",
  },
  { label: "Primary Call:", value: "+91 95571 06284", href: "tel:+919557106284" },
  { label: "Email Reach:", value: "hello@beepops.in", href: "mailto:hello@beepops.in" },
];

export function StoreLocation() {
  return (
    <Container className="py-8 md:pb-24">
      <div className="grid gap-6 rounded-3xl border border-[#dee2e6] bg-white p-4 md:p-6 lg:grid-cols-[441px_1fr] lg:min-h-[508px]">
        <div className="flex flex-col rounded-xl border border-[#e5e5e5] bg-cream p-5 md:p-6">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-amber/15 text-amber">
              <HugeiconsIcon icon={Location01Icon} size={20} />
            </span>
            <h2 className="font-sans text-[22px] font-extrabold tracking-normal text-forest normal-case">
              Store Address
            </h2>
          </div>
          <hr className="my-6 border-[#dee2e6]" />
          <dl className="space-y-7">
            {ADDRESS_ROWS.map(({ label, value, href }) => (
              <div key={label} className="grid grid-cols-[100px_1fr] gap-3 sm:grid-cols-[112px_1fr]">
                <dt className="text-sm font-bold text-[#706f6f]">{label}</dt>
                <dd className="text-[15px] leading-snug font-medium text-[#1f1d1b]">
                  {href ? (
                    <a href={href} className="font-semibold text-forest hover:underline">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <ArrowButton href={DIRECTIONS_URL} className="mt-8 h-12 text-sm md:mt-auto">
            Get directions on maps
          </ArrowButton>
        </div>
        <div className="min-h-[320px] overflow-hidden rounded-2xl border border-[#dee2e6] bg-sand">
          <iframe
            src={MAP_EMBED_URL}
            title="Map showing the BeePops Jaipur flagship store"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full min-h-[320px] border-0"
          />
        </div>
      </div>
    </Container>
  );
}
