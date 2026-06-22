import Link from "next/link";

interface TopNavProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
}

export const TopNav = ({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Empieza tu búsqueda",
}: TopNavProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3" aria-label="Navegación principal">
        <Link href="/" className="text-2xl font-bold text-rose-500" aria-label="Ir al inicio de Airbnb Clone">
          airbnb
        </Link>
        <label htmlFor="search" className="sr-only">
          Buscar alojamientos
        </label>
        <div className="flex flex-1 items-center rounded-full border border-zinc-300 px-4 py-2 shadow-sm">
          <span aria-hidden="true" className="mr-2 text-zinc-500">
            🔎
          </span>
          <input
            id="search"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder={searchPlaceholder}
            className="w-full bg-transparent text-sm outline-none"
            aria-label="Buscar por ciudad o nombre"
          />
        </div>
        <div className="flex items-center gap-2" aria-label="Menú de usuario">
          <Link href="/catalog" className="rounded-full bg-zinc-100 px-3 py-2 text-sm" aria-label="Ir al catálogo">
            Catálogo
          </Link>
          <button type="button" className="rounded-full bg-zinc-100 p-2" aria-label="Cambiar idioma">
            🌐
          </button>
          <button type="button" className="rounded-full bg-zinc-100 p-2" aria-label="Abrir menú">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};
