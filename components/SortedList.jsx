"use client";
import { useState } from "react";
import ProductGrid from "./ProductGrid";

export default function SortedList({ products }) {
  const [sort, setSort] = useState("default");
  const list = [...products];
  if (sort === "asc") list.sort((a, b) => Number(a.today) - Number(b.today));
  if (sort === "desc") list.sort((a, b) => Number(b.today) - Number(a.today));

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="sort" className="text-sm">সাজান:</label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select select-bordered select-sm"
        >
          <option value="default">ডিফল্ট</option>
          <option value="asc">দাম: কম থেকে বেশি</option>
          <option value="desc">দাম: বেশি থেকে কম</option>
        </select>
      </div>
      <ProductGrid products={list} />
    </>
  );
}
