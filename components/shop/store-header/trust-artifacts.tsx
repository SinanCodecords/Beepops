import Image from "next/image";

const tile = "flex h-24 w-[88px] flex-col items-center justify-center rounded-lg border border-[#dee2e6] bg-cream";

export function TrustArtifacts() {
  return (
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
  );
}
