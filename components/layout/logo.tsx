import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="BeePops home" className="shrink-0">
      <Image src="/images/brand/logo-bee.webp" alt="BeePops" width={52} height={39} preload />
    </Link>
  );
}

export function FooterLogo() {
  return (
    <Link href="/" aria-label="BeePops home" className="flex items-center gap-3">
      <Image
        src="/images/brand/logo-badge.webp"
        alt=""
        width={44}
        height={44}
        className="rounded-lg"
      />
      <span className="font-logo text-2xl font-bold">BeePops</span>
    </Link>
  );
}
