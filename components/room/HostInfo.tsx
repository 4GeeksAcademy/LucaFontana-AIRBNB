import type { Room } from "@/types";

interface HostInfoProps {
  room: Room;
}

export const HostInfo = ({ room }: HostInfoProps) => {
  return (
    <section aria-label="Información del anfitrión" className="rounded-2xl border border-zinc-200 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200" aria-label={room.host.avatarLabel}>
          👤
        </div>
        <div>
          <p className="font-semibold text-zinc-900">Anfitrión: {room.host.name}</p>
          <p className="text-sm text-zinc-600">{room.host.yearsHosting} años como anfitrión</p>
        </div>
      </div>
    </section>
  );
};
