export function TechPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-surface/50 px-2.5 py-0.5 font-mono text-[11px] text-text-muted transition-colors duration-300 group-hover:border-accent/10 group-hover:text-text-muted/90">
      {label}
    </span>
  );
}
