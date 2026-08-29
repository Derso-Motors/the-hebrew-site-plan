import { useEffect, useState } from "react";
import { Star, Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "שרון לוי",
    role: "סוכנות ביטוח, ראשון לציון",
    quote:
      "עברתי מ-200 צפיות בחודש ל-25,000. לקוחות מגיעים אליי מהפוסטים בלי שנגעתי בכלום.",
  },
  {
    name: "אבי מזרחי",
    role: "מוסך, חיפה",
    quote:
      "שילמתי 2,500 ש״ח לאיש סושיאל שפרסם פעמיים בשבוע. היום מתפרסם כל יום, ברבע מחיר.",
  },
  {
    name: "דנה כהן",
    role: "קליניקת קוסמטיקה, תל אביב",
    quote: "הסרטונים נראים כאילו יש לי מעצב צמוד. הלקוחות בטוחים שיש לי צוות שיווק.",
  },
  {
    name: "יוסי פרץ",
    role: "נדל\"ן, באר שבע",
    quote: "כל נכס הופך לסרטון תוך שעות. סגרתי שתי עסקאות מלידים שהגיעו מטיקטוק.",
  },
  {
    name: "מיכל אדרי",
    role: "מסעדה משפחתית, נתניה",
    quote: "נויה עונה להזמנות בוואטסאפ גם כשאנחנו בשירות. זה כמו עוד עובדת.",
  },
];

const faq = [
  {
    q: "זה באמת אוטומטי?",
    a: "כן. אחרי טופס קצר, התוכן נוצר ומתפרסם לבד. אפשר לאשר כל פוסט ידנית או לתת לזה לרוץ.",
  },
  { q: "התוכן ייראה כמו העסק שלי?", a: "הלוגו, הצבעים והטון שלך — על כל פוסט וסרטון." },
  { q: "מה אם אני שומר שבת?", a: "יש מצב שומר שבת מובנה. שום פרסום בשבת ובחג." },
  { q: "אפשר לבטל?", a: "בכל רגע, בלי התחייבות ובלי קנסות." },
  {
    q: "איך מתחילים חינם?",
    a: "נרשמים בלי כרטיס אשראי ומקבלים 3 פוסטים ו-3 סרטונים להתנסות.",
  },
  {
    q: "מי כותב את התוכן?",
    a: "מנוע AI שאומן על תוכן שיווקי בעברית, עם בקרה אנושית שלך בקליק.",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal className="text-right">
        <span className="label-mono">/לקוחות מספרים</span>
        <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          עסקים שכבר הפסיקו לשלם אלפים.
        </h2>
      </Reveal>
      <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4">
        {testimonials.map((item, i) => (
          <Reveal
            key={item.name}
            variant="pop"
            delay={i * 80}
            className="card-soft w-[300px] shrink-0 snap-start p-7 text-right sm:w-[340px]"
          >
            <div className="flex justify-end gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 text-primary" strokeWidth={1.25} />
              ))}
            </div>
            <p className="mt-5 text-base leading-relaxed">{item.quote}</p>
            <p className="mt-6 text-sm font-bold">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.role}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24 sm:py-32">
      <Reveal className="text-right">
        <span className="label-mono">/שאלות נפוצות</span>
      </Reveal>
      <div className="mt-10 space-y-3">
        {faq.map((item, i) => (
          <Reveal key={item.q} delay={i * 60} className="card-soft overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
              aria-expanded={open === i}
            >
              <span className="text-base font-bold">{item.q}</span>
              {open === i ? (
                <Minus className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
              ) : (
                <Plus className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
              )}
            </button>
            {open === i && (
              <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="signup" className="mx-auto max-w-4xl px-5 py-28 text-center sm:py-36">
      <Reveal>
        <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
          העסק שלך מפרסם מחר בבוקר ב-06:30.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          הצטרפו עכשיו — ההרשמה חינם ולוקחת 5 דקות.
        </p>
        <a href="#signup" className="pill-ink mt-9 px-8 py-4 text-base hover:shadow-float">
          התחילו חינם — בלי כרטיס אשראי
        </a>
        <p className="mt-4 text-xs text-muted-foreground">
          מ-249 ₪ בחודש · כל 4 הרשתות · ביטול בכל רגע
        </p>
      </Reveal>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 sm:flex-row sm:justify-between">
        <span className="text-base font-extrabold tracking-tight">
          DERSO <span className="text-primary">Social</span>
        </span>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#signup" className="transition-colors hover:text-foreground">
            תנאי שימוש
          </a>
          <a href="#signup" className="transition-colors hover:text-foreground">
            פרטיות
          </a>
          <a href="#signup" className="transition-colors hover:text-foreground">
            צור קשר
          </a>
        </div>
        <p className="text-xs text-muted-foreground">DERSO Social Studio © 2026</p>
      </div>
    </footer>
  );
}

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a href="#signup" className="pill-ink w-full text-sm">
        התחילו חינם
      </a>
    </div>
  );
}
