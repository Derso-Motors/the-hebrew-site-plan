import { AlertTriangle } from "lucide-react";
import { Reveal } from "./Reveal";

const notes = [
  { text: "אין לך זמן לצלם, לערוך ולכתוב פוסטים.", pos: "lg:absolute lg:top-0 lg:right-0 lg:w-72" },
  {
    text: "איש סושיאל עולה 1,000–4,000 ₪ בחודש — ולא תמיד מפרסם.",
    pos: "lg:absolute lg:top-1/3 lg:left-0 lg:w-80",
  },
  {
    text: "מפרסמים שבוע, נעלמים חודש. האלגוריתם מעניש חוסר עקביות.",
    pos: "lg:absolute lg:bottom-8 lg:right-6 lg:w-80",
  },
  {
    text: "לקוחות כותבים בוואטסאפ בלילה — ולא מקבלים מענה.",
    pos: "lg:absolute lg:bottom-24 lg:left-4 lg:w-72",
  },
  { text: "המתחרים שלך כבר שם, כל יום.", pos: "lg:absolute lg:top-10 lg:left-1/4 lg:w-64" },
];

export function PainSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-36">
      <Reveal className="text-center">
        <span className="label-mono">/הבעיה</span>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
          העסק שלך מעולה.
          <br />
          פשוט אף אחד לא רואה אותו.
        </h2>
      </Reveal>

      <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:block lg:h-[420px]">
        {notes.map((note, i) => (
          <Reveal
            key={note.text}
            variant="pop"
            delay={i * 140}
            className={`card-soft flex items-start gap-3 p-4 text-right ${note.pos}`}
          >
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" strokeWidth={1.5} />
            <p className="text-sm leading-relaxed text-muted-foreground">{note.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FlipSection() {
  const lines = ["בלי לכתוב.", "בלי לעצב.", "בלי לתזמן."];
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:py-32">
      <Reveal>
        <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl">
          דרסו סושיאל עושה את כל זה בשבילך.
          <br />
          כל יום. אוטומטית.
        </h2>
      </Reveal>
      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
        {lines.map((line, i) => (
          <Reveal key={line} delay={200 + i * 160}>
            <span className="text-lg font-semibold text-primary sm:text-xl">{line}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
