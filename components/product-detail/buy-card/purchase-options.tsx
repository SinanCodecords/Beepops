"use client";

import { useState } from "react";
import { PURCHASE_OPTIONS } from "../data";
import { PurchaseOption } from "./purchase-option";

export function PurchaseOptions() {
  const [selected, setSelected] = useState("subscribe");

  return (
    <fieldset className="mt-3 space-y-3">
      <legend className="sr-only">Purchase type</legend>
      {PURCHASE_OPTIONS.map((option) => (
        <PurchaseOption
          key={option.id}
          option={option}
          checked={selected === option.id}
          onSelect={() => setSelected(option.id)}
        />
      ))}
    </fieldset>
  );
}
