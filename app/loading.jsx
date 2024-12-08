'use client';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <>
      
      <div className="container mx-auto p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {/* Header Skeleton */}
          {/* <div className="h-8 bg-gray-200 rounded-md w-3/4 animate-pulse" /> */}
          
          {/* Content Skeletons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-3 bg-gray-100 p-4 rounded-lg">
                <div className="h-40 bg-gray-200 rounded-md animate-pulse" />
                <div className="h-4 bg-gray-200 rounded-md w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded-md w-1/2 animate-pulse" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}