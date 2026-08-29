import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-[260px] rounded-[42px] border border-border bg-ink p-2.5 shadow-float sm:w-[300px]",
        className,
      )}
    >
      <div className="absolute left-1/2 top-3 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
      <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-card">{children}</div>
    </div>
  );
}
