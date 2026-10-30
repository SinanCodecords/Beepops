type Props = { label: string; value: string; href?: string };

export function AddressRow({ label, value, href }: Props) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-3 sm:grid-cols-[112px_1fr]">
      <dt className="text-sm font-bold text-[#706f6f]">{label}</dt>
      <dd className="text-[15px] leading-snug font-medium text-[#1f1d1b]">
        {href ? (
          <a href={href} className="font-semibold text-forest hover:underline">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
