import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CheckCircle2, Minus, Plus } from "lucide-react";
import { events } from "../data/events";
import { useRegistrations } from "../context/RegistrationContext";
import { isValidEmail, isValidPhone } from "../utils/validators";

export default function Registration() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);
  const { addRegistration, user } = useRegistrations();

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    tickets: 1,
  });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);

  if (!event) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-2xl font-semibold">Event not found</h1>
        <Link to="/events" className="mt-6 inline-block text-magenta hover:underline">Back to events</Link>
      </div>
    );
  }

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function adjustTickets(delta) {
    setForm((f) => ({ ...f, tickets: Math.min(event.ticketsLeft, Math.max(1, f.tickets + delta)) }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your full name.";
    if (!isValidEmail(form.email)) e.email = "Enter a valid email address.";
    if (!isValidPhone(form.phone)) e.phone = "Enter a valid phone number.";
    if (!form.tickets || form.tickets < 1) e.tickets = "Select at least 1 ticket.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!validate()) return;

    const record = addRegistration({
      eventId: event.id,
      eventTitle: event.title,
      eventImage: event.image,
      eventDate: event.date,
      eventTime: event.time,
      venue: event.venue,
      pricePerTicket: event.price,
      totalPrice: event.price * form.tickets,
      ...form,
    });

    setConfirmed(record);
  }

  if (confirmed) {
    return (
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <CheckCircle2 size={48} className="mx-auto text-emerald-500" />
        <h1 className="mt-5 font-display text-2xl font-semibold">You're registered</h1>
        <p className="mt-2 text-mist">
          Confirmation <span className="font-mono text-night dark:text-paper">{confirmed.id}</span> has
          been saved to your tickets.
        </p>
        <div className="mt-8 rounded-2xl border border-line dark:border-night-2 bg-white dark:bg-night-soft p-6 text-left">
          <div className="flex items-center gap-4">
            <img src={confirmed.eventImage} alt="" className="h-16 w-24 rounded-lg object-cover" />
            <div>
              <p className="font-display font-semibold">{confirmed.eventTitle}</p>
              <p className="text-sm text-mist">{confirmed.eventDate} · {confirmed.eventTime}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-line dark:border-night-2 pt-4 text-sm">
            <span className="text-mist">{confirmed.tickets} ticket(s)</span>
            <span className="font-mono font-semibold">
              {confirmed.totalPrice === 0 ? "Free" : `$${confirmed.totalPrice}`}
            </span>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/my-tickets" className="rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-white">
            View my tickets
          </Link>
          <Link to="/events" className="rounded-full border border-line dark:border-night-2 px-6 py-3 text-sm font-semibold">
            Browse more
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <span className="text-xs font-mono uppercase tracking-widest text-magenta">Registration</span>
      <h1 className="mt-2 font-display text-3xl font-semibold">Register for {event.title}</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-line dark:border-night-2 bg-white dark:bg-night-soft p-6">
          <Field label="Full name" error={errors.name}>
            <input value={form.name} onChange={(e) => update("name", e.target.value)} className="input" placeholder="Jordan Lee" />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Email" error={errors.email}>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input" placeholder="you@example.com" />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input" placeholder="+1 555 010 2938" />
            </Field>
          </div>

          <Field label="Number of tickets" error={errors.tickets}>
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => adjustTickets(-1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-night-2 hover:border-magenta">
                <Minus size={14} />
              </button>
              <span className="w-8 text-center font-mono text-lg">{form.tickets}</span>
              <button type="button" onClick={() => adjustTickets(1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-night-2 hover:border-magenta">
                <Plus size={14} />
              </button>
              <span className="text-xs text-mist">{event.ticketsLeft} available</span>
            </div>
          </Field>

          <button type="submit" className="w-full rounded-full bg-magenta py-3 text-sm font-semibold text-white hover:bg-magenta-dark transition-colors">
            Confirm registration
          </button>
        </form>

        <aside className="h-fit rounded-2xl border border-line dark:border-night-2 bg-white dark:bg-night-soft p-6">
          <img src={event.image} alt="" className="aspect-[16/10] w-full rounded-xl object-cover" />
          <h3 className="mt-4 font-display font-semibold">{event.title}</h3>
          <p className="mt-1 text-sm text-mist">{event.venue}, {event.city}</p>
          <div className="mt-4 flex items-center justify-between border-t border-line dark:border-night-2 pt-4">
            <span className="text-sm text-mist">{form.tickets} × {event.price === 0 ? "Free" : `$${event.price}`}</span>
            <span className="font-mono font-semibold">
              {event.price === 0 ? "Free" : `$${event.price * form.tickets}`}
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-mist">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
