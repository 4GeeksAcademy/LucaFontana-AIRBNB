import type { Room } from "@/types";

interface RoomHeaderProps {
  room: Room;
}

export const RoomHeader = ({ room }: RoomHeaderProps) => {
  return (
    <header className="space-y-2" itemScope itemType="https://schema.org/Accommodation">
      <h1 className="text-2xl font-bold text-zinc-900" itemProp="name">
        {room.title}
      </h1>
      <p className="text-sm text-zinc-700" aria-label={`Valoración ${room.rating}`}>
        ★ {room.rating} · {room.reviewCount} reseñas
      </p>
      <p className="text-sm text-zinc-600" itemProp="address">
        {room.city}, {room.country}
      </p>
      <p className="text-sm text-zinc-600" aria-label="Coordenadas geográficas">
        GEO: {room.coordinates.lat}, {room.coordinates.lng}
      </p>
    </header>
  );
};
