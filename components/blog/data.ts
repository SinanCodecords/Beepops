export const ARTICLES = [
  {
    date: "Aug 07, 2025",
    title: "BeePops Mini Protein Bar",
    excerpt: "Clean Nutrition, Made Accessible",
    image: "/images/blog/mini-protein-bar.webp",
    href: "/blog/beepops-mini-protein-bar",
  },
  {
    date: "Aug 09, 2025",
    title: "From Hive to Home",
    excerpt: "The Journey of Our Himalayan Honey",
    image: "/images/blog/hive-to-home.webp",
    href: "/blog/from-hive-to-home",
  },
  {
    date: "Aug 09, 2025",
    title: "Natural vs. Added Sugars",
    excerpt: "The Sweet Truth You Need to Know!",
    image: "/images/blog/natural-vs-added-sugars.webp",
    href: "/blog/natural-vs-added-sugars",
  },
];

// Design stage: every slug shows this post. Replaced by real posts later.
export const POST = {
  category: "BeePops Mini Protein Bar",
  title: "BeePops Mini Protein Bar",
  subtitle: "BeePops Mini Protein Bar",
  date: "3 Jan 2026",
  likes: 0,
  cover: "/images/blog/mini-protein-bar-cover.webp",
};

// Each block is a paragraph or a bullet list, in reading order.
export const POST_BODY: ({ type: "p"; text: string } | { type: "list"; items: string[] })[] = [
  {
    type: "p",
    text: "In India, protein is often misunderstood — with “healthy bars” wrapped in claims but lacking real nourishment. That’s where we decided to change the game.",
  },
  {
    type: "p",
    text: "Our BeePops Mini Protein Bar is crafted to deliver maximum nutrition in every bite, without compromising on ingredients or values:",
  },
  {
    type: "list",
    items: [
      "Made with wholesome millets, peanuts, jaggery, wheat, and honey",
      "Provides 15g protein per 100g",
      "Free from synthetic flavoring, coloring, or preservatives",
    ],
  },
  {
    type: "p",
    text: "We’ve already served this bar to 10,000+ Anganwadi children through our partnerships — proving that high-quality protein can be real, simple, and accessible.",
  },
  {
    type: "p",
    text: "Whether you’re a student, office-goer, or a parent looking for smart lunchbox choices, our mini bar brings nutrition, taste, and trust together — in one small yet powerful bite.",
  },
  {
    type: "p",
    text: "Because clean nutrition isn’t a trend — it’s a right. And we’re making sure it reaches every hand.",
  },
];
