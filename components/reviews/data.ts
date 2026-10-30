// Store performance badges from the Figma "Reviews" frame (static for now).
export const STORE_RATINGS = [
  { title: "Delivery Timeliness", note: "All orders dispatched on time", score: "10/10" },
  { title: "Support Rating", note: "Instant expert support", score: "10/10" },
  { title: "Return Accuracy", note: "Perfect catalog match", score: "10/10" },
  { title: "Fulfillment Rate", note: "100% order execution", score: "10/10" },
  { title: "Overall Rating", note: "Top tier ONDC score", score: "10/10" },
];

export type StoreRating = (typeof STORE_RATINGS)[number];
