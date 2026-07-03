import { Link } from "react-router-dom";
import { ArrowRight, Ticket, MapPin, ShieldCheck } from "lucide-react";
import { events, categories } from "../data/events";
import EventCard from "../components/EventCard";

const stats = [
  { label: "Events listed", value: "320+" },
  { label: "Cities", value: "9" },
  { label: "Tickets booked", value: "48K" },
  { label: "Avg. rating", value: "4.8/5" },
];

export default function Home() {
  const featured = events.filter((e) => e.ticketsLeft > 0).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-night text-paper">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-magenta/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-paper/15 px-3 py-1 text-xs font-mono text-gold">
              New this week: 14 events added
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] md:text-6xl">
              Find the night
              <br />
              worth <span className="text-magenta">showing up</span> for.
            </h1>
            <p className="mt-6 max-w-md text-paper/70">
              Concerts, festivals, workshops, and seminars — browse what's on
              near you and reserve your seat before it's gone.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/events"
                className="flex items-center gap-2 rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-white hover:bg-magenta-dark transition-colors"
              >
                Browse events <ArrowRight size={16} />
              </Link>
              <Link to="/events" className="text-sm font-medium text-paper/70 hover:text-paper">
                See this week's picks
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-paper/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-gold">{s.value}</p>
                  <p className="mt-1 text-xs text-paper/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="ticket-notch ticket-divider absolute left-0 right-0 top-1/2 z-20 -translate-y-1/2" />
            <div className="relative z-10 w-full max-w-sm rotate-2 rounded-2xl bg-paper p-5 text-night shadow-2xl">
              <img
                src="https://loremflickr.com/700/420/concert,crowd?lock=200"
                alt="Featured event"
                className="aspect-[5/3] w-full rounded-xl object-cover"
              />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-semibold">Neon Nights Festival</p>
                  <p className="text-xs text-mist">Aug 14 · Riverside Amphitheatre</p>
                </div>
                <Ticket size={22} className="text-magenta" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-line dark:border-night-2 bg-white dark:bg-night-soft">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Secure checkout", copy: "Your registration is confirmed instantly." },
            { icon: Ticket, title: "Instant e-tickets", copy: "No printing — show your confirmation at the door." },
            { icon: MapPin, title: "9 cities covered", copy: "From intimate venues to full arenas." },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-magenta/10 text-magenta">
                <f.icon size={18} />
              </span>
              <div>
                <p className="font-display font-semibold">{f.title}</p>
                <p className="text-sm text-mist">{f.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category chips */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap gap-3">
          {categories.filter((c) => c !== "All").map((c) => (
            <Link
              key={c}
              to="/events"
              className="rounded-full border border-line dark:border-night-2 px-5 py-2 text-sm font-medium hover:border-magenta hover:text-magenta transition-colors"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured events */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-magenta">Featured</span>
            <h2 className="mt-2 font-display text-3xl font-semibold">Upcoming and almost sold out</h2>
          </div>
          <Link to="/events" className="hidden items-center gap-1 text-sm font-semibold text-magenta hover:underline md:flex">
            View all events <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white dark:bg-night-soft border-y border-line dark:border-night-2">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Your next event is one tap away.</h2>
          <p className="mx-auto mt-4 max-w-md text-mist">
            Free workshops, ticketed concerts, and everything in between — all in one place.
          </p>
          <Link
            to="/events"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-night px-7 py-3 text-sm font-semibold text-paper hover:bg-magenta transition-colors dark:bg-paper dark:text-night"
          >
            Browse events <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
