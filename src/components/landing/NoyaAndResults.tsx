import { useEffect, useState } from "react";
import { MonoLabel } from "./MonoLabel";
import { Reveal, useInView } from "./Reveal";

const chat = [
  { from: "client", time: "23:47", text: "היי, אפשר לקבוע תור למחר?" },
  { from: "noya", time: "23:47", text: "בטח! פנוי מחר ב-10:00 או ב-13:30. מה מתאים?" },
  { from: "client", time: "23:48", text: "10:00" },
  { from: "noya", time: "23:48", text: "נקבע. שלחתי אישור ותזכורת ביומן." },
];

export function NoyaSection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timers = chat.map((_, i) => window.setTimeout(() => setShown(i + 1), 500 + i * 900));
    return () => timers.forEach(window.clearTimeout);
  }, [inView]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-1 text-right">
          <MonoLabel>נויה</MonoLabel>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            והלקוחות שכותבים בלילה? נויה כבר ענתה.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            נויה היא מזכירה חכמה לוואטסאפ שעונה ללקוחות שלכם 24/7 — קובעת פגישות, מקבלת הזמנות
            ומנהלת את היומן של העסק, לבד.
          </p>
        </Reveal>

        <div ref={ref} className="order-2">
          <div className="card-soft mx-auto max-w-sm overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-xs font-bold text-success">
                נו
              </span>
              <div className="text-right">
                <p className="text-sm font-bold leading-tight">נויה</p>
                <p className="text-[11px] leading-tight text-success">מקוונת</p>
              </div>
            </div>
            <div className="space-y-3 p-5">
              {chat.map((msg, i) => (
                <div
                  key={msg.text}
                  className={`flex ${msg.from === "noya" ? "justify-start" : "justify-end"}`}
                  style={{
                    opacity: i < shown ? 1 : 0,
                    transform: i < shown ? "none" : "translateY(10px)",
                    transition: "opacity 350ms ease, transform 350ms ease",
                  }}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === "noya"
                        ? "bg-success/10 text-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {msg.text}
                    <span className="mt-1 block text-[10px] text-muted-foreground">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">בזמן שאתה ישן.</p>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "150", text: "פוסטים בחודש. נסה לעשות את זה לבד.", count: 150 },
  { value: "4 רשתות", text: "בכל חבילה, מהשקל הראשון", count: 4, suffix: " רשתות" },
  { value: "06:30", text: "השעה שבה התוכן שלך כבר מתוזמן" },
  { value: "24/7", text: "מענה ללקוחות עם נויה" },
];

function Counter({ stat }: { stat: (typeof stats)[number] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !stat.count) return;
    let frame = 0;
    const total = 40;
    const id = window.setInterval(() => {
      frame += 1;
      setN(Math.round((stat.count as number) * (frame / total)));
      if (frame >= total) window.clearInterval(id);
    }, 20);
    return () => window.clearInterval(id);
  }, [inView, stat.count]);

  const display = stat.count ? `${stat.prefix ?? ""}${n}${stat.suffix ?? ""}` : stat.value;

  return (
    <div ref={ref} className="card-soft p-7 text-center">
      <p className="text-4xl font-extrabold tracking-tight sm:text-5xl">{display}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.text}</p>
    </div>
  );
}

export function ResultsStrip() {
  return (
    <section id="results" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.text} variant="pop" delay={i * 90}>
            <Counter stat={stat} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
