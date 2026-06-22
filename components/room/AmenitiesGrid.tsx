interface AmenitiesGridProps {
  amenities: string[];
}

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section aria-label="Servicios" className="space-y-3">
      <h2 className="text-xl font-semibold text-zinc-900">Servicios</h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
        {amenities.map((amenity) => (
          <li key={amenity} className="flex items-center gap-2 rounded-xl border border-zinc-200 px-3 py-2 text-zinc-700">
            <span aria-hidden="true">✓</span>
            <span>{amenity}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
