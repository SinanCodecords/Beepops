import Image from "next/image";
import { STORE } from "./data";
import { StoreMeta } from "./store-meta";
import { StoreTitle } from "./store-title";
import { TrustArtifacts } from "./trust-artifacts";

export function StoreSpotlight() {
  return (
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
        <StoreTitle />
        <p className="text-sm font-medium text-[#706f6f]">{STORE.tagline}</p>
        <StoreMeta />
      </div>
      <TrustArtifacts />
    </div>
  );
}
