import { ArticleCard } from "@/components/shared/article-card";
import { ARTICLES } from "./data";

export function ArticleGrid() {
  return (
    <div className="grid content-start gap-5 md:grid-cols-2">
      {ARTICLES.map((a) => (
        <ArticleCard key={a.title} {...a} />
      ))}
    </div>
  );
}
