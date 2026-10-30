export type Snack = {
  title: string;
  subtitle: string;
  tag: string;
  rating: string;
  price: string;
  compareAt: string;
  image: string;
  href: string;
};

// Static for now; swapped for Shopify products later.
export const SNACKS: Snack[] = [
  {
    title: "Assorted Protein Bars",
    subtitle: "Box of 5 · Millet + Honey",
    tag: "A mix of flavors",
    rating: "4.8",
    price: "₹499",
    compareAt: "₹599",
    image: "/images/products/assorted-protein-bars.webp",
    href: "/products/assorted-millet-protein-bars",
  },
  {
    title: "Ashwagandha Protein Bars",
    subtitle: "Box of 6 · Energy & Immunity",
    tag: "Ashwagandha",
    rating: "4.9",
    price: "₹549",
    compareAt: "₹649",
    image: "/images/products/ashwagandha-protein-bars.webp",
    href: "/products/ashwagandha-protein-bars",
  },
  {
    title: "Himalayan Honey Sticks",
    subtitle: "Box of 20 · Pure Raw Honey",
    tag: "Honey",
    rating: "4.7",
    price: "₹399",
    compareAt: "₹469",
    image: "/images/products/himalayan-honey.webp",
    href: "/products/himalayan-honey-sticks",
  },
  {
    title: "Super Savor Protein",
    subtitle: "Assorted · High Protein",
    tag: "Super Savor",
    rating: "4.8",
    price: "₹599",
    compareAt: "₹699",
    image: "/images/products/super-savor-protein.webp",
    href: "/products/super-savor-protein",
  },
];
