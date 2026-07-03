import { useMemo, useState } from "react";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import SearchFilter from "../components/SearchFilter";
import { SearchX } from "lucide-react";

export default function Events() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const results = useMemo(() => {
    let list = events.filter((e) => {
      const matchesQuery = e.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || e.category === category;
      return matchesQuery && matchesCategory;
    });

    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "default") list = [...list].sort((a, b) => new Date(a.date) - new Date(b.date));

    return list;
  }, [query, category, sortBy]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-magenta">Events</span>
        <h1 className="mt-2 font-display text-3xl font-semibold md:text-4xl">What's on</h1>
        <p className="mt-2 max-w-lg text-mist">
          {events.filter((e) => e.ticketsLeft > 0).length} events open for registration right now.
        </p>
      </div>

      <SearchFilter
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {results.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-center text-mist">
          <SearchX size={32} />
          <p className="font-display text-lg font-semibold text-night dark:text-paper">No events match that search</p>
          <p className="text-sm">Try a different keyword or clear the category filter.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
