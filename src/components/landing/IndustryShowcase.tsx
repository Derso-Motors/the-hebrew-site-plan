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
    <section id="showcase" ref={sectionRef} className="relative h-[380vh] lg:h-[400vh]">
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-5 py-10">
          <Reveal className="text-center">
            <MonoLabel>ככה זה נראה</MonoLabel>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-4xl">
              זה נראה כאילו אתה עשית את זה. רק בלי שעשית כלום.
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-col items-center gap-8 lg:mt-10 lg:flex-row lg:justify-center lg:gap-16">
            <div className="w-full text-center lg:w-80 lg:text-right">
              <p className="label-mono">{`/0${index + 1}`}</p>
              <div key={current.industry} style={{ animation: "swap-in 420ms cubic-bezier(0.22,0.61,0.36,1) both" }}>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight lg:mt-3 lg:text-3xl">
                  {current.industry}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground lg:mt-3 lg:text-lg">
                  {current.side}
                </p>
              </div>
              <div className="mt-5 flex justify-center gap-2 lg:mt-8 lg:justify-start">
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
            <PhoneFrame className="w-[230px] sm:w-[240px]">
              {industries.map((item, i) => (
                <PhoneScreen key={item.brand} item={item} active={i === index} />
              ))}
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
