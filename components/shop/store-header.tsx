import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";
import { Container } from "@/components/shared/section";
import { StoreTabs } from "./store-tabs";

const STORE = {
  name: "BeePops",
  tagline: "MSME Tryst · Doctor-led, family-safe snacks born and handcrafted in Jaipur, Rajasthan.",
  rating: "4.8",
  reviews: "(120+ reviews)",
  license: "FSSAI Lic. No: 12224999000101",
  city: "Jaipur, Rajasthan",
};

const BADGES = [
  { label: "Open", className: "bg-[#e8f5e9] text-[#2e7d32]" },
  { label: "✓ Deliverable", className: "bg-[#e3f2fd] text-[#1565c0]" },
];

const divider = <span aria-hidden className="hidden h-3.5 w-px bg-[#dee2e6] sm:block" />;
const tile =
  "flex h-24 w-[88px] flex-col items-center justify-center rounded-lg border border-[#dee2e6] bg-cream";

// Shared top of the store pages: Shop, Locations, Reviews.
export function StoreHeader() {
  return (
    <Container className="space-y-6 pt-8 md:pt-10">
      <div className="flex items-start gap-4 rounded-2xl border border-[#dee2e6] bg-white p-4 md:items-center md:gap-6 md:p-6">
        <Image
          src="/images/brand/logo-full.webp"
          alt="BeePops"
          width={100}
          height={74}
          preload
          className="h-auto w-16 shrink-0 md:w-[100px]"
        />
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-[28px] leading-none font-extrabold text-forest md:text-[32px]">
              {STORE.name}
            </p>
            {BADGES.map((badge) => (
              <span
                key={badge.label}
                className={`rounded-md px-2 py-1 text-[11px] font-bold tracking-wide uppercase ${badge.className}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
          <p className="text-sm font-medium text-[#706f6f]">{STORE.tagline}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px]">
            <p className="flex items-center gap-1.5">
              <HugeiconsIcon icon={StarIcon} size={14} className="text-amber" />
              <span className="font-bold text-ink">{STORE.rating}</span>
              <span className="text-xs text-[#b0a894]">{STORE.reviews}</span>
            </p>
            {divider}
            <p className="font-semibold text-[#5c5749]">{STORE.license}</p>
            {divider}
            <p className="font-semibold text-[#5c5749]">{STORE.city}</p>
          </div>
        </div>
        <div className="hidden shrink-0 gap-4 md:flex">
          <div className={tile}>
            <Image src="/images/shop/qr-code.webp" alt="QR code to share the BeePops store" width={64} height={64} />
            <p className="mt-1 text-[9px] font-semibold text-[#b0a894] uppercase">Scan to share</p>
          </div>
          <div className={tile}>
            <p className="text-[19px] leading-none font-extrabold text-[#3a593e]">fssai</p>
            <p className="mt-1.5 text-[8px] font-medium text-[#b0a894] uppercase">100% safe</p>
          </div>
        </div>
      </div>
      <StoreTabs />
    </Container>
  );
}
