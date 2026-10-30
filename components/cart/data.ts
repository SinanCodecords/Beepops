// Design stage: static bag contents. Replaced by the Shopify cart later.
export const CART = {
  seller: "BeePops",
  sellerBadge: "Verified Farm Network Seller",
  pledge:
    "Your purchase is covered by BeePops Direct Quality Pledge. From raw local farms direct to your home.",
  items: [
    {
      id: "honey-sticks-50",
      title: "BeePops Honey Sticks | Box Of 50 | Pure Himalayan Honey",
      variant: "Box of 50 Sticks · Pure Raw Wild Mustard Honey",
      delivery: "Wednesday, 03 Sept",
      image: "/images/products/himalayan-honey.webp",
      href: "/products/himalayan-honey",
      quantity: 1,
      total: "₹180",
    },
  ],
  summary: {
    rows: [
      { label: "Subtotal", value: "₹180" },
      { label: "Shipping, Packaging & Taxes", value: "₹55" },
    ],
    total: "₹235",
  },
};

export type CartItem = (typeof CART.items)[number];
