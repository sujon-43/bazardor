import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();
  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700">আজ দাম বেড়েছে ▲</h2>
          <ProductGrid products={risers} />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">আজ দাম কমেছে ▼</h2>
          <ProductGrid products={fallers} />
        </section>
        <section id="সব-পণ্য" className="scroll-mt-28">
          <h2 className="text-2xl font-bold">সব পণ্য</h2>
          <p className="text-gray-500 mb-4">সব নিত্যপ্রয়োজনীয় পণ্যের আজকের দাম</p>
          <ProductGrid products={products} />
        </section>
      </div>
    </>
  );
}
