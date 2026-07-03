import { Link } from "react-router-dom";
import { MapPin, CalendarDays } from "lucide-react";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function EventCard({ event }) {
  const soldOut = event.ticketsLeft === 0;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-line dark:border-night-2 bg-white dark:bg-night-soft shadow-sm transition-shadow hover:shadow-xl hover:shadow-night/5">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={event.image} alt={event.title} loading="lazy" className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-night/80 px-3 py-1 text-xs font-mono text-paper backdrop-blur">
          {event.category}
        </span>
        {soldOut && (
          <span className="absolute right-3 top-3 rounded-full bg-red-600/90 px-3 py-1 text-xs font-semibold text-white">
            Sold out
          </span>
        )}
      </div>

      {/* ticket stub divider with notch cutouts */}
      <div className="ticket-notch ticket-divider mx-0" />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug">{event.title}</h3>
          <div className="shrink-0 rounded-lg bg-gold/15 px-2.5 py-1 text-center">
            <p className="font-mono text-xs font-bold text-night dark:text-gold">{formatDate(event.date)}</p>
          </div>
        </div>

        <div className="mt-3 space-y-1.5 text-xs text-mist">
          <p className="flex items-center gap-1.5"><CalendarDays size={13} /> {event.time}</p>
          <p className="flex items-center gap-1.5"><MapPin size={13} /> {event.venue}, {event.city}</p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-line dark:border-night-2 pt-4">
          <div>
            <span className="font-mono text-lg font-bold">
              {event.price === 0 ? "Free" : `$${event.price}`}
            </span>
          </div>
          <Link
            to={`/events/${event.id}`}
            className="rounded-full bg-night px-4 py-2 text-xs font-semibold text-paper transition-colors hover:bg-magenta dark:bg-paper dark:text-night dark:hover:bg-magenta dark:hover:text-white"
          >
            View event
          </Link>
        </div>
      </div>
    </div>
  );
}
