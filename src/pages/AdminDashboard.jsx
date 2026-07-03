import { events } from "../data/events";
import { useRegistrations } from "../context/RegistrationContext";
import { CalendarCheck, DollarSign, Ticket, Users } from "lucide-react";

export default function AdminDashboard() {
  const { registrations } = useRegistrations();
  const active = registrations.filter((r) => r.status === "Confirmed");
  const revenue = active.reduce((sum, r) => sum + r.totalPrice, 0);
  const ticketsSold = active.reduce((sum, r) => sum + Number(r.tickets), 0);

  const cards = [
    { icon: Ticket, label: "Events listed", value: events.length },
    { icon: CalendarCheck, label: "Active registrations", value: active.length },
    { icon: DollarSign, label: "Revenue (local)", value: `$${revenue}` },
    { icon: Users, label: "Tickets sold", value: ticketsSold },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <span className="text-xs font-mono uppercase tracking-widest text-magenta">Admin</span>
      <h1 className="mt-2 font-display text-3xl font-semibold">Events dashboard</h1>
      <p className="mt-2 text-mist">Read-only overview built from the registrations stored in this browser.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-2xl border border-line dark:border-night-2 bg-white dark:bg-night-soft p-5">
            <c.icon size={18} className="text-magenta" />
            <p className="mt-3 font-display text-2xl font-bold">{c.value}</p>
            <p className="text-xs text-mist">{c.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-line dark:border-night-2 bg-white dark:bg-night-soft">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-line dark:border-night-2 text-xs uppercase tracking-wide text-mist">
              <th className="px-5 py-3">Ticket ID</th>
              <th className="px-5 py-3">Event</th>
              <th className="px-5 py-3">Attendee</th>
              <th className="px-5 py-3">Tickets</th>
              <th className="px-5 py-3">Total</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {registrations.length === 0 ? (
              <tr><td colSpan={6} className="px-5 py-8 text-center text-mist">No registrations recorded yet.</td></tr>
            ) : (
              registrations.map((r) => (
                <tr key={r.id} className="border-b border-line dark:border-night-2 last:border-0">
                  <td className="px-5 py-3 font-mono text-xs">{r.id}</td>
                  <td className="px-5 py-3">{r.eventTitle}</td>
                  <td className="px-5 py-3">{r.name}</td>
                  <td className="px-5 py-3">{r.tickets}</td>
                  <td className="px-5 py-3 font-mono">{r.totalPrice === 0 ? "Free" : `$${r.totalPrice}`}</td>
                  <td className="px-5 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      r.status === "Confirmed" ? "bg-emerald-500/10 text-emerald-600" : "bg-red-500/10 text-red-500"
                    }`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
