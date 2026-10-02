import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactModal } from "@/components/contact-modal";
import { CONTACT, OFFICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Put our engineering leadership behind your next set of drawings. Reach out to discuss scope, standards and turnaround.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-texture opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1150px 560px at 50% -16%, rgba(228,35,35,0.85), transparent 60%), radial-gradient(820px 460px at 85% 15%, rgba(180,18,18,0.5), transparent 62%)",
          }}
        />
        <div className="container-bx relative py-20 sm:py-24">
          <div className="max-w-3xl fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90">
              07 — Get in Touch
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
              A team that knows the building, not just the drawing.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
              Put our engineering leadership behind your next set of drawings.
              Reach out to discuss scope, standards and turnaround.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ContactModal triggerClassName="btn btn-light" label={`Call ${CONTACT.phone}`} />
              <a href={`mailto:${CONTACT.emailSales}`} className="btn btn-outline-light">
                {CONTACT.emailSales}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section bg-paper">
        <div className="container-bx grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Offices */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brick">
              Offices
            </div>
            <div className="mt-6 space-y-5">
              {OFFICES.map((o) => (
                <div key={o.city} className="card p-7">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brick" />
                    <h3 className="text-lg font-extrabold tracking-tight">
                      {o.city}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                      {o.tag}
                    </span>
                  </div>
                  <div className="mt-4 space-y-1 text-[14px] leading-relaxed text-muted">
                    <div>{o.addr}</div>
                    <div className="font-medium text-brick">{o.phone}</div>
                    <div className="font-medium text-brick">{o.email}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-1 text-[13px] font-medium text-muted">
              <div>{CONTACT.emailInfo} · {CONTACT.emailSales}</div>
              <div>{CONTACT.website}</div>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
