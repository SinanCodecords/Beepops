import { Call02Icon, Location01Icon, Mail01Icon } from "@hugeicons/core-free-icons";

export const CONTACTS = [
  { label: "Write Email", value: "hello@beepops.in", href: "mailto:hello@beepops.in", icon: Mail01Icon },
  { label: "Visit Now", value: "607 Royal Ensign, C-Scheme, Jaipur 302001", href: null, icon: Location01Icon },
  { label: "Call Us", value: "+91 95571 06284", href: "tel:+919557106284", icon: Call02Icon },
];

export const QUOTE_FIELDS = [
  { name: "name", type: "text", placeholder: "Your name" },
  { name: "email", type: "email", placeholder: "Email address" },
  { name: "quantity", type: "text", placeholder: "Estimated quantity (e.g. 5,000 units)" },
];
