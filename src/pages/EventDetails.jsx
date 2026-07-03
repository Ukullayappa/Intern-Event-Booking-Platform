import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, User, Users, Ticket } from "lucide-react";
import { events } from "../data/events";
import Countdown from "../components/Countdown";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-semibold">Event not found</h1>
        <Link to="/events" className="mt-6 inline-block text-magenta hover:underline">Back to events</Link>
      </div>
    );
  }

  const soldOut = event.ticketsLeft === 0;
  const targetDate = `${event.date}T${to24h(event.time)}`;

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <button onClick={() => navigate(-1)} className="mb-6 flex items-center gap-2 text-sm font-medium text-mist hover:text-magenta">
        <ArrowLeft size={16} /> Back
      </button>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-line dark:border-night-2">
            <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {event.gallery.map((img) => (
              <div key={img} className="aspect-[16/10] overflow-hidden rounded-xl">
                <img src={img} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-line dark:border-night-2 bg-white dark:bg-night-soft p-6">
            <h3 className="font-display text-lg font-semibold">Schedule</h3>
            <ul className="mt-4 space-y-3">
              {event.schedule.map((s) => (
                <li key={s.time} className="flex gap-4 text-sm">
                  <span className="w-20 shrink-0 font-mono text-magenta">{s.time}</span>
                  <span className="text-mist">{s.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <span className="rounded-full bg-magenta/10 px-3 py-1 text-xs font-mono text-magenta">{event.category}</span>
          <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{event.title}</h1>

          <div className="mt-4 flex flex-wrap gap-5 text-sm text-mist">
            <span className="flex items-center gap-1.5"><MapPin size={15} /> {event.venue}, {event.city}</span>
            <span className="flex items-center gap-1.5"><User size={15} /> {event.organizer}</span>
            <span className="flex items-center gap-1.5"><Users size={15} /> {event.ticketsLeft} of {event.capacity} left</span>
          </div>

          <p className="mt-5 leading-relaxed text-mist">{event.description}</p>

          <div className="mt-8">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-mist">Countdown</p>
            <Countdown targetDate={targetDate} />
          </div>

          <div className="mt-10 flex items-center justify-between rounded-2xl border border-line dark:border-night-2 bg-white dark:bg-night-soft p-6">
            <div>
              <span className="font-mono text-3xl font-bold">
                {event.price === 0 ? "Free" : `$${event.price}`}
              </span>
              <span className="text-sm text-mist"> / ticket</span>
            </div>
            {soldOut ? (
              <span className="rounded-full bg-line dark:bg-night-2 px-6 py-3 text-sm font-semibold text-mist">
                Sold out
              </span>
            ) : (
              <Link
                to={`/register/${event.id}`}
                className="flex items-center gap-2 rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-white hover:bg-magenta-dark transition-colors"
              >
                <Ticket size={16} /> Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function to24h(timeStr) {
  const [time, meridian] = timeStr.split(" ");
  let [h, m] = time.split(":").map(Number);
  if (meridian === "PM" && h !== 12) h += 12;
  if (meridian === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`;
}
