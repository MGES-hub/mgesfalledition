import { useEffect, useState } from "react";

const TARGET = new Date("2026-02-21T09:00:00+01:00").getTime();

function diff() {
  const d = TARGET - Date.now();
  if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown({ compact = false }: { compact?: boolean }) {
  const [t, setT] = useState(diff);
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", value: t.days },
    { label: "Hrs", value: t.hours },
    { label: "Min", value: t.minutes },
    { label: "Sec", value: t.seconds },
  ];

  return (
    <div className={compact ? "flex items-center gap-3" : "flex items-center gap-4"}>
      <div className="eyebrow">Convenes in</div>
      <div className="flex items-center gap-1.5 font-mono">
        {items.map((it, i) => (
          <div key={it.label} className="flex items-center gap-1.5">
            <div className="flex flex-col items-center">
              <span className="text-base tabular-nums font-medium text-foreground">
                {String(it.value).padStart(2, "0")}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
                {it.label}
              </span>
            </div>
            {i < items.length - 1 && <span className="text-muted-foreground/40">·</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
