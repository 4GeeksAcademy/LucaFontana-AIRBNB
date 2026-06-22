export const AccommodationCardSkeleton = () => {
  return (
    <article aria-hidden="true" className="animate-pulse space-y-3">
      <div className="h-44 rounded-2xl bg-zinc-200" />
      <div className="h-4 w-3/4 rounded bg-zinc-200" />
      <div className="h-4 w-1/2 rounded bg-zinc-200" />
      <div className="h-4 w-2/3 rounded bg-zinc-200" />
    </article>
  );
};
