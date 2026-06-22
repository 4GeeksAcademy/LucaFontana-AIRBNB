export const MapPlaceholder = () => {
  return (
    <aside
      className="h-72 rounded-2xl border border-zinc-300 bg-zinc-100 p-4 md:sticky md:top-24 md:h-[640px]"
      aria-label="Mapa de localización de alojamientos"
      itemScope
      itemType="https://schema.org/Place"
    >
      <h2 className="text-lg font-semibold text-zinc-900" itemProp="name">
        Mapa
      </h2>
      <p className="mt-2 text-sm text-zinc-600" itemProp="description">
        Vista geográfica de alojamientos y precios por zona.
      </p>
      <div className="mt-4 flex h-[calc(100%-4rem)] items-center justify-center rounded-xl border border-dashed border-zinc-400 text-zinc-600">
        Placeholder de mapa
      </div>
    </aside>
  );
};
