import type { Metadata } from "next";
import { GlobalCTA } from "@/components/global-cta";
import { PageHero, StatBand } from "@/components/ui";
import { EQUIPMENT, EQUIP_STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Software & Tools",
  description:
    "The BIM, CAD, CAE and controls stack behind our output — Autodesk Revit, AutoCAD, Navisworks, SolidWorks, CATIA V5, Siemens NX, GD&T, FEA and Primavera P6.",
};

export default function EquipmentPage() {
  return (
    <>
      <PageHero
        eyebrow="04 — Software & Tools"
        title="The stack behind every drawing."
        intro="A deep toolset across BIM, mechanical CAD/CAE, planning and quality — so we can model, coordinate and validate to whatever standard your project runs on."
      />

      <section className="bg-paper">
        <div className="container-bx py-14 sm:py-16">
          <StatBand stats={EQUIP_STATS} />
        </div>
      </section>

      <section className="section bg-paper pt-12 sm:pt-16">
        <div className="container-bx grid gap-6 md:grid-cols-2">
          {EQUIPMENT.map((cat) => (
            <div key={cat.cat} className="card p-8">
              <h2 className="text-xl font-extrabold tracking-tight">{cat.cat}</h2>
              <div className="mt-6 space-y-px">
                {cat.items.map((it) => (
                  <div
                    key={it}
                    className="flex items-start gap-3 border-b border-line py-3 text-[15px] text-ink last:border-0"
                  >
                    <span className="mt-0.5 text-brick">→</span>
                    {it}
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
