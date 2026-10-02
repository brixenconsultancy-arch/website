import type { Metadata } from "next";
import { GlobalCTA } from "@/components/global-cta";
import { Eyebrow, PageHero } from "@/components/ui";
import { CERTS, ENLISTMENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "Certified construction management, LEED accreditation and precision-engineering discipline — CCM, LEED AP, USACE CQM, PMP, Primavera P6, GD&T, FEA and Lean Six Sigma.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="05 — Credentials"
        title="Credentialed &amp; standards-aligned."
        intro="Our leadership carries certified construction management, green-building accreditation and manufacturing-grade quality discipline — the credentials behind our engineering judgment."
      />

      <section className="section bg-paper">
        <div className="container-bx">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CERTS.map((c) => (
              <div key={c.code} className="card flex flex-col p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-sm font-extrabold tracking-wide text-brick">
                  {c.code}
                </div>
                <h3 className="mt-6 text-balance text-base font-bold leading-snug tracking-tight">
                  {c.title}
                </h3>
                <div className="mt-auto pt-5 text-[11px] font-medium uppercase tracking-wider text-muted">
                  {c.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENLISTMENTS */}
      <section className="section relative overflow-hidden bg-brick-deep text-white">
        <div className="absolute inset-0 grid-texture opacity-40" />
        <div className="container-bx relative grid gap-12 md:grid-cols-[0.8fr_1.6fr] md:items-center">
          <div>
            <Eyebrow tone="light">Standards & Programs</Eyebrow>
            <h2 className="mt-4 text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              Certified with leading US bodies &amp; programs.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {ENLISTMENTS.map((e) => (
              <div
                key={e}
                className="flex items-center gap-3 bg-brick-deep px-6 py-5 text-[15px] text-white/90"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs text-ember">
                  ✓
                </span>
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
