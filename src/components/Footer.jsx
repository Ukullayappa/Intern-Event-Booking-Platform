import { NavLink } from "react-router-dom";
import { Ticket, Globe, Send, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-night-2 bg-night text-paper">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-paper/10">
                <Ticket size={16} className="text-gold" />
              </span>
              Enc<span className="text-magenta">ore</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-paper/60">
              Discover concerts, festivals, workshops, and seminars near you —
              book a seat in a couple of taps.
            </p>
            <div className="mt-5 flex gap-3">
              {[Globe, Send, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-paper/50">Navigate</h4>
            <ul className="mt-4 space-y-3 text-sm text-paper/70">
              <li><NavLink to="/" className="hover:text-gold">Home</NavLink></li>
              <li><NavLink to="/events" className="hover:text-gold">Browse events</NavLink></li>
              <li><NavLink to="/my-tickets" className="hover:text-gold">My tickets</NavLink></li>
              <li><NavLink to="/login" className="hover:text-gold">Sign in</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-paper/50">Categories</h4>
            <ul className="mt-4 space-y-3 text-sm text-paper/70">
              <li>Concerts</li>
              <li>Festivals</li>
              <li>Workshops</li>
              <li>Seminars</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-paper/50">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-paper/70">
              <li>hello@encore.example</li>
              <li>+1 (555) 020-4471</li>
              <li>88 Festival Ave, Metro City</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/40 md:flex-row">
          <p>© {new Date().getFullYear()} Encore. Built for the Sqrock IT Solutions internship program.</p>
          <p>Demo project — not a real ticketing service.</p>
        </div>
      </div>
    </footer>
  );
}
