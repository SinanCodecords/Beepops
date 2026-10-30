import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon } from "@hugeicons/core-free-icons";
import { ArrowButton } from "@/components/shared/arrow-button";
import { AddressRow } from "./address-row";
import { ADDRESS_ROWS, STORE_LOCATION } from "./data";

export function AddressPanel() {
  return (
    <div className="flex flex-col rounded-xl border border-[#e5e5e5] bg-cream p-5 md:p-6">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl bg-amber/15 text-amber">
          <HugeiconsIcon icon={Location01Icon} size={20} />
        </span>
        <h2 className="font-sans text-[22px] font-extrabold tracking-normal text-forest normal-case">
          {STORE_LOCATION.title}
        </h2>
      </div>
      <hr className="my-6 border-[#dee2e6]" />
      <dl className="space-y-7">
        {ADDRESS_ROWS.map((row) => (
          <AddressRow key={row.label} {...row} />
        ))}
      </dl>
      <ArrowButton href={STORE_LOCATION.directionsUrl} className="mt-8 h-12 text-sm md:mt-auto">
        Get directions on maps
      </ArrowButton>
    </div>
  );
}
