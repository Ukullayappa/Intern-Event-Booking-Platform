import { Link } from "react-router-dom";
import { CalendarX2, PackageOpen } from "lucide-react";
import { useRegistrations } from "../context/RegistrationContext";

export default function MyTickets() {
  const { registrations, cancelRegistration } = useRegistrations();

  if (registrations.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-6 py-24 text-center">
        <PackageOpen size={40} className="mx-auto text-mist" />
        <h1 className="mt-4 font-display text-2xl font-semibold">No tickets yet</h1>
        <p className="mt-2 text-mist">Register for an event and it will show up here.</p>
        <Link to="/events" className="mt-6 inline-block rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-white">
          Browse events
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <span className="text-xs font-mono uppercase tracking-widest text-magenta">Account</span>
      <h1 className="mt-2 font-display text-3xl font-semibold">My tickets</h1>

      <div className="mt-8 space-y-4">
        {registrations.map((r) => (
          <div key={r.id} className="flex flex-col gap-4 rounded-2xl border border-line dark:border-night-2 bg-white dark:bg-night-soft p-5 sm:flex-row sm:items-center">
            <img src={r.eventImage} alt="" className="h-20 w-28 rounded-lg object-cover" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-display font-semibold">{r.eventTitle}</h3>
                <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                  r.status === "Confirmed" ? "bg-emerald-500/10 text-emerald-600" : "bg-red-500/10 text-red-500"
                }`}>
                  {r.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-mist">{r.eventDate} · {r.eventTime} · {r.venue}</p>
              <p className="mt-1 font-mono text-sm">
                {r.tickets} ticket(s) · {r.totalPrice === 0 ? "Free" : `$${r.totalPrice}`} · {r.id}
              </p>
            </div>
            {r.status === "Confirmed" && (
              <button
                onClick={() => cancelRegistration(r.id)}
                className="flex items-center gap-1.5 self-start rounded-full border border-line dark:border-night-2 px-4 py-2 text-xs font-semibold text-mist hover:border-red-400 hover:text-red-500"
              >
                <CalendarX2 size={14} /> Cancel
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
