import { MARQUEE } from "@/lib/data";

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-brick-deep py-4">
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            className="flex shrink-0 items-center gap-8 pr-8 text-[13px] font-semibold uppercase tracking-[0.16em] text-white/45"
            aria-hidden={dup === 1}
          >
            {items.map((m, i) => (
              <span key={`${dup}-${i}`} className="flex items-center gap-8">
                {m}
                <span className="text-ember">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
