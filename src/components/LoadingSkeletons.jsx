// src/components/LoadingSkeletons.jsx

const LoadingSkeletons = () => {
  return (
    <div className="px-4 md:px-12 mb-12">
      {/* Title Skeleton */}
      <div className="h-8 bg-gray-800 rounded w-64 mb-6 animate-pulse"></div>
      
      {/* Movie Cards Skeleton */}
      <div className="flex gap-2 md:gap-3 overflow-hidden pb-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex-shrink-0 w-40 md:w-48 lg:w-56">
            <div className="aspect-[2/3] bg-gray-800 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingSkeletons