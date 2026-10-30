export type ShopProduct = {
  title: string;
  subtitle: string;
  category: string;
  rating: string;
  price: string;
  compareAt: string;
  discount: string;
  image: string;
  href: string;
};

const p = (
  title: string, subtitle: string, category: string, rating: string,
  price: string, compareAt: string, discount: string, image: string, handle: string,
): ShopProduct => ({
  title, subtitle, category, rating, price, compareAt, discount,
  image: `/images/shop/${image}.webp`,
  href: `/products/${handle}`,
});

// Static Figma content for now; replaced by Shopify products later.
export const SHOP_PRODUCTS: ShopProduct[] = [
  p("Assorted Millet Protein Bars", "Box of 6 · Energy & Immunity", "Millet Protein Bars", "4.8", "₹499", "₹599", "16% off", "assorted-millet-protein-bars", "assorted-millet-protein-bars"),
  p("Himalayan Raw Honey", "500g · Pure Wildflower Honey", "Himalayan Honey", "4.9", "₹399", "₹469", "15% off", "himalayan-raw-honey", "himalayan-raw-honey"),
  p("BeePops Honey Bear", "350g · Squeeze Bear Jar", "Himalayan Honey", "4.7", "₹280", "₹320", "12% off", "honey-bear", "beepops-honey-bear"),
  p("Himalayan Honey Sticks", "Box of 20 · Clean Energy", "Himalayan Honey", "4.8", "₹349", "₹399", "12% off", "honey-sticks", "himalayan-honey-sticks"),
  p("Honey Oats Cookies", "250g · Doctor-Led Clean Label", "Cookies & Snacks", "4.6", "₹180", "₹220", "18% off", "honey-oats-cookies", "honey-oats-cookies"),
  p("Dates & Peanut Butter Bar", "Pack of 5 · High Fiber", "Millet Protein Bars", "4.9", "₹450", "₹520", "13% off", "dates-peanut-butter-bar", "dates-peanut-butter-bar"),
  p("Berry Mix Trail Mix", "200g · Loaded with Antioxidants", "Cookies & Snacks", "4.8", "₹299", "₹349", "14% off", "berry-trail-mix", "berry-mix-trail-mix"),
  p("Crunchy Organic Peanut Butter", "400g · Zero Added Oils", "Peanut Butter", "4.7", "₹220", "₹260", "15% off", "organic-peanut-butter", "crunchy-organic-peanut-butter"),
];

export const SHOP_CHIPS = ["Jaipur Crafted", "Clean Nutrition"];
