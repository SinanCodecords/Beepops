import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

type Props = { date: string; title: string; excerpt: string; image: string; href: string };

export function JournalCard({ date, title, excerpt, image, href }: Props) {
  return (
    <article className="overflow-hidden rounded-[26px] border border-border bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
      <div className="relative aspect-[412/265] bg-[#f0e5c9]">
        <Image src={image} alt={title} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
      </div>
      <div className="px-7 pt-9 pb-7">
        <p className="text-xs font-bold tracking-wide text-[#b0a894] uppercase">{date}</p>
        <h3 className="mt-3 text-base text-ink">{title}</h3>
        <p className="mt-2 text-sm text-[#5c5749]">{excerpt}</p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#c6870c] hover:underline"
        >
          Read More
          <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
        </Link>
      </div>
    </article>
  );
}
