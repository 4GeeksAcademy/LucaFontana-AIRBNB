"use client";

import { useState } from "react";

interface PhotoGalleryProps {
  photos: string[];
  title: string;
}

export const PhotoGallery = ({ photos, title }: PhotoGalleryProps) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const total = photos.length;

  const goPrevious = () => setActivePhotoIndex((value) => (value - 1 + total) % total);
  const goNext = () => setActivePhotoIndex((value) => (value + 1) % total);

  return (
    <section aria-label="Galería de fotos" className="space-y-3">
      <div className="relative h-64 rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-300 p-4 md:h-96">
        <p className="font-medium text-zinc-700">{title}</p>
        <p className="mt-2 text-sm text-zinc-600">{photos[activePhotoIndex]}</p>
        <div className="absolute bottom-4 left-4 flex gap-2">
          <button type="button" onClick={goPrevious} className="rounded-full bg-white px-4 py-2 text-sm" aria-label="Foto anterior">
            Anterior
          </button>
          <button type="button" onClick={goNext} className="rounded-full bg-white px-4 py-2 text-sm" aria-label="Foto siguiente">
            Siguiente
          </button>
        </div>
      </div>
      <p className="text-sm text-zinc-600" aria-live="polite">
        Foto {activePhotoIndex + 1} de {total}
      </p>
    </section>
  );
};
