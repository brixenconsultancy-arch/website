import type { Metadata } from "next";
import Image from "next/image";
import { GlobalCTA } from "@/components/global-cta";
import { Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { GOALS, VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Brixen Consultancy LLC is a US-based BIM modeling and CAD drafting partner — a capability built on engineering leadership, not just software, spanning four international markets.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="01 — About Brixen"
        title="A capability built on engineering leadership."
        intro="Brixen Consultancy LLC is a US-based BIM modeling and CAD drafting partner for general contractors, MEP firms and architecture studios — where the engineering judgment behind the output is what sets it apart."
      />

      {/* STORY */}
      <section className="section bg-paper">
        <div className="container-bx grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">
              Engineers who draw, not just drafters.
            </h2>
          </div>
          <div>
            <p className="text-pretty text-base leading-relaxed text-ink/85">
              Brixen exists because good drawings come from people who understand
              what they represent. Our principals have planned, managed and
              delivered major built work — infrastructure programs, aerospace-grade
              mechanical systems and multi-billion-dollar construction — and now
              bring that judgment to modeling and drafting.
            </p>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted">
              Operating from Austin, Texas as a remote extension of your team, we
              produce BIM and CAD deliverables aligned to US codes and your
              title-block standards. The group spans four markets — the USA, UK,
              UAE and Pakistan — through Brixen Consultancy LLC, Brixen Associates
              and Spirit Brixen Building Contracting LLC.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section bg-paper">
        <div className="container-bx grid gap-6 md:grid-cols-2">
          <div className="card p-9 sm:p-10">
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink">
              To be the drafting partner contractors trust with their most
              demanding work — pairing engineering judgment with manufacturing-grade
              precision to deliver models and drawings that hold up in the field
              and the front office.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[22px] bg-brick p-9 text-white sm:p-10">
            <div className="absolute inset-0 grid-texture opacity-50" />
            <div className="relative">
              <Eyebrow tone="onRed">Vision</Eyebrow>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-white/90">
                To be recognized across the US and beyond as the BIM and CAD
                partner that understands buildings the way the people who build
                them do — setting the standard for engineering-led drawing
                production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-paper">
        <div className="container-bx">
          <SectionHeading eyebrow="Core Values" title="What we stand on" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.no} className="card p-7">
                <div className="text-sm font-semibold text-brick">{v.no}</div>
                <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-pretty text-[14px] leading-relaxed text-muted">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="section relative overflow-hidden bg-brick-deep text-white">
        <div className="absolute inset-0 grid-texture opacity-40" />
        <div className="container-bx relative grid gap-12 md:grid-cols-[0.8fr_1.4fr] md:items-start">
          <div>
            <Eyebrow tone="light">Message from the Founder</Eyebrow>
            <div className="mt-7 h-28 w-28 overflow-hidden rounded-2xl border border-white/20">
              <Image
                src="/team/kamran-hayat.jpg"
                alt="Mr. Kamran Hayat"
                width={112}
                height={112}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 text-xl font-bold">Mr. Kamran Hayat</div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">
              Founder &amp; CEO
            </div>
          </div>
          <div>
            <p className="text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              “After decades leading large-scale infrastructure delivery, I know a
              drawing is only as good as the judgment behind it. That conviction is
              what Brixen is built on.”
            </p>
            <p className="mt-7 text-pretty text-base leading-relaxed text-white/65">
              Our focus is simple — put real engineering experience behind every
              model and drawing set, operate as a dependable extension of our
              clients&apos; teams, and hold to the highest standards of accuracy,
              accountability and turnaround across every market we serve.
            </p>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="section bg-paper">
        <div className="container-bx">
          <SectionHeading eyebrow="Our Goals" title="Where we're going" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GOALS.map((g) => (
              <div key={g.title} className="card p-7">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-brick" />
                  <h3 className="text-lg font-bold tracking-tight">{g.title}</h3>
                </div>
                <p className="mt-4 pl-5 text-pretty text-[14px] leading-relaxed text-muted">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
