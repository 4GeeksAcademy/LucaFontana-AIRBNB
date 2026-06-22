import type { Category } from "@/types";

interface CategoryRowProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (categoryId: string) => void;
}

export const CategoryRow = ({
  categories,
  activeCategory,
  onSelect,
}: CategoryRowProps) => {
  return (
    <section aria-label="Categorías" className="overflow-x-auto border-b border-zinc-200 py-3">
      <div className="mx-auto flex w-full max-w-7xl gap-3 px-4" role="listbox" aria-label="Filtrar por categoría">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              role="option"
              aria-selected={isActive}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm shadow-sm ${
                isActive
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-300 bg-white text-zinc-700"
              }`}
            >
              <span aria-hidden="true" className="mr-2">
                {category.icon}
              </span>
              {category.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};
