import ProtectedRoute from "@/components/ProtectedRoute";
import NotFoundBox from "@/components/NotFoundBox";
import { Badge } from "@/components/ProductCard";
import { getProducts } from "@/lib/api";
import { taka, unitText } from "@/lib/format";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const all = await getProducts();
  const p = all.find((x) => x.slug === slug);
  if (!p) return <NotFoundBox message="পণ্যটি খুঁজে পাওয়া যায়নি।" />;

  const markets = p.markets || [];
  const min = Math.min(...markets.map((m) => m.min));
  const max = Math.max(...markets.map((m) => m.max));
  const avg = Math.round(
    markets.reduce((s, m) => s + (m.min + m.max) / 2, 0) / (markets.length || 1)
  );

  return (
    <ProtectedRoute>
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-5xl">{p.image}</span>
            <h1 className="text-3xl font-bold">{p.nameBn}</h1>
          </div>
          <p className="text-gray-600 mb-3">
            {p.nameBn}-এর আজকের দাম {taka(p.today)} ({unitText(p.unit)}); গতকাল ছিল {taka(p.yesterday)}।
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-outline">{p.categoryIcon} {p.categoryNameBn}</span>
            <span className="badge badge-outline">{unitText(p.unit)}</span>
            <Badge change={p.change} />
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[["সর্বনিম্ন দাম", min], ["সর্বোচ্চ দাম", max], ["গড় দাম", avg]].map(([label, v]) => (
            <div key={label} className="bg-white border rounded-xl p-4">
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-2xl font-bold">{taka(v)}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">বাজারভিত্তিক আজকের দাম</h2>
          <div className="bg-white border rounded-xl overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>বাজার</th>
                  <th>বিভাগ</th>
                  <th>সর্বনিম্ন</th>
                  <th>সর্বোচ্চ</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((m, i) => (
                  <tr key={i}>
                    <td>{m.market}</td>
                    <td>{m.division}</td>
                    <td>{taka(m.min)}</td>
                    <td>{taka(m.max)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
