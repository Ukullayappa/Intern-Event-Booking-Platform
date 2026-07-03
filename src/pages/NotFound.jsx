import { Link } from "react-router-dom";
import { TicketX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-6 text-center">
      <TicketX size={40} className="text-mist" />
      <h1 className="mt-4 font-display text-3xl font-semibold">Event not found</h1>
      <p className="mt-2 text-mist">This page doesn't exist, or the event has ended.</p>
      <Link to="/" className="mt-6 rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-white">
        Back to home
      </Link>
    </div>
  );
}
