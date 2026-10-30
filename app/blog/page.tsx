import type { Metadata } from "next";
import { BlogBody, BlogHero } from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Small stories for better snacking: clean nutrition, honey and millet from BeePops.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogBody />
    </>
  );
}
