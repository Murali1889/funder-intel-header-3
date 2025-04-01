import { Skeleton } from "@/components/ui/skeleton"

export default function WebsiteDevelopmentLoading() {
  return (
    <div className="container py-8">
      <div className="mb-12">
        <Skeleton className="h-12 w-3/4 mb-2" />
        <Skeleton className="h-6 w-1/2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Skeleton className="h-[300px] rounded-lg" />
        <Skeleton className="h-[300px] rounded-lg" />
      </div>

      <Skeleton className="h-12 w-1/3 mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Skeleton className="h-[400px] rounded-lg" />
        <Skeleton className="h-[400px] rounded-lg" />
      </div>

      <Skeleton className="h-12 w-1/3 mx-auto mb-8" />
      <div className="space-y-8 mb-16">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-[200px] rounded-lg" />
          ))}
      </div>

      <Skeleton className="h-12 w-1/3 mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Skeleton className="h-[450px] rounded-lg" />
        <Skeleton className="h-[450px] rounded-lg" />
        <Skeleton className="h-[450px] rounded-lg" />
      </div>

      <Skeleton className="h-[200px] rounded-lg" />
    </div>
  )
}

