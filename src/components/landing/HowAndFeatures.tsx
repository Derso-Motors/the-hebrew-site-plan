import {
  ClipboardList,
  Sparkles,
  Send,
  Layers,
  Clapperboard,
  BarChart3,
  Smartphone,
  MessageCircle,
  Globe,
} from "lucide-react";
import { MonoLabel } from "./MonoLabel";
import { Reveal } from "./Reveal";

const steps = [
  {
    num: "/01",
    Icon: ClipboardList,
    title: "מספרים לנו על העסק",
    text: "ממלאים טופס אחד: תחום, קהל, לוגו וצבעים. חמש דקות וזהו.",
  },
  {
    num: "/02",
    Icon: Sparkles,
    title: "ה-AI מייצר תוכן ממותג",
    text: "קרוסלות, פוסטים וסרטונים בעברית, בטון של העסק שלך, עם העיצוב שלך.",
  },
  {
    num: "/03",
    Icon: Send,
    title: "מתפרסם אוטומטית",
    text: "כל בוקר, בכל הרשתות — אינסטגרם, פייסבוק, טיקטוק ויוטיוב. אתה רק מאשר מהנייד.",
  },
];

const features = [
  {
    Icon: Layers,
    title: "כל 4 הרשתות מהחבילה הראשונה",
    text: "אינסטגרם, פייסבוק, טיקטוק ויוטיוב. בלי תוספי מחיר.",
  },
  {
    Icon: Clapperboard,
    title: "סרטונים וקרוסלות",
    text: "וידאו ממותג עם כתוביות בעברית, מוכן לרילס ולטיקטוק.",
  },
  {
    Icon: BarChart3,
    title: "אנליטיקס בזמן אמת",
    text: "עוקבים, צפיות ומעורבות — רואים בדיוק מה עובד.",
  },
  {
    Icon: Smartphone,
    title: "שליטה מלאה מהנייד",
    text: "לוח תוכן, אישור בקליק, כולל מצב שומר שבת.",
  },
  {
    Icon: MessageCircle,
    title: "נויה — מזכירה חכמה לוואטסאפ",
    text: "עונה ללקוחות 24/7, קובעת פגישות ומקבלת הזמנות.",
  },
  {
    Icon: Globe,
    title: "אתר נחיתה לעסק",
    text: "דף מקצועי שממיר את החשיפה ללקוחות.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
      <Reveal>
        <MonoLabel>איך זה עובד</MonoLabel>
      </Reveal>
      <div className="mt-12 space-y-16 sm:space-y-24">
        {steps.map(({ num, Icon, title, text }, i) => (
          <Reveal key={num} delay={i * 80}>
            <div className="flex flex-col gap-6 sm:flex-row-reverse sm:items-center sm:gap-12">
              <div className="flex-1 text-right">
                <span className="font-mono text-sm text-primary">{num}</span>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl">{title}</h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {text}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <span className="card-soft flex h-20 w-20 items-center justify-center bg-secondary/60">
                  <Icon className="h-8 w-8 text-primary" strokeWidth={1.25} />
                </span>
                <span className="select-none font-mono text-6xl font-extrabold text-border sm:text-8xl">
                  {num}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal className="text-right">
        <MonoLabel>מה מקבלים</MonoLabel>
        <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          מעטפת שיווק מלאה. לא עוד כלי.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ Icon, title, text }, i) => (
          <Reveal key={title} variant="pop" delay={i * 70} className="card-soft p-7 text-right">
            <Icon className="h-6 w-6 text-primary" strokeWidth={1.4} />
            <h3 className="mt-5 text-lg font-bold leading-snug">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
