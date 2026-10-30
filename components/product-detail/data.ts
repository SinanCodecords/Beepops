// Static design content for the product page. Replaced by Shopify data later.
const JAR = "/images/product-detail/honey-jar.webp";

export const PRODUCT = {
  title: "BeePops Honey Sticks",
  subtitle: "Box of 20 • Pure Wildflower Himalayan Honey",
  badges: ["Best Seller", "Doctor Led"],
  rating: "4.9",
  reviewCount: 142,
  price: "₹180",
  mrp: "₹300",
  discount: "40% OFF",
  images: [JAR, JAR, JAR, JAR],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Shop All", href: "/shop" },
    { label: "Raw Honey", href: "/shop?category=honey" },
  ],
};

export const PURCHASE_OPTIONS = [
  { id: "one-time", label: "One-time purchase", note: "₹180 per box", price: "₹180" },
  {
    id: "subscribe",
    label: "Subscribe & Save 10%",
    note: "Delivered automatically every month",
    price: "₹162",
  },
];

export const TRUST_BADGES = [
  { id: "doctor", label: "Doctor-Led Clean Formulation" },
  { id: "shipping", label: "Free shipping on orders above ₹2000" },
] as const;

export const ABOUT = {
  title: "About BeePops Honey Sticks",
  body: "Our single-serve wildflower honey sticks provide premium Himalayan honey packaged safely for clean, on-the-go lifestyle needs. Sourced sustainably from ethical high-altitude farms, our honey offers an instantly delicious way to sweeten green tea, coffee, oatmeal, or can be enjoyed directly by children as a highly nutritive, processed-sugar-free energy pop. No drips, no sticky spoons, no hassle.",
  benefits: ["100% Raw Himalayan Honey", "Mess-Free Straw Dispenser", "Doctor-Approved & Kid-Safe"],
};

export const SPECS = [
  { label: "Pack Size", value: "Box of 20 premium honey sticks" },
  { label: "Net Weight", value: "200 grams total (10g per stick)" },
  { label: "Main Ingredient", value: "100% Natural Himalayan wildflower honey" },
  { label: "Form", value: "Liquid wildflower honey in semi-flexible straws" },
  { label: "Shelf Life", value: "12 Months from manufacturing date" },
];

export const RELATED = [
  {
    title: "Assorted Protein Bars",
    subtitle: "Millet + Wildflower Honey",
    price: "₹499",
    compareAt: "₹599",
    image: "/images/product-detail/assorted-protein-bars.webp",
    href: "/products/assorted-protein-bars",
  },
  {
    title: "Ashwagandha Protein Bars",
    subtitle: "Energy & Active Immunity",
    price: "₹549",
    compareAt: "₹649",
    image: "/images/product-detail/ashwagandha-protein-bars.webp",
    href: "/products/ashwagandha-protein-bars",
  },
  {
    title: "Super Savor Protein",
    subtitle: "High-Protein Assorted pack",
    price: "₹599",
    compareAt: "₹699",
    image: "/images/product-detail/super-savor-protein.webp",
    href: "/products/super-savor-protein",
  },
];

export type RelatedProduct = (typeof RELATED)[number];
