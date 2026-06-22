import type { SortOrder } from "@/types";

interface CatalogHeaderProps {
  total: number;
  sortOrder: SortOrder;
  onSortChange: (value: SortOrder) => void;
}

export const CatalogHeader = ({ total, sortOrder, onSortChange }: CatalogHeaderProps) => {
  return (
    <header className="flex flex-col gap-3 rounded-2xl border border-zinc-200 p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-lg font-semibold text-zinc-900" aria-live="polite">
        {total} resultados disponibles
      </p>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-zinc-700">
          Ordenar por precio
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value as SortOrder)}
          className="rounded-xl border border-zinc-300 px-3 py-2 text-sm"
          aria-label="Orden de precios"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </header>
  );
};
