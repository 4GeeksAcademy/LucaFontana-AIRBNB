"use client";

import { useState } from "react";

interface ReservationCardProps {
  pricePerNight: number;
}

export const ReservationCard = ({ pricePerNight }: ReservationCardProps) => {
  const [guests, setGuests] = useState(1);
  const minGuests = 1;
  const maxGuests = 8;

  const decrease = () => setGuests((value) => Math.max(minGuests, value - 1));
  const increase = () => setGuests((value) => Math.min(maxGuests, value + 1));

  return (
    <aside className="space-y-4 rounded-2xl border border-zinc-200 p-4 shadow-sm md:sticky md:top-24" aria-label="Tarjeta de reserva">
      <p className="text-xl font-semibold text-zinc-900">
        €{pricePerNight} <span className="text-sm font-normal text-zinc-600">por noche</span>
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-700">Huéspedes</span>
        <div className="flex items-center gap-2" aria-live="polite">
          <button type="button" onClick={decrease} className="rounded-full border border-zinc-300 px-3 py-1" aria-label="Reducir huéspedes">
            -
          </button>
          <span className="w-6 text-center">{guests}</span>
          <button type="button" onClick={increase} className="rounded-full border border-zinc-300 px-3 py-1" aria-label="Aumentar huéspedes">
            +
          </button>
        </div>
      </div>
      <button type="button" className="w-full rounded-xl bg-rose-500 px-4 py-3 font-semibold text-white" aria-label="Reservar ahora">
        Reservar
      </button>
    </aside>
  );
};
