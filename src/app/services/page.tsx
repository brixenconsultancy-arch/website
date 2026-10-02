import type { Metadata } from "next";
import { GlobalCTA } from "@/components/global-cta";
import { ServiceIcon } from "@/components/service-icon";
import { PageHero } from "@/components/ui";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "BIM & CAD production, structural / MEP & HVAC, civil & infrastructure engineering, mechanical design & CAE, construction management and sustainability — three complementary disciplines under one team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="02 — Services"
        title="What the team brings together."
        intro="Three complementary disciplines that cover a project from planning and structure through to mechanical detail and sustainable delivery — modeled to your standards and US codes."
      />

      <section className="section bg-paper">
        <div className="container-bx space-y-5">
          {SERVICES.map((sv) => (
            <div
              key={sv.slug}
              className="card grid gap-8 p-7 sm:p-9 lg:grid-cols-[0.9fr_1.6fr] lg:items-start"
            >
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-brick">
                  <ServiceIcon slug={sv.slug} className="h-7 w-7" />
                </span>
                <div className="mt-5 text-sm font-semibold text-muted/60">
                  {sv.no}
                </div>
                <h2 className="mt-2 text-balance text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                  {sv.title}
                </h2>
                <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted">
                  {sv.desc}
                </p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {sv.points.map((pt) => (
                  <div
                    key={pt}
                    className="flex items-center gap-3 bg-paper px-5 py-4 text-[14.5px] text-ink"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-xs font-bold text-brick">
                      +
                    </span>
                    {pt}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
