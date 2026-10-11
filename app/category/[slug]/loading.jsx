import GridSkeleton from "@/components/GridSkeleton";

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-4">
      <div className="skeleton h-10 w-48" />
      <GridSkeleton />
    </div>
  );
}
