const MAP_QUERY = encodeURIComponent("Prithviraj Road, C-Scheme, Jaipur, Rajasthan 302001");

export const STORE_LOCATION = {
  title: "Store Address",
  mapEmbedUrl: `https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`,
};

export const ADDRESS_ROWS = [
  { label: "Store Name:", value: "BeePops — Jaipur Flagship" },
  {
    label: "Postal Address:",
    value: "Plot No. SRC Royal Encpt, L-8 Prithviraj Road, C-Scheme, Jaipur, Rajasthan - 302001",
  },
  { label: "Primary Call:", value: "+91 95571 06284", href: "tel:+919557106284" },
  { label: "Email Reach:", value: "hello@beepops.in", href: "mailto:hello@beepops.in" },
];
