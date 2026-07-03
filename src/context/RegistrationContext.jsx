import { createContext, useContext, useEffect, useState } from "react";

const RegContext = createContext(null);
const STORAGE_KEY = "encore_registrations";
const AUTH_KEY = "encore_auth";

export function RegistrationProvider({ children }) {
  const [registrations, setRegistrations] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(AUTH_KEY)) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
  }, [registrations]);

  useEffect(() => {
    if (user) localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    else localStorage.removeItem(AUTH_KEY);
  }, [user]);

  function addRegistration(reg) {
    const record = {
      ...reg,
      id: `TKT-${Date.now().toString(36).toUpperCase()}`,
      status: "Confirmed",
      createdAt: new Date().toISOString(),
    };
    setRegistrations((prev) => [record, ...prev]);
    return record;
  }

  function cancelRegistration(id) {
    setRegistrations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Cancelled" } : r))
    );
  }

  function login(name, email) {
    setUser({ name, email });
  }

  function logout() {
    setUser(null);
  }

  return (
    <RegContext.Provider
      value={{ registrations, addRegistration, cancelRegistration, user, login, logout }}
    >
      {children}
    </RegContext.Provider>
  );
}

export function useRegistrations() {
  const ctx = useContext(RegContext);
  if (!ctx) throw new Error("useRegistrations must be used within RegistrationProvider");
  return ctx;
}
