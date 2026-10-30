import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { ARTICLES } from "@/components/blog/data";
import { ArticleCard } from "@/components/shared/article-card";
import { Section, SectionHeading } from "@/components/shared/section";

export function Journal() {
  return (
    <Section>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Latest news & articles" title="From the BeePops journal" />
        <Link
          href="/blog"
          className="inline-flex h-13 items-center gap-2 self-start rounded-full border-2 border-forest px-6 font-bold text-forest transition-colors hover:bg-forest hover:text-white md:self-auto"
        >
          View All
          <HugeiconsIcon icon={ArrowRight02Icon} size={16} />
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {ARTICLES.map((a) => (
          <ArticleCard key={a.title} {...a} />
        ))}
      </div>
    </Section>
  );
}
