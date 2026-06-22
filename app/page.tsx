"use client";

import { useEffect, useState } from "react";
import { TopNav } from "@/components/layout/TopNav";
import { CategoryRow } from "@/components/home/CategoryRow";
import { AccommodationCard } from "@/components/shared/AccommodationCard";
import { AccommodationCardSkeleton } from "@/components/shared/AccommodationCardSkeleton";
import { ACCOMMODATIONS, CATEGORIES } from "@/components/shared/mockData";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [stays, setStays] = useState<typeof ACCOMMODATIONS>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStays(ACCOMMODATIONS);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const visibleStays = stays.filter((stay) => {
    const matchCategory = activeCategory === "all" || stay.category === activeCategory;
    const query = search.toLowerCase();
    const matchSearch = `${stay.title} ${stay.city}`.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-50">
      <TopNav searchValue={search} onSearchChange={setSearch} />
      <CategoryRow categories={CATEGORIES} activeCategory={activeCategory} onSelect={setActiveCategory} />
      <main className="mx-auto w-full max-w-7xl px-4 py-6" aria-busy={loading}>
        <h1 className="text-3xl font-bold text-zinc-900">Alojamientos populares</h1>
        <section className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3" aria-live="polite">
          {loading && [1, 2, 3, 4, 5, 6].map((item) => <AccommodationCardSkeleton key={item} />)}
          {!loading && visibleStays.map((stay) => <AccommodationCard key={stay.id} accommodation={stay} />)}
        </section>
        {!loading && visibleStays.length === 0 && (
          <p className="mt-6 rounded-xl border border-zinc-200 bg-white p-4 text-zinc-700">
            No hay resultados para la búsqueda actual.
          </p>
        )}
      </main>
    </div>
  );
}
