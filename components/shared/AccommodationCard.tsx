import Link from "next/link";
import type { Accommodation } from "@/types";

interface AccommodationCardProps {
  accommodation: Accommodation;
}

export const AccommodationCard = ({ accommodation }: AccommodationCardProps) => {
  return (
    <article
      className="space-y-3"
      itemScope
      itemType="https://schema.org/Accommodation"
      aria-label={`Alojamiento ${accommodation.title}`}
    >
      <Link href={`/rooms/${accommodation.id}`} className="block focus:outline-none" aria-label={`Ver detalle de ${accommodation.title}`}>
        <div className="relative h-44 rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-300 p-3">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700">
            Favorito entre huéspedes
          </span>
          <button
            type="button"
            aria-label="Guardar en favoritos"
            className="absolute right-3 top-3 rounded-full bg-white/80 p-1"
          >
            ♡
          </button>
          <p className="sr-only" itemProp="image">
            {accommodation.imageLabel}
          </p>
        </div>
      </Link>
      <div className="space-y-1">
        <h3 itemProp="name" className="font-semibold text-zinc-900">
          {accommodation.title}
        </h3>
        <p className="text-sm text-zinc-600" itemProp="address">
          {accommodation.city}, {accommodation.country}
        </p>
        <p className="text-sm text-zinc-700">
          <span itemProp="priceCurrency" content="EUR">€</span>
          <span itemProp="price">{accommodation.pricePerNight}</span> por noche
        </p>
        <p className="text-sm text-zinc-700" aria-label={`Valoración ${accommodation.rating}`}>
          ★ {accommodation.rating} · {accommodation.reviewCount} reseñas
        </p>
      </div>
    </article>
  );
};
