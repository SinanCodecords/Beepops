import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ArticleCard } from "@/components/shared/article-card";
import { ARTICLES } from "@/components/blog/data";
import { ViewAllButton } from "./view-all-button";

export function Journal() {
  return (
    <Section>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Latest news & articles" title="From the BeePops journal" />
        <ViewAllButton href="/blog" />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {ARTICLES.map((a) => (
          <ArticleCard key={a.title} {...a} />
        ))}
      </div>
    </Section>
  );
}
