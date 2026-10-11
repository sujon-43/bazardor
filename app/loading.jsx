import GridSkeleton from "@/components/GridSkeleton";

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <div className="skeleton h-40 w-full" />
      <GridSkeleton count={6} />
      <GridSkeleton count={8} />
    </div>
  );
}
