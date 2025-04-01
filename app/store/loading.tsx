import { Skeleton } from "@/components/ui/skeleton"

export default function StoreLoading() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Skeleton className="h-12 w-3/4 mb-2" />
        <Skeleton className="h-6 w-1/2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-[350px] rounded-lg" />
          ))}
      </div>

      <Skeleton className="h-[300px] w-full mt-16 rounded-lg" />
    </div>
  )
}

