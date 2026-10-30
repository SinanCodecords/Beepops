import type { Metadata } from "next";
import { BlogPost } from "@/components/blog";

export const metadata: Metadata = {
  title: "BeePops Mini Protein Bar",
  description: "How the BeePops Mini Protein Bar makes clean, high-protein nutrition accessible.",
};

// Design stage: every blog slug shows the same static post for now.
export default function BlogPostPage() {
  return <BlogPost />;
}
