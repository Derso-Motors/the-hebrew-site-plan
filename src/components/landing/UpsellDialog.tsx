import { useEffect, useState } from "react";
import { X, AlertTriangle } from "lucide-react";

const painNotes = [
  "לקוח שכתב בוואטסאפ ולא נענה תוך שעה — הלך למתחרה.",
  "חשיפה בלי דף מקצועי לנחות עליו = לידים שמתאדים.",
];

export function UpsellDialog({
  open,
  onClose,
  onContinue,
}: {
  open: boolean;
  onClose: () => void;
  onContinue: () => void;
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!open) {
      setStep(0);
      return;
    }
    const timers = painNotes.map((_, i) =>
      window.setTimeout(() => setStep(i + 1), 250 + i * 320),
    );
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      timers.forEach(window.clearTimeout);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="שדרוג לחבילת הכול כלול"
    >
      <button
        type="button"
        aria-label="סגירה"
        onClick={onClose}
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          background: "rgba(11,28,48,0.45)",
          animation: "overlay-in 250ms ease both",
        }}
      />
      <div
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-[24px] bg-card p-6 shadow-card sm:max-w-lg sm:rounded-[24px] sm:p-8"
        style={{ animation: "sheet-up 350ms cubic-bezier(0.22,0.61,0.36,1) both" }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="סגירה"
          className="absolute left-5 top-5 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-5 w-5" strokeWidth={1.75} />
        </button>

        <p className="label-mono">/רגע, שנייה לפני</p>
        <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
          הסושיאל יביא את הלקוחות. מי יענה להם?
        </h3>

        <div className="mt-6 space-y-3">
          {painNotes.map((note, i) => (
            <div
              key={note}
              className={`card-soft flex items-start gap-3 p-4 text-sm leading-relaxed ${
                i % 2 === 0 ? "sm:mr-0 sm:ml-8" : "sm:ml-0 sm:mr-8"
              }`}
              style={{
                opacity: i < step ? 1 : 0,
                transform: i < step ? "none" : "translateY(10px) scale(0.98)",
                transition: "opacity 350ms ease, transform 350ms ease",
              }}
            >
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" strokeWidth={1.75} />
              <span className="text-muted-foreground">{note}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[14px] bg-accent p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="text-right">
              <p className="text-sm font-bold">נויה</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                מזכירה חכמה לוואטסאפ. עונה, קובעת פגישות ומקבלת הזמנות 24/7.
              </p>
            </div>
            <span className="shrink-0 text-sm font-bold">₪199/חודש</span>
          </div>
          <div className="mt-4 flex items-start justify-between gap-4 border-t border-primary/15 pt-4">
            <div className="text-right">
              <p className="text-sm font-bold">אתר נחיתה מקצועי</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                דף ממותג שהופך את הצפיות ללקוחות.
              </p>
            </div>
            <span className="shrink-0 text-sm font-bold">₪99/חודש + ₪690 הקמה</span>
          </div>
        </div>

        <div className="mt-6 text-right">
          <p className="text-sm text-muted-foreground line-through">
            הכל בנפרד: ₪1,188/חודש + ₪690 הקמה
          </p>
          <p className="mt-2 text-lg font-extrabold leading-snug text-primary sm:text-xl">
            בחבילת הכול כלול: ₪1,039/חודש · בלי דמי הקמה בכלל
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <a href="#signup" onClick={onClose} className="pill-ink w-full text-sm">
            שדרגו אותי להכול כלול — ₪1,039/חודש
          </a>
          <button
            type="button"
            onClick={() => {
              try {
                localStorage.setItem("derso_upsell_lead", "1");
              } catch {
                /* ignore */
              }
              onContinue();
            }}
            className="pill-white w-full text-sm"
          >
            מעניין אותי — שיחזרו אליי אחרי התשלום
          </button>
          <button
            type="button"
            onClick={onContinue}
            className="w-full py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            לא תודה, המשך לתשלום
          </button>
        </div>
      </div>
    </div>
  );
}
