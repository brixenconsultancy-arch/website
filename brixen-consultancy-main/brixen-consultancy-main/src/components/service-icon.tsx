type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {children}
    </svg>
  );
}

const ICONS: Record<string, (p: IconProps) => React.ReactElement> = {
  // BIM & CAD production — stacked model layers / cube
  "bim-cad": ({ className }) => (
    <Svg className={className}>
      <path d="M12 3l8 4-8 4-8-4 8-4z" />
      <path d="M4 11l8 4 8-4" />
      <path d="M4 15l8 4 8-4" />
    </Svg>
  ),
  // Structural, MEP & HVAC — building services
  "structural-mep": ({ className }) => (
    <Svg className={className}>
      <path d="M3 10c4 0 5-4 9-4s5 4 9 4" />
      <path d="M3 10v8M21 10v8M9 12v6M15 12v6" />
      <path d="M3 18h18" />
    </Svg>
  ),
  // Civil & infrastructure engineering
  "civil-infrastructure": ({ className }) => (
    <Svg className={className}>
      <path d="M4 21V9l5-3 5 3v12" />
      <path d="M14 21V12l6-3v12" />
      <path d="M7 12h1M7 15h1M7 18h1" />
    </Svg>
  ),
  // Mechanical design & CAE — gear
  "mechanical-cae": ({ className }) => (
    <Svg className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.4M12 18.6V21M4.2 7l2 1.2M17.8 15.8l2 1.2M4.2 17l2-1.2M17.8 8.2l2-1.2" />
    </Svg>
  ),
  // Project & construction management — clipboard/checklist
  "construction-management": ({ className }) => (
    <Svg className={className}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1" />
      <path d="M8.5 10l1.5 1.5 2.5-3M8.5 16l1.5 1.5 2.5-3" />
    </Svg>
  ),
  // Sustainability & quality — leaf
  "sustainability-quality": ({ className }) => (
    <Svg className={className}>
      <path d="M20 4C10 4 4 9 4 18c0 0 0 2 0 2" />
      <path d="M20 4c0 9-5 14-14 14" />
    </Svg>
  ),
};

export function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = ICONS[slug] ?? ICONS["bim-cad"];
  return <Icon className={className} />;
}
