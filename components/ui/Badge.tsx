interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
        "bg-[#edf3ff] border border-[#d2e2ff] text-blue-700",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
