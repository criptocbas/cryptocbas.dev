export function TechPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-text-muted">
      {label}
    </span>
  );
}
