import type { Metadata } from "next";
import Image from "next/image";
import { GlobalCTA } from "@/components/global-cta";
import { PageHero, SectionHeading } from "@/components/ui";
import { DIRECTORS, LEADERS, STAFF } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leadership & Team",
  description:
    "A leadership team spanning civil and infrastructure engineering, mechanical design and certified construction management — backed by decades of project delivery across four international markets.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="06 — Leadership & Expertise"
        title="The people behind every drawing."
        intro="A leadership team spanning civil and infrastructure engineering, mechanical design and certified construction management — backed by decades of project delivery across four international markets."
      />

      {/* LEADERS */}
      <section className="section bg-paper">
        <div className="container-bx space-y-6">
          {LEADERS.map((l) => (
            <div key={l.initials} className="card p-7 sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:items-start">
                {/* Photo + identity */}
                <div>
                  <div className="h-40 w-40 overflow-hidden rounded-2xl border border-line">
                    <Image
                      src={l.img}
                      alt={l.name}
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold leading-tight tracking-tight">
                    {l.name}
                  </h3>
                  <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-brick">
                    {l.role}
                  </div>
                  {l.base && (
                    <div className="mt-2 text-[12px] text-muted">{l.base}</div>
                  )}
                </div>

                {/* Bio + details */}
                <div>
                  <p className="text-pretty text-[15px] leading-relaxed text-ink/85">
                    {l.bio}
                  </p>

                  <div className="mt-7 grid gap-7 sm:grid-cols-2">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Credentials
                      </div>
                      <ul className="mt-3 space-y-2">
                        {l.credentials.map((c) => (
                          <li
                            key={c}
                            className="flex gap-2.5 text-[13.5px] leading-snug text-ink"
                          >
                            <span className="mt-0.5 text-brick">✓</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Focus Areas
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {l.focus.map((f) => (
                          <span
                            key={f}
                            className="rounded-full border border-line bg-cream px-3 py-1 text-[12px] font-medium text-ink"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Experience timeline */}
                  <div className="mt-7 border-t border-line pt-6">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Selected Experience
                    </div>
                    <ul className="mt-4 space-y-3">
                      {l.experience.map((e, i) => (
                        <li
                          key={`${l.initials}-${i}`}
                          className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
                        >
                          <div>
                            <span className="text-[14px] font-semibold text-ink">
                              {e.role}
                            </span>
                            <span className="text-[14px] text-muted"> · {e.org}</span>
                          </div>
                          <span className="shrink-0 text-[12px] font-medium uppercase tracking-wider text-brick">
                            {e.period}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GROUP STRUCTURE */}
      <section className="section bg-paper">
        <div className="container-bx">
          <SectionHeading
            eyebrow="Group Structure"
            title="Three companies, one standard."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {DIRECTORS.map((d) => (
              <div key={d.title} className="card border-t-4 border-t-brick p-8">
                <h3 className="text-lg font-extrabold leading-snug tracking-tight">
                  {d.title}
                </h3>
                <p className="mt-4 text-pretty text-[14px] leading-relaxed text-muted">
                  {d.scope}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {STAFF.map((s) => (
              <div key={s.l} className="bg-paper p-6 text-center">
                <div className="text-2xl font-extrabold tracking-tight text-brick">
                  {s.n}
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                  {s.l}
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
