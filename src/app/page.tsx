import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/marquee";
import { GlobalCTA } from "@/components/global-cta";
import { ProjectCard } from "@/components/project-card";
import { ServiceIcon } from "@/components/service-icon";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { HeroScene } from "@/components/hero-scene";
import { Eyebrow, SectionHeading } from "@/components/ui";
import {
  AUTHORITIES,
  CERTS,
  HIGHLIGHTS,
  METRICS,
  PROCESS,
  PROJECTS,
  SERVICES,
  STATS,
} from "@/lib/data";

export default function HomePage() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-texture opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1250px 660px at 50% -12%, rgba(228,35,35,0.92), transparent 60%), radial-gradient(900px 520px at 82% 8%, rgba(200,22,22,0.6), transparent 62%), radial-gradient(760px 480px at 12% 30%, rgba(150,14,14,0.45), transparent 60%)",
          }}
        />
        <HeroScene />
        <div className="container-bx relative py-20 text-center sm:py-28 md:py-32">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
              BIM Modeling · CAD Drafting · USA · UK · UAE · Pakistan
            </span>
            <h1 className="mx-auto mt-8 max-w-5xl text-balance text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
              A team that knows the building, not just the drawing.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">
              Brixen Consultancy is a US-based BIM modeling and CAD drafting
              partner for general contractors, MEP firms and architecture
              studios — with real engineering judgment behind every model.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn btn-light text-base">
                Start a Project
              </Link>
              <Link href="/services" className="btn btn-outline-light text-base">
                Our Capabilities
              </Link>
            </div>
            <p className="mx-auto mt-10 max-w-md text-pretty text-[15px] italic text-white/55">
              “The people and capabilities behind every drawing.”
            </p>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ============ STATS (animated) ============ */}
      <section className="bg-paper">
        <div className="container-bx py-16 sm:py-20">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal
                key={s.l}
                delay={i * 90}
                className="bg-paper p-7 sm:p-9"
              >
                <div className="text-4xl font-extrabold leading-none tracking-tight text-brick sm:text-5xl">
                  <CountUp value={s.n} />
                </div>
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {s.l}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="section bg-paper">
        <div className="container-bx grid gap-12 md:grid-cols-[1fr_1.15fr] md:items-start">
          <Reveal direction="left">
            <Eyebrow>01 — Who We Are</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.04] tracking-tight sm:text-4xl md:text-5xl">
              A capability built on engineering leadership, not just software.
            </h2>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-ink/85">
              What sets our output apart is the engineering judgment behind it —
              a leadership team that has planned, managed and delivered major
              built work, not only drawn it.
            </p>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted">
              Between them, our principals bring decades of infrastructure
              delivery, precision mechanical design from the aerospace and
              defense sector, and certified construction management with
              green-building accreditation. We operate as a remote extension of
              your team — aligned to US codes and your title-block standards.
            </p>
            <Link href="/about" className="btn btn-outline mt-8">
              More about us →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ EXPERIENCE ACROSS ============ */}
      <section className="section bg-paper pt-0 sm:pt-0">
        <div className="container-bx pt-16 sm:pt-20">
          <Reveal className="text-center">
            <Eyebrow>Experience Across</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">
              Programs our leadership has planned, managed &amp; delivered.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted">
              From major US education, transit and infrastructure programs to
              aerospace-grade mechanical design — the foundation of the judgment
              behind our drawings.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
            {AUTHORITIES.map((a, i) => (
              <Reveal
                key={a}
                delay={(i % 4) * 70}
                className="flex min-h-[112px] items-center justify-center bg-paper p-6 text-center"
              >
                <span className="text-[15px] font-bold leading-snug tracking-tight text-ink/80">
                  {a}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section bg-paper">
        <div className="container-bx">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionHeading eyebrow="02 — Capabilities" title="What the team brings together" />
            </Reveal>
            <Reveal delay={120}>
              <Link href="/services" className="btn btn-outline">
                All services →
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((sv, i) => (
              <Reveal key={sv.slug} delay={(i % 3) * 90}>
                <Link
                  href="/services"
                  className="card card-hover group flex h-full flex-col p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-brick transition-colors group-hover:bg-brick group-hover:text-white">
                      <ServiceIcon slug={sv.slug} className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-semibold text-muted/60">
                      {sv.no}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight">
                    {sv.title}
                  </h3>
                  <p className="mt-3 text-pretty text-[14.5px] leading-relaxed text-muted">
                    {sv.desc}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-brick">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HIGHLIGHTS ============ */}
      <section className="section bg-paper">
        <div className="container-bx">
          <Reveal>
            <SectionHeading
              eyebrow="03 — Why Brixen"
              title="Drawings that reflect how the field really works."
              intro="We understand your drawings the way the field and the front office do — because our leaders have stood on both sides of them."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.no} delay={i * 120}>
                <div className="card flex h-full flex-col p-8">
                  <span className="text-sm font-semibold text-brick">{h.no}</span>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight">
                    {h.title}
                  </h3>
                  <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted">
                    {h.desc}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {h.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-[14.5px]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cream text-[11px] font-bold text-brick">
                          ✓
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BY THE NUMBERS (animated) ============ */}
      <section className="section relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-texture opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 420px at 15% 0%, rgba(229,35,31,0.4), transparent 60%)",
          }}
        />
        <div className="container-bx relative">
          <Reveal>
            <SectionHeading
              eyebrow="04 — Leadership at a Glance"
              title="Decades of delivery, by the numbers."
              tone="light"
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/15 lg:grid-cols-3">
            {METRICS.map((m, i) => (
              <Reveal
                key={m.sub}
                delay={(i % 3) * 90}
                className="bg-ink p-8"
              >
                <div className="text-5xl font-extrabold leading-none tracking-tight text-white">
                  <CountUp value={m.n} />
                </div>
                <div className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-ember">
                  {m.l}
                </div>
                <div className="mt-1 text-[13.5px] text-white/70">{m.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="section bg-paper">
        <div className="container-bx">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionHeading
                eyebrow="05 — Track Record"
                title="Landmark US programs"
              />
            </Reveal>
            <Reveal delay={120}>
              <Link href="/projects" className="btn btn-outline">
                All projects →
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.pid} delay={i * 120}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section relative overflow-hidden bg-brick-deep text-white">
        <div className="absolute inset-0 grid-texture opacity-40" />
        <div className="container-bx relative">
          <Reveal>
            <SectionHeading
              eyebrow="06 — How We Work"
              title="From scope to deliverable, aligned to your standards."
              tone="light"
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <Reveal
                key={step.no}
                delay={i * 80}
                className="bg-brick-deep p-7"
              >
                <div className="text-sm font-semibold text-ember">{step.no}</div>
                <div className="my-5 h-px bg-white/15" />
                <h3 className="text-lg font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-white/65">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CEO QUOTE ============ */}
      <section className="section bg-paper">
        <div className="container-bx">
          <Reveal className="mx-auto max-w-4xl text-center">
            <Eyebrow>From the Founder</Eyebrow>
            <blockquote className="mt-6 text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl md:text-[34px]">
              “We don&apos;t just draw the building — we bring the judgment of
              people who have planned, managed and built it.”
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-line">
                <Image
                  src="/team/kamran-hayat.jpg"
                  alt="Mr. Kamran Hayat"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </span>
              <div className="text-left">
                <div className="font-bold tracking-tight">Mr. Kamran Hayat</div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Founder &amp; CEO
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CREDENTIALS STRIP ============ */}
      <section className="section bg-paper pt-0 sm:pt-0">
        <div className="container-bx pt-16 sm:pt-20">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="07 — Credentials"
              title="Credentialed &amp; standards-aligned."
              intro="Certified construction management, green-building accreditation and precision-engineering discipline behind every engagement."
            />
            <Link href="/certifications" className="btn btn-outline shrink-0">
              View credentials →
            </Link>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {CERTS.map((c, i) => (
              <Reveal key={c.code} delay={(i % 4) * 70}>
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-paper px-5 py-3">
                  <span className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-cream px-2 text-xs font-extrabold text-brick">
                    {c.code}
                  </span>
                  <span className="text-[13.5px] font-medium text-ink">
                    {c.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
