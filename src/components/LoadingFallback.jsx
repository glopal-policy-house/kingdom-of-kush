import React from 'react';

/**
 * Skeleton loader while content is loading
 * Maintains layout stability by reserving space
 */
const SkeletonLoader = ({ width = 'w-full', height = 'h-6', className = '' }) => (
  <div className={`${width} ${height} bg-gradient-to-r from-gray-200 to-gray-100 rounded animate-pulse ${className}`} />
);

/**
 * Loading fallback component that displays during i18n initialization
 * Prevents "flash of unstyled content" or disappearing content
 */
export const LoadingFallback = ({ minimal = false }) => {
  if (minimal) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D4AF37]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
      <div className="max-w-md w-full px-4 space-y-8">
        {/* Header skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <SkeletonLoader width="w-10" height="h-10" />
            <SkeletonLoader width="w-24" height="h-6" />
          </div>
          <SkeletonLoader width="w-16" height="h-8" />
        </div>

        {/* Main content skeleton */}
        <div className="space-y-4">
          <SkeletonLoader width="w-full" height="h-12" />
          <SkeletonLoader width="w-3/4" height="h-6" />
          <SkeletonLoader width="w-full" height="h-4" />
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonLoader key={i} width="w-full" height="h-24" />
          ))}
        </div>

        {/* Loading text */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#D4AF37]"></div>
            <span className="text-gray-600 text-sm">Initializing...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingFallback;
