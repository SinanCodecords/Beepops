import { STORE_LOCATION } from "./data";

export function StoreMap() {
  return (
    <div className="min-h-[320px] overflow-hidden rounded-2xl border border-[#dee2e6] bg-sand">
      <iframe
        src={STORE_LOCATION.mapEmbedUrl}
        title="Map showing the BeePops Jaipur flagship store"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="size-full min-h-[320px] border-0"
      />
    </div>
  );
}
