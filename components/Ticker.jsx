import { bn, unitName } from "@/lib/format";

export default function Ticker({ products }) {
  if (!products.length) return null;
  const items = [...products, ...products];
  return (
    <div className="bg-green-700 text-white overflow-hidden py-2 text-sm">
      <div className="marquee-track">
        {items.map((p, i) => {
          const { dir, pct } = p.change;
          return (
            <span key={i} className="mx-5 whitespace-nowrap">
              {p.image} {p.nameBn} {bn(p.today)} টাকা/{unitName(p.unit)}{" "}
              <span className={dir === "up" ? "text-green-200" : dir === "down" ? "text-red-200" : "text-gray-200"}>
                {dir === "up" ? "▲" : dir === "down" ? "▼" : "—"} {bn(pct)}%
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
