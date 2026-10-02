import Link from "next/link";
import { Logo } from "./logo";
import { CONTACT, YEAR } from "@/lib/data";

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const CAPABILITIES = [
  { label: "Software & Tools", href: "/equipment" },
  { label: "Credentials", href: "/certifications" },
  { label: "Leadership", href: "/team" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brick-deep text-white">
      <div className="absolute inset-0 grid-texture opacity-40" />
      <div className="container-bx relative">
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-xs text-[14.5px] leading-relaxed text-white/70">
              A US-based BIM modeling &amp; CAD drafting partner for general
              contractors, MEP firms and architecture studios — engineering
              judgment behind every drawing.
            </p>
          </div>

          {/* Company */}
          <div>
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ember">
              Company
            </div>
            <ul className="space-y-2.5">
              {COMPANY.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14.5px] text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ember">
              Capabilities
            </div>
            <ul className="space-y-2.5">
              {CAPABILITIES.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14.5px] text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ember">
              Get in Touch
            </div>
            <div className="space-y-1 text-[13px] leading-relaxed text-white/70">
              <div className="font-semibold text-white">
                Brixen Consultancy LLC
              </div>
              <div>US Head Office</div>
              <div>5900 Balcones Drive, STE 100</div>
              <div>Austin, TX 78731, USA</div>
              <div className="mt-3 font-medium text-white">{CONTACT.phone}</div>
              <div>{CONTACT.emailInfo}</div>
              <div>{CONTACT.emailSales}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/15 py-6 text-[11px] uppercase tracking-wider text-white/55 sm:flex-row">
          <span>© {YEAR} Brixen Consultancy LLC. All rights reserved.</span>
          <span>{CONTACT.website}</span>
        </div>
      </div>
    </footer>
  );
}
