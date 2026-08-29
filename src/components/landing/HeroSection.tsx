import { ArrowLeft, Instagram, Facebook, Youtube, Music2, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { PhoneFrame } from "./PhoneFrame";
import reelHero from "@/assets/reel-hero.jpg";

const navLinks = [
  { label: "תוצאות", href: "#results" },
  { label: "איך זה עובד", href: "#how" },
  { label: "מחירים", href: "#pricing" },
  { label: "שאלות", href: "#faq" },
];

const platforms = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "TikTok", Icon: Music2 },
  { label: "YouTube", Icon: Youtube },
  { label: "Google Business", Icon: MapPin },
];

function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="text-lg font-extrabold tracking-tight">
          DERSO <span className="text-primary">Social</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#signup" className="pill-ink px-5 py-2.5 text-sm">
          התחילו חינם
        </a>
      </nav>
    </header>
  );
}

function StatChip({
  children,
  className,
  delay,
}: {
  children: string;
  className: string;
  delay: number;
}) {
  return (
    <Reveal
      variant="pop"
      delay={delay}
      className={`absolute card-soft whitespace-nowrap px-4 py-2.5 text-xs font-semibold ${className}`}
    >
      {children}
    </Reveal>
  );
}

export function HeroSection() {
  return (
    <>
      <TopNav />
      <section id="top" className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:pt-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="order-1 text-right">
            <span className="label-mono">DERSO SOCIAL OS</span>
            <h1 className="mt-5 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              מספיק לשלם לאיש סושיאל
              <br />
              1,000–4,000 ₪ בחודש.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              עובד סושיאל דיגיטלי לעסק שלך — פוסטים, קרוסלות וסרטונים ממותגים בעברית, מתפרסמים
              אוטומטית בכל הרשתות. מ-249 ₪ בחודש.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#signup" className="pill-ink hover:shadow-float">
                התחילו חינם — בלי כרטיס אשראי
              </a>
              <a href="#showcase" className="pill-white hover:shadow-card">
                לצפייה בדוגמאות
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              3 פוסטים ו-3 סרטונים להתנסות · ביטול בכל רגע
            </p>
          </Reveal>

          <Reveal variant="pop" delay={120} className="order-2 flex justify-center lg:justify-start">
            <div className="relative">
              <PhoneFrame className="rotate-[-6deg]">
                <img
                  src={reelHero}
                  alt="רילס ממותג של בית קפה שנוצר על ידי דרסו סושיאל"
                  width={720}
                  height={1280}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 text-right">
                  <p className="text-sm font-bold text-ink-foreground">הקפה של הבוקר, עלינו.</p>
                  <p className="mt-1 text-[11px] text-ink-foreground/70">
                    נוצר ופורסם אוטומטית · דרסו סושיאל
                  </p>
                </div>
              </PhoneFrame>

              <StatChip delay={300} className="-top-4 right-[-30px] sm:right-[-56px]">
                25,164 צפיות השבוע
              </StatChip>
              <StatChip delay={480} className="top-1/3 left-[-40px] sm:left-[-72px]">
                עוקבים חדשים +48
              </StatChip>
              <StatChip delay={660} className="bottom-6 right-[-24px] sm:right-[-64px]">
                פורסם אוטומטית 06:30
              </StatChip>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-20 sm:mt-28">
          <p className="label-mono text-center text-muted-foreground">מפרסמים עבורכם ב:</p>
          <div className="mt-5 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-12 opacity-50">
              {[...platforms, ...platforms, ...platforms].map(({ label, Icon }, i) => (
                <span key={`${label}-${i}`} className="flex items-center gap-2 text-sm font-semibold">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
