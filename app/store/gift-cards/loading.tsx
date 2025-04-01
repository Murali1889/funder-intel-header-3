import { Skeleton } from "@/components/ui/skeleton"

export default function GiftCardsLoading() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Skeleton className="h-12 w-1/3 mb-2" />
        <Skeleton className="h-6 w-1/2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Skeleton className="h-[300px] w-full mb-8 rounded-lg" />
          <Skeleton className="h-[400px] w-full mb-8 rounded-lg" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
        <div>
          <Skeleton className="h-[500px] w-full rounded-lg sticky top-8" />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-[250px] rounded-lg" />
          ))}
      </div>
    </div>
  )
}

