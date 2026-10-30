export const RATING_SUMMARY = {
  average: "4.8",
  total: 124,
  bars: [
    { stars: 5, percent: 85 },
    { stars: 4, percent: 10 },
    { stars: 3, percent: 3 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 1 },
  ],
};

export const REVIEWS = [
  {
    name: "Aastha Bhatia",
    when: "2 weeks ago",
    avatar: "/images/product-detail/avatar-aastha.webp",
    title: "Swapped out unhealthy chocolates!",
    body: "Absolutely love these! I'm trading regular chocolate and candies for BeePops healthy honey sticks for my toddler. No mess, super easy to use, and healthy.",
  },
  {
    name: "Asha Yadav",
    when: "1 month ago",
    avatar: "/images/product-detail/avatar-asha.webp",
    title: "Quick healthy boost",
    body: "As a new working mom, BeePops wildflower honey sticks are my immediate go-to sweet energy pop while running between tasks. Fits beautifully in any pocket.",
  },
];

export type Review = (typeof REVIEWS)[number];
