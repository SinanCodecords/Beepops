import { POST } from "./data";
import { PostActions } from "./post-actions";

export function PostHeader() {
  return (
    <header>
      <span className="inline-flex h-7 items-center rounded-full bg-forest px-3.5 text-sm text-white">
        {POST.category}
      </span>
      <h1 className="mt-6 font-sans text-[clamp(1.875rem,3.2vw,2.8rem)] leading-tight font-semibold tracking-normal text-[#101010] normal-case">
        {POST.title}
      </h1>
      <p className="mt-2 text-xl font-medium text-[#787878] md:text-2xl">{POST.subtitle}</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <PostActions />
        <time className="text-[15px] text-[#101010]">{POST.date}</time>
      </div>
    </header>
  );
}
