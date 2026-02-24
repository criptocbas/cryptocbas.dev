const variants = {
  Shipped: "border-accent/30 bg-accent-dim text-accent",
  "In Progress": "border-purple/30 bg-purple-dim text-purple",
  "Hackathon Winner": "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
} as const;

export function StatusBadge({
  status,
  award,
}: {
  status: keyof typeof variants;
  award?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-medium ${variants[status]}`}
    >
      {status === "Hackathon Winner" && award ? `${award} — ${status}` : status}
    </span>
  );
}
