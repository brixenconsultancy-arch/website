import type { Metadata } from "next";
import { GlobalCTA } from "@/components/global-cta";
import { ProjectCard } from "@/components/project-card";
import { PageHero, StatBand } from "@/components/ui";
import { GROUP, PROJECTS, PROJECT_STATS, PROJECT_VALUE_TOTAL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Representative built work our leadership has planned, managed or delivered — major US education, transit and infrastructure programs, plus civil and building work across Pakistan and the UAE.",
};

const REGIONS: { country: string; label: string }[] = [
  { country: "USA", label: "United States" },
  { country: "Pakistan", label: "Pakistan — Brixen Associates" },
  { country: "UAE", label: "UAE — Spirit Brixen" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="03 — Track Record"
        title="Project experience across four markets."
        intro="Representative built work our leadership has planned, managed or delivered — the foundation of the engineering judgment behind our drawings. US programs first, then international."
      />

      {/* STATS */}
      <section className="bg-paper">
        <div className="container-bx py-14 sm:py-16">
          <StatBand stats={PROJECT_STATS} />
          <p className="mt-6 text-center text-[13.5px] font-medium text-muted">
            ≈{" "}
            <span className="font-bold text-brick">{PROJECT_VALUE_TOTAL}</span>{" "}
            in combined project value across all four markets.
          </p>
        </div>
      </section>

      {/* PROJECTS BY REGION */}
      <section className="section bg-paper pt-12 sm:pt-16">
        <div className="container-bx space-y-16">
          {REGIONS.map((region) => {
            const items = PROJECTS.filter((p) => p.country === region.country);
            if (!items.length) return null;
            return (
              <div key={region.country}>
                <div className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-brick">
                  <span className="h-1.5 w-1.5 rounded-full bg-brick" />
                  {region.label}
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <ProjectCard key={p.pid} project={p} detailed />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* GROUP STRUCTURE */}
      <section className="section bg-paper pt-0">
        <div className="container-bx">
          <div className="mb-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-brick">
            Group Structure
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {GROUP.map((g) => (
              <div key={g.title} className="card border-t-4 border-t-brick p-8">
                <h3 className="text-lg font-extrabold leading-snug tracking-tight">
                  {g.title}
                </h3>
                <p className="mt-3 text-pretty text-[14.5px] leading-relaxed text-muted">
                  {g.scope}
                </p>
                <div className="mt-5 border-t border-line pt-4 text-[12px] font-semibold uppercase tracking-wider text-brick">
                  {g.region}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
