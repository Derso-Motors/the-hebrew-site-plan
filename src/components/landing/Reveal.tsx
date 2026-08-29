import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold, rootMargin: "0px 0px -5% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "pop" | "side";
  as?: ElementType;
};

const hidden: Record<string, string> = {
  up: "translateY(28px)",
  pop: "scale(0.94) translateY(16px)",
  side: "translateX(28px)",
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : hidden[variant],
        transition: `opacity 450ms cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, transform 450ms cubic-bezier(0.22,0.61,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
