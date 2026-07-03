import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import { useRegistrations } from "../context/RegistrationContext";
import { isValidEmail } from "../utils/validators";

export default function Login() {
  const { login } = useRegistrations();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidEmail(form.email)) return setError("Enter a valid email address.");
    if (form.password.length < 4) return setError("Password must be at least 4 characters.");
    const name = form.email.split("@")[0].replace(/[._]/g, " ");
    login(name.replace(/\b\w/g, (c) => c.toUpperCase()), form.email);
    navigate("/");
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <div className="mb-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-magenta/10 text-magenta">
          <LogIn size={20} />
        </span>
        <h1 className="mt-4 font-display text-2xl font-semibold">Welcome back</h1>
        <p className="mt-1 text-sm text-mist">Sign in to manage your tickets faster.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-2xl border border-line dark:border-night-2 bg-white dark:bg-night-soft p-6">
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
          Sign in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-mist">
        New here? <Link to="/signup" className="font-medium text-magenta hover:underline">Create an account</Link>
      </p>
      <p className="mt-2 text-center text-xs text-mist/70">Demo auth — no real credentials are stored remotely.</p>
    </div>
  );
}
