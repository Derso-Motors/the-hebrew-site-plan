import { Check, ArrowLeft } from "lucide-react";
import { MonoLabel } from "./MonoLabel";
import { Reveal } from "./Reveal";

const plans = [
  {
    name: "בסיסי",
    price: "₪249",
    period: "לחודש",
    features: [
      "20 פוסטים בחודש",
      "4 סרטונים בחודש (סרטון בשבוע)",
      "כל 4 הרשתות",
      "עיצוב ממותג + פרסום אוטומטי",
    ],
    cta: "בחר ושלם",
    highlight: false,
    dark: false,
  },
  {
    name: "מקצועי",
    price: "₪490",
    period: "לחודש",
    features: ["60 פוסטים בחודש", "15 סרטונים בחודש (3–4 בשבוע)", "כל 4 הרשתות", "אנליטיקס מלא"],
    cta: "בחר ושלם",
    highlight: true,
    dark: false,
  },
  {
    name: "פרימיום",
    price: "₪890",
    period: "לחודש",
    features: [
      "150 פוסטים בחודש",
      "45 סרטונים בחודש (1–2 ביום)",
      "כל 4 הרשתות",
      "עד פי 12 יותר תוכן מחבילת הבסיס",
    ],
    cta: "בחר ושלם",
    highlight: false,
    dark: false,
  },
  {
    name: "הכול כלול",
    price: "₪1,039",
    period: "לחודש",
    features: [
      "כל מה שבפרימיום",
      "נויה — מזכירה חכמה לוואטסאפ — 199 ₪ לחודש",
      "אתר נחיתה מעוצב (שווי ₪99 + ₪690 הקמה)",
      "ללא דמי הקמה — חיסכון של ₪690",
    ],
    note: "בנפרד: ₪1,188 + הקמה",
    cta: "לחבילה המלאה",
    highlight: false,
    dark: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal className="text-center">
        <MonoLabel>מחירים</MonoLabel>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          עולה פחות מיום אחד של איש סושיאל.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          כל החבילות כוללות את כל 4 הרשתות, עיצוב ממותג ופרסום אוטומטי. המחירים לחודש.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-8 flex justify-center">
        <div className="card-soft flex flex-wrap items-center justify-center gap-3 px-6 py-3 text-sm">
          <span className="text-muted-foreground line-through">איש סושיאל: 1,000–4,000 ₪ בחודש</span>
          <ArrowLeft className="h-4 w-4 text-primary" strokeWidth={1.75} />
          <span className="font-bold text-primary">דרסו סושיאל: מ-249 ₪ בחודש</span>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan, i) => (
          <Reveal
            key={plan.name}
            variant="pop"
            delay={i * 90}
            className={`card-soft relative flex flex-col p-7 text-right ${
              plan.highlight ? "border-2 border-primary shadow-float" : ""
            } ${plan.dark ? "bg-ink text-ink-foreground" : ""}`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 right-7 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-primary-foreground">
                הכי פופולרי
              </span>
            )}
            <h3 className="text-lg font-bold">{plan.name}</h3>
            <p className="mt-3 flex items-baseline justify-end gap-2">
              <span className={`text-sm ${plan.dark ? "text-ink-foreground/60" : "text-muted-foreground"}`}>
                {plan.period}
              </span>
              <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed">
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${plan.dark ? "text-success" : "text-primary"}`}
                    strokeWidth={2}
                  />
                  <span className={plan.dark ? "text-ink-foreground/85" : "text-muted-foreground"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            {plan.note && (
              <p className="mt-5 text-xs text-ink-foreground/50 line-through">{plan.note}</p>
            )}
            <a
              href="#signup"
              className={`mt-6 ${plan.dark ? "pill-white" : "pill-ink"} w-full text-sm`}
            >
              {plan.cta}
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150} className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          מתלבטים? מתחילים חינם — 3 פוסטים ו-3 סרטונים להתנסות, בלי כרטיס אשראי.
        </p>
        <a href="#signup" className="pill-white mt-5 hover:shadow-card">
          התחילו חינם
        </a>
      </Reveal>
    </section>
  );
}
