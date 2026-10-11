import Link from "next/link";
import { bn, taka, unitText } from "@/lib/format";

export function Badge({ change }) {
  const { dir, pct } = change;
  const cls =
    dir === "up" ? "text-green-700 bg-green-100"
    : dir === "down" ? "text-red-700 bg-red-100"
    : "text-gray-600 bg-gray-100";
  const sign = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";
  return <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${cls}`}>{sign} {bn(pct)}%</span>;
}

export default function ProductCard({ product: p }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="block bg-white border rounded-xl p-4 hover:shadow-md transition"
    >
      <div className="text-4xl mb-2">{p.image}</div>
      <h3 className="font-semibold">{p.nameBn}</h3>
      <p className="text-sm text-gray-500 mb-3">{unitText(p.unit)}</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <p className="font-bold">{taka(p.today)}</p>
        </div>
        <Badge change={p.change} />
      </div>
    </Link>
  );
}
