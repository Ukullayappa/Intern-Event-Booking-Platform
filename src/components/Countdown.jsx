import { useEffect, useState } from "react";

function getTimeLeft(target) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ targetDate }) {
  const [left, setLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!left) {
    return <p className="font-display text-sm font-semibold text-magenta">Happening now / past</p>;
  }

  const units = [
    { label: "Days", value: left.days },
    { label: "Hrs", value: left.hours },
    { label: "Min", value: left.minutes },
    { label: "Sec", value: left.seconds },
  ];

  return (
    <div className="flex gap-3">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center rounded-xl bg-night/5 dark:bg-paper/10 px-3 py-2 min-w-[56px]">
          <span className="font-mono text-xl font-bold text-magenta">{String(u.value).padStart(2, "0")}</span>
          <span className="text-[10px] uppercase tracking-wide text-mist">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
