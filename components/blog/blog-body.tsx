import { Container } from "@/components/shared/container";
import { ArticleGrid } from "./article-grid";
import { BlogSidebar } from "./sidebar";

export function BlogBody() {
  return (
    <Container className="grid gap-10 py-12 md:py-[70px] lg:grid-cols-[290px_1fr] lg:gap-6">
      <BlogSidebar />
      <ArticleGrid />
    </Container>
  );
}
