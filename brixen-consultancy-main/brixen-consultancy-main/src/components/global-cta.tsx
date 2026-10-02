import Link from "next/link";
import { Eyebrow } from "./ui";

export function GlobalCTA() {
  return (
    <section className="relative overflow-hidden bg-brick text-white">
      <div className="absolute inset-0 grid-texture opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 400px at 90% 110%, rgba(255,145,145,0.32), transparent 60%)",
        }}
      />
      <div className="container-bx relative flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center md:py-24">
        <div className="max-w-xl">
          <Eyebrow tone="onRed">Start a Project</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.02] tracking-tight sm:text-4xl md:text-5xl">
            Engineering behind every drawing.
          </h2>
          <p className="mt-4 text-pretty text-lg text-white/85">
            Tell us about your scope, standards and turnaround — we&apos;ll
            respond with a clear approach and a team that knows the building.
          </p>
        </div>
        <Link href="/contact" className="btn btn-light shrink-0 text-base">
          Get in touch →
        </Link>
      </div>
    </section>
  );
}
