import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { useRegistrations } from "../context/RegistrationContext";
import { isValidEmail } from "../utils/validators";

export default function Signup() {
  const { login } = useRegistrations();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) return setError("Enter your full name.");
    if (!isValidEmail(form.email)) return setError("Enter a valid email address.");
    if (form.password.length < 4) return setError("Password must be at least 4 characters.");
    login(form.name.trim(), form.email);
    navigate("/");
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <div className="mb-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-magenta/10 text-magenta">
          <UserPlus size={20} />
        </span>
        <h1 className="mt-4 font-display text-2xl font-semibold">Create your account</h1>
        <p className="mt-1 text-sm text-mist">Register faster and track tickets in one place.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-2xl border border-line dark:border-night-2 bg-white dark:bg-night-soft p-6">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-mist">Full name</span>
          <input className="input" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Jordan Lee" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-mist">Email</span>
          <input type="email" className="input" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="you@example.com" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-mist">Password</span>
          <input type="password" className="input" value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} placeholder="••••••••" />
        </label>
        {error && <p className="text-xs text-red-500">{error}</p>}
        <button type="submit" className="w-full rounded-full bg-magenta py-3 text-sm font-semibold text-white hover:bg-magenta-dark">
          Create account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-mist">
        Already have an account? <Link to="/login" className="font-medium text-magenta hover:underline">Sign in</Link>
      </p>
    </div>
  );
}
