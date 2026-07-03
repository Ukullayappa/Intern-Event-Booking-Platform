import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Moon, Sun, Ticket } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useRegistrations } from "../context/RegistrationContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/my-tickets", label: "My Tickets" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();
  const { user, logout } = useRegistrations();

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors ${
      isActive
        ? "text-magenta"
        : "text-night/70 dark:text-paper/70 hover:text-night dark:hover:text-paper"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line dark:border-night-2 bg-paper/90 dark:bg-night/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-night dark:bg-paper">
            <Ticket size={18} className="text-gold" />
          </span>
          <span>Enc<span className="text-magenta">ore</span></span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-mist">Hi, {user.name.split(" ")[0]}</span>
              <button onClick={logout} className="text-sm font-medium text-magenta hover:underline">
                Sign out
              </button>
            </div>
          ) : (
            <NavLink to="/login" className={linkClass}>Sign in</NavLink>
          )}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-night-2 hover:border-magenta transition-colors"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <NavLink
            to="/events"
            className="rounded-full bg-magenta px-5 py-2 text-sm font-semibold text-white hover:bg-magenta-dark transition-colors"
          >
            Find events
          </NavLink>
        </div>

        <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line dark:border-night-2 bg-paper dark:bg-night px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
            {user ? (
              <button onClick={() => { logout(); setOpen(false); }} className="text-left text-sm font-medium text-magenta">
                Sign out ({user.name.split(" ")[0]})
              </button>
            ) : (
              <NavLink to="/login" className={linkClass} onClick={() => setOpen(false)}>Sign in</NavLink>
            )}
            <div className="flex items-center justify-between pt-2">
              <button onClick={toggle} className="flex items-center gap-2 text-sm">
                {dark ? <Sun size={16} /> : <Moon size={16} />} Toggle theme
              </button>
              <NavLink to="/events" className="rounded-full bg-magenta px-4 py-2 text-sm font-semibold text-white" onClick={() => setOpen(false)}>
                Find events
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
