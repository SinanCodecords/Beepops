import type { Metadata } from "next";
import { BrandStatement, StoryHero, StoryPhoto, Values } from "@/components/about";
import { Faq, Founders } from "@/components/home";

export const metadata: Metadata = {
  title: "About Us",
  description: "How BeePops began: grandma's millet ladoo recipe, doctor-led nutrition and pure ingredients from Jaipur.",
};

export default function AboutPage() {
  return (
    <>
      <StoryHero />
      <BrandStatement />
      <StoryPhoto />
      <Values />
      <Founders />
      <Faq />
    </>
  );
}
