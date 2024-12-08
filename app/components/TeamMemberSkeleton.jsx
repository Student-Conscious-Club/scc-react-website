export default function TeamMemberSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-4">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="relative overflow-hidden rounded-xl bg-slate-100 shadow-sm">
            <div className="aspect-square">
              <div className="w-full h-full bg-slate-200" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-100 to-transparent">
              <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-1/2 mb-2"></div>
              <div className="h-2 bg-slate-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}