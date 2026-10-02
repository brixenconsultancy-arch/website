import { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "brick",
}: {
  children: ReactNode;
  tone?: "brick" | "light" | "onRed";
}) {
  const text =
    tone === "onRed" ? "text-white" : tone === "light" ? "text-ember" : "text-brick";
  const dot =
    tone === "onRed" ? "bg-white" : tone === "light" ? "bg-ember" : "bg-brick";
  return (
    <span className={`eyebrow ${text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "brick"}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-balance text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-pretty text-base leading-relaxed sm:text-lg ${
            tone === "light" ? "text-white/70" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function StatBand({
  stats,
  tone = "light",
}: {
  stats: { n: string; l: string }[];
  tone?: "light" | "dark";
}) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.l}
          className={`p-7 sm:p-9 ${tone === "dark" ? "bg-brick-deep" : "bg-paper"}`}
        >
          <div
            className={`text-4xl font-extrabold leading-none tracking-tight sm:text-5xl ${
              tone === "dark" ? "text-white" : "text-brick"
            }`}
          >
            {s.n}
          </div>
          <div
            className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] ${
              tone === "dark" ? "text-white/55" : "text-muted"
            }`}
          >
            {s.l}
          </div>
        </div>
      ))}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 grid-texture opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 560px at 80% -10%, rgba(228,35,35,0.8), transparent 60%), radial-gradient(820px 460px at 8% 20%, rgba(170,16,16,0.5), transparent 62%)",
        }}
      />
      <div className="container-bx relative py-20 sm:py-24 md:py-28">
        <div className="max-w-3xl fade-up">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
              {intro}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
