const config = {
  Shipped: {
    classes: "border-accent/25 bg-accent/[0.06] text-accent",
    icon: null,
  },
  "In Progress": {
    classes: "border-purple/25 bg-purple/[0.06] text-purple",
    icon: null,
  },
  "Hackathon Winner": {
    classes: "border-gold/30 bg-gold-dim text-gold",
    icon: (
      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
} as const;

export function StatusBadge({
  status,
  award,
}: {
  status: keyof typeof config;
  award?: string;
}) {
  const { classes, icon } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-medium leading-tight ${classes}`}
    >
      {icon}
      {status === "Hackathon Winner" && award ? award : status}
    </span>
  );
}
