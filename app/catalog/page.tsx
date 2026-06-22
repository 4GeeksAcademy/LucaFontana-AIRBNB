"use client";

import { useState } from "react";
import { TopNav } from "@/components/layout/TopNav";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { MapPlaceholder } from "@/components/catalog/MapPlaceholder";
import { AccommodationCard } from "@/components/shared/AccommodationCard";
import { ACCOMMODATIONS } from "@/components/shared/mockData";
import type { SortOrder } from "@/types";

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const filtered = ACCOMMODATIONS.filter((stay) => {
    return `${stay.title} ${stay.city}`.toLowerCase().includes(search.toLowerCase());
  });
  const orderedStays = [...filtered].sort((a, b) => {
    return sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight;
  });

  return (
    <div className="min-h-screen bg-zinc-50">
      <TopNav searchValue={search} onSearchChange={setSearch} searchPlaceholder="Explora destinos" />
      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <section className="space-y-5" aria-label="Catálogo de alojamientos">
          <CatalogHeader total={orderedStays.length} sortOrder={sortOrder} onSortChange={setSortOrder} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {orderedStays.map((stay) => (
              <AccommodationCard key={stay.id} accommodation={stay} />
            ))}
          </div>
        </section>
        <MapPlaceholder />
      </main>
    </div>
  );
}
