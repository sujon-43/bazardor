const BASES = [
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

async function get(path) {
  for (const base of BASES) {
    try {
      const res = await fetch(base + path, { next: { revalidate: 300 } });
      if (res.status === 404) return null;
      if (res.ok) return await res.json();
    } catch (e) {}
  }
  return null;
}

export const getProducts = async (category) =>
  (await get(category ? `/products?category=${category}` : "/products")) || [];
export const getCategories = async () => (await get("/categories")) || [];
export const getCategory = (slug) => get(`/categories/${slug}`);
