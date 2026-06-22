"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TopNav } from "@/components/layout/TopNav";
import { ACCOMMODATIONS } from "@/components/shared/mockData";
import { PhotoGallery } from "@/components/room/PhotoGallery";
import { RoomHeader } from "@/components/room/RoomHeader";
import { HostInfo } from "@/components/room/HostInfo";
import { AmenitiesGrid } from "@/components/room/AmenitiesGrid";
import { ReservationCard } from "@/components/room/ReservationCard";
import type { Room } from "@/types";

export default function RoomDetailPage() {
  const params = useParams<{ id: string }>();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = ACCOMMODATIONS.find((item) => item.id === params.id) ?? null;
      setRoom(found);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [params.id]);

  const jsonLd = room
    ? {
        "@context": "https://schema.org",
        "@type": "Accommodation",
        name: room.title,
        aggregateRating: { "@type": "AggregateRating", ratingValue: room.rating, reviewCount: room.reviewCount },
        geo: { "@type": "GeoCoordinates", latitude: room.coordinates.lat, longitude: room.coordinates.lng },
      }
    : null;

  return (
    <div className="min-h-screen bg-zinc-50">
      <TopNav searchValue={search} onSearchChange={setSearch} />
      <main className="mx-auto w-full max-w-7xl px-4 py-6" aria-busy={loading}>
        <Link href="/catalog" className="mb-4 inline-flex rounded-full border border-zinc-300 px-4 py-2 text-sm" aria-label="Volver al catálogo">
          ← Volver al catálogo
        </Link>
        {loading && <p className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-700">Cargando detalle...</p>}
        {!loading && !room && <p className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-700">No se encontró la habitación.</p>}
        {!loading && room && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
            <section className="space-y-6">
              <PhotoGallery photos={room.photos} title={room.title} />
              <RoomHeader room={room} />
              <HostInfo room={room} />
              <AmenitiesGrid amenities={room.amenities} />
            </section>
            <ReservationCard pricePerNight={room.pricePerNight} />
          </div>
        )}
        {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      </main>
    </div>
  );
}
