import { useEffect, useRef, useState } from "react";
import { MonoLabel } from "./MonoLabel";
import { Reveal } from "./Reveal";
import { PhoneFrame } from "./PhoneFrame";
import feedInsurance from "@/assets/feed-insurance.jpg";
import feedRealestate from "@/assets/feed-realestate.jpg";
import feedRestaurant from "@/assets/feed-restaurant.jpg";
import feedGarage from "@/assets/feed-garage.jpg";

type Industry = {
  brand: string;
  initials: string;
  industry: string;
  format: string;
  caption: string;
  badge: string;
  side: string;
  image: string;
};

const industries: Industry[] = [
  {
    brand: "אלמוג ביטוחים",
    initials: "אב",
    industry: "סוכנות ביטוח",
    format: "קרוסלה",
    caption: "5 טעויות בביטוח רכב שעולות לך אלפים",
    badge: "1 מתוך 6",
    side: "פוסט מקצועי שממצב אותך כמומחה.",
    image: feedInsurance,
  },
  {
    brand: "נדל\"ן שרון",
    initials: "נש",
    industry: "משרד נדל\"ן",
    format: "רילס",
    caption: "4 חדרים · מרפסת שמש · כניסה מיידית",
    badge: "₪1,890,000",
    side: "כל נכס הופך לסרטון שיווקי.",
    image: feedRealestate,
  },
  {
    brand: "מסעדת אדמה",
    initials: "מא",
    industry: "מסעדה",
    format: "קרוסלה יומית",
    caption: "המנה של היום: חומוס בית עם פיתות טריות",
    badge: "היום בלבד",
    side: "המנה של היום מתפרסמת לבד כל בוקר.",
    image: feedRestaurant,
  },
  {
    brand: "מוסך פרץ",
    initials: "מפ",
    industry: "מוסך / רכב",
    format: "רילס לפני-אחרי",
    caption: "פוליש מלא — התוצאה מדברת בעד עצמה",
    badge: "לפני / אחרי",
    side: "תוכן שמביא לקוחות מהאזור שלך.",
    image: feedGarage,
  },
];

function PhoneScreen({ item, active }: { item: Industry; active: boolean }) {
  return (
    <div
      className="absolute inset-0 transition-all duration-500 ease-out"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0) scale(1)" : "translateY(14px) scale(1.03)",
      }}
      aria-hidden={!active}
    >
      <div className="flex h-full flex-col bg-card">
        <div className="flex items-center gap-2 px-3 pb-2 pt-7">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground">
            {item.initials}
          </span>
          <div className="text-right">
            <p className="text-[11px] font-bold leading-tight">{item.brand}</p>
            <p className="text-[9px] leading-tight text-muted-foreground">{item.format}</p>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <img
            src={item.image}
            alt={`${item.industry} — ${item.caption}`}
            width={720}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute right-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-[10px] font-bold">
            {item.badge}
          </span>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-3 text-right">
            <p className="text-[12px] font-bold leading-snug text-ink-foreground">{item.caption}</p>
            <p className="mt-1 text-[9px] text-ink-foreground/70">נוצר אוטומטית · דרסו סושיאל</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndustryShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(Math.max(-rect.top / total, 0), 0.999);
      setIndex(Math.floor(progress * industries.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = (industries[index] ?? industries[0]) as Industry;

  return (
    <section id="showcase" ref={sectionRef} className="relative lg:h-[400vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 lg:py-10">
          <Reveal className="text-center">
            <MonoLabel>ככה זה נראה</MonoLabel>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-4xl">
              תוכן ממותג לכל תחום — לא תבנית גנרית.
            </h2>
          </Reveal>

          {/* Desktop: pinned phone that swaps feeds */}
          <div className="mt-8 hidden items-center justify-center gap-16 lg:flex">
            <div className="w-80 text-right">
              <p className="label-mono">{`/0${index + 1}`}</p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight">{current.industry}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{current.side}</p>
              <div className="mt-8 flex gap-2">
                {industries.map((item, i) => (
                  <span
                    key={item.brand}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-primary" : "w-3 bg-border"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                {index + 1}/{industries.length}
              </p>
            </div>
            <PhoneFrame className="w-[240px] sm:w-[240px]">
              {industries.map((item, i) => (
                <PhoneScreen key={item.brand} item={item} active={i === index} />
              ))}
            </PhoneFrame>
          </div>

          {/* Mobile: swipe carousel */}
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:hidden">
            {industries.map((item) => (
              <div key={item.brand} className="w-[260px] shrink-0 snap-center">
                <PhoneFrame className="w-[260px]">
                  <PhoneScreen item={item} active />
                </PhoneFrame>
                <p className="mt-4 text-right text-base font-bold">{item.industry}</p>
                <p className="mt-1 text-right text-sm text-muted-foreground">{item.side}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
