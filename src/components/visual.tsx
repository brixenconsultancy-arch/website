/* Decorative brick-toned visual used in place of project photography.
   Deterministic per `seed` so each card looks distinct but stable. */

const GRADIENTS = [
  "linear-gradient(135deg,#e5231f 0%,#8f0f0c 100%)",
  "linear-gradient(135deg,#1c1d21 0%,#2c2d33 100%)",
  "linear-gradient(135deg,#b8140f 0%,#16171a 100%)",
  "linear-gradient(135deg,#2c2d33 0%,#e5231f 100%)",
];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

export function Visual({
  seed,
  className = "",
  label,
}: {
  seed: string;
  className?: string;
  label?: string;
}) {
  const h = hash(seed);
  const grad = GRADIENTS[h % GRADIENTS.length];
  const variant = h % 3;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: grad }}
    >
      {/* grid */}
      <div className="absolute inset-0 grid-texture opacity-70" />
      {/* architectural line work */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 240"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {variant === 0 && (
          <>
            <path d="M-10 180 L120 70 L250 140 L420 50" fill="none" stroke="#fff" strokeOpacity="0.22" strokeWidth="1.5" />
            <path d="M-10 220 L130 120 L260 180 L420 100" fill="none" stroke="#fff" strokeOpacity="0.12" strokeWidth="1.5" />
          </>
        )}
        {variant === 1 && (
          <>
            <rect x="60" y="90" width="80" height="120" fill="#fff" fillOpacity="0.08" />
            <rect x="160" y="60" width="80" height="150" fill="#fff" fillOpacity="0.12" />
            <rect x="260" y="110" width="80" height="100" fill="#fff" fillOpacity="0.06" />
          </>
        )}
        {variant === 2 && (
          <>
            <circle cx="200" cy="120" r="90" fill="none" stroke="#fff" strokeOpacity="0.16" strokeWidth="1.5" />
            <circle cx="200" cy="120" r="55" fill="none" stroke="#fff" strokeOpacity="0.12" strokeWidth="1.5" />
            <line x1="0" y1="120" x2="400" y2="120" stroke="#fff" strokeOpacity="0.1" strokeWidth="1" />
          </>
        )}
      </svg>
      {label && (
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
