import Image from "next/image";
import { ArticleCard } from "@/components/shared/article-card";
import { Container } from "@/components/shared/section";
import { ARTICLES } from "./data";
import { BlogSidebar } from "./sidebar";

export { BlogPost } from "./post";

export function BlogHero() {
  return (
    <Container className="pt-8 md:pt-[70px]">
      <div className="relative overflow-hidden rounded-xl bg-honey px-6 py-10 text-forest md:min-h-[440px] md:px-10 md:py-11">
        <Image
          src="/images/blog/banner-splash.webp"
          alt=""
          width={648}
          height={648}
          sizes="50vw"
          className="pointer-events-none absolute top-[-28%] left-[49.4%] w-[50.4%] opacity-60 mix-blend-multiply max-md:hidden"
        />
        <div className="relative max-w-[700px]">
          <p className="text-lg font-bold uppercase md:text-2xl">Blog</p>
          <h1 className="mt-4 text-[clamp(2rem,4.2vw,3.75rem)] leading-[1.15] md:mt-6">
            Small stories for better snacking
          </h1>
          <p className="mt-6 text-base font-medium uppercase md:text-2xl">
            Snacks made with real ingredients, big flavour, and no nonsense.
          </p>
        </div>
      </div>
    </Container>
  );
}

export function BlogBody() {
  return (
    <Container className="grid gap-10 py-12 md:py-[70px] lg:grid-cols-[290px_1fr] lg:gap-6">
      <BlogSidebar />
      <div className="grid content-start gap-5 md:grid-cols-2">
        {ARTICLES.map((a) => (
          <ArticleCard key={a.title} {...a} />
        ))}
      </div>
    </Container>
  );
}
