import SortedList from "@/components/SortedList";
import NotFoundBox from "@/components/NotFoundBox";
import { getCategory, getProducts } from "@/lib/api";

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = await getCategory(slug);
  const products = category ? await getProducts(slug) : [];

  if (!category || !products.length) {
    return <NotFoundBox message="এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।" />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        {category.icon} {category.nameBn}
      </h1>
      <SortedList products={products} />
    </div>
  );
}
