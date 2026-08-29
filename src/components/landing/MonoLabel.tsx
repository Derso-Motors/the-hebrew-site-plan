export function MonoLabel({ children }: { children: string }) {
  return (
    <span className="label-mono inline-flex items-center gap-1">
      <span aria-hidden="true">/</span>
      <span>{children}</span>
    </span>
  );
}
