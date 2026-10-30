import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  Bookmark02Icon,
  FavouriteIcon,
  Share08Icon,
} from "@hugeicons/core-free-icons";
import { Container } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { POST, POST_BODY } from "./data";
import { BlogSidebar } from "./sidebar";

const iconButton = "h-auto gap-1.5 p-0 text-[15px] text-[#101010] hover:bg-transparent hover:text-forest";
const field =
  "rounded-sm border-[#e2e8f0] bg-white px-3.5 text-[15px] md:text-[15px] font-medium text-ink placeholder:text-[#8a94a6]";

export function BlogPost() {
  return (
    <Container className="grid gap-10 py-12 md:py-[70px] lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-6">
      <div className="space-y-10 lg:space-y-[100px]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 text-[15px] font-semibold text-[#101010] hover:text-forest"
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} size={20} />
          Return to Blogs
        </Link>
        <div className="max-lg:hidden">
          <BlogSidebar />
        </div>
      </div>
      <article className="min-w-0">
        <header>
          <span className="inline-flex h-7 items-center rounded-full bg-forest px-3.5 text-sm text-white">
            {POST.category}
          </span>
          <h1 className="mt-6 font-sans text-[clamp(1.875rem,3.2vw,2.8rem)] leading-tight font-semibold tracking-normal text-[#101010] normal-case">
            {POST.title}
          </h1>
          <p className="mt-2 text-xl font-medium text-[#787878] md:text-2xl">{POST.subtitle}</p>
          <div className="mt-6 flex items-center justify-between gap-4">
            {/* Visual only for now: likes, saving and sharing get wired up later. */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" aria-label="Like this post" className={iconButton}>
                <HugeiconsIcon icon={FavouriteIcon} size={18} />
                {POST.likes}
              </Button>
              <Button variant="ghost" aria-label="Save this post" className={iconButton}>
                <HugeiconsIcon icon={Bookmark02Icon} size={18} />
              </Button>
              <Button variant="ghost" aria-label="Share this post" className={iconButton}>
                <HugeiconsIcon icon={Share08Icon} size={18} />
              </Button>
            </div>
            <time className="text-[15px] text-[#101010]">{POST.date}</time>
          </div>
        </header>
        <div className="mt-12 rounded-[18px] bg-[#f9f9f9] p-2 md:p-3">
          <div className="relative aspect-[928/575] overflow-hidden rounded-2xl bg-[#e5e5e5]">
            <Image
              src={POST.cover}
              alt={POST.title}
              fill
              preload
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-12 space-y-2 text-base leading-[1.7] font-medium text-[#706f6f] md:px-2.5 md:text-lg">
          {POST_BODY.map((block) =>
            block.type === "p" ? (
              <p key={block.text}>{block.text}</p>
            ) : (
              <ul key={block.items[0]} className="list-disc space-y-1 pl-6">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ),
          )}
        </div>
        <CommentForm />
      </article>
    </Container>
  );
}

// Visual only for now: posting comments is wired up in the forms step.
function CommentForm() {
  return (
    <section className="mt-14">
      <h2 className="font-sans text-[28px] font-bold tracking-normal text-[#081026] normal-case">
        Leave A Comment
      </h2>
      <form className="mt-5 space-y-5">
        <Textarea aria-label="Comment" placeholder="Comment.." rows={5} className={`${field} min-h-32 py-3.5`} />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input aria-label="Name" placeholder="Name (required)" required className={`${field} h-[42px]`} />
          <Input type="email" aria-label="Email" placeholder="Email (required)" required className={`${field} h-[42px]`} />
        </div>
        <Button className="h-[42px] gap-3 pr-1.5 pl-3.5 text-[13px] font-bold uppercase hover:bg-forest-deep">
          Post comment
          <span className="flex size-7 items-center justify-center rounded-full bg-white text-forest">
            <HugeiconsIcon icon={ArrowRight02Icon} size={14} />
          </span>
        </Button>
      </form>
    </section>
  );
}
