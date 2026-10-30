import { Container } from "@/components/shared/container";
import { BlogSidebar } from "../sidebar";
import { BackLink } from "./back-link";
import { CommentForm } from "./comment-form";
import { PostContent } from "./post-content";
import { PostCover } from "./post-cover";
import { PostHeader } from "./post-header";

export function BlogPost() {
  return (
    <Container className="grid gap-10 py-12 md:py-[70px] lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-6">
      <div className="space-y-10 lg:space-y-[100px]">
        <BackLink />
        <div className="max-lg:hidden">
          <BlogSidebar />
        </div>
      </div>
      <article className="min-w-0">
        <PostHeader />
        <PostCover />
        <PostContent />
        <CommentForm />
      </article>
    </Container>
  );
}
