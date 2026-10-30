import type { Snack } from "./data";
import { SnackCardBody } from "./snack-card-body";
import { SnackCardImage } from "./snack-card-image";

export function SnackCard({ snack }: { snack: Snack }) {
  return (
    <article className="rounded-xl border border-border bg-cream p-3 pb-4 shadow-[0_3px_19px_rgba(0,0,0,0.06)]">
      <SnackCardImage src={snack.image} alt={snack.title} href={snack.href} />
      <SnackCardBody snack={snack} />
    </article>
  );
}
