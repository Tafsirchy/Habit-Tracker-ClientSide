import React from "react";

const SkeletonLoader = ({ type = "card", count = 1, className = "" }) => {
  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return (
          <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden ${className}`}>
            {/* Image skeleton */}
            <div className="skeleton h-48 w-full rounded-none" />
            
            {/* Content skeleton */}
            <div className="p-6 space-y-4">
              {/* Title */}
              <div className="skeleton h-6 w-3/4" />
              
              {/* Description lines */}
              <div className="space-y-2">
                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-4 w-5/6" />
              </div>
              
              {/* Meta info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="skeleton h-8 w-8 rounded-full" />
                  <div className="skeleton h-4 w-1/2" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="skeleton h-8 w-8 rounded-full" />
                  <div className="skeleton h-4 w-1/2" />
                </div>
              </div>
              
              {/* Button */}
              <div className="skeleton h-12 w-full rounded-lg" />
            </div>
          </div>
        );

      case "list":
        return (
          <div className={`flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg ${className}`}>
            <div className="skeleton h-12 w-12 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="skeleton h-4 w-3/4" />
              <div className="skeleton h-3 w-1/2" />
            </div>
          </div>
        );

      case "text":
        return (
          <div className={`space-y-2 ${className}`}>
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-5/6" />
            <div className="skeleton h-4 w-4/5" />
          </div>
        );

      case "avatar":
        return <div className={`skeleton h-12 w-12 rounded-full ${className}`} />;

      case "rectangle":
        return <div className={`skeleton h-48 w-full rounded-lg ${className}`} />;

      default:
        return <div className={`skeleton h-32 w-full rounded-lg ${className}`} />;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </>
  );
};

export default SkeletonLoader;
