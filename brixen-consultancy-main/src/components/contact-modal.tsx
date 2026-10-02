"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/data";

/**
 * Branded contact modal — opens on click instead of firing a raw
 * `tel:` link (which triggers the OS "Open FaceTime?" prompt).
 * Shows phone + emails with copy / call / email actions.
 */
export function ContactModal({
  triggerClassName = "btn btn-light",
  label,
}: {
  triggerClassName?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const copy = async (val: string) => {
    try {
      await navigator.clipboard.writeText(val);
      setCopied(val);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  const telHref = `tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`;

  const rows: { kind: string; label: string; value: string; action: string; href: string }[] = [
    { kind: "phone", label: "Phone", value: CONTACT.phone, action: "Call", href: telHref },
    { kind: "info", label: "General enquiries", value: CONTACT.emailInfo, action: "Email", href: `mailto:${CONTACT.emailInfo}` },
    { kind: "sales", label: "Sales", value: CONTACT.emailSales, action: "Email", href: `mailto:${CONTACT.emailSales}` },
  ];

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClassName}>
        {label ?? CONTACT.phone}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Contact Brixen Consultancy"
        >
          {/* backdrop */}
          <div
            className="fade-in absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* card */}
          <div className="modal-in relative w-full max-w-md overflow-hidden rounded-3xl border border-line bg-paper shadow-2xl">
            {/* header (red band) */}
            <div className="relative overflow-hidden bg-brick px-7 py-6 text-white">
              <div className="absolute inset-0 grid-texture opacity-40" />
              <div className="relative">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
                  Get in touch
                </div>
                <h3 className="mt-1.5 text-xl font-extrabold tracking-tight">
                  A team that knows the building.
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                ✕
              </button>
            </div>

            {/* body */}
            <div className="space-y-3 p-6 sm:p-7">
              {rows.map((r) => (
                <div
                  key={r.value}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-line p-4"
                >
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                      {r.label}
                    </div>
                    <div className="mt-0.5 truncate text-[14.5px] font-bold text-ink">
                      {r.value}
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <a
                      href={r.href}
                      className="inline-flex items-center justify-center rounded-full bg-brick px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-brick-dark"
                    >
                      {r.action}
                    </a>
                    <button
                      type="button"
                      onClick={() => copy(r.value)}
                      className="inline-flex items-center justify-center rounded-full border border-line px-3.5 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-brick hover:text-brick"
                    >
                      {copied === r.value ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              ))}

              <div className="pt-1 text-center text-[12px] text-muted">
                Brixen Consultancy LLC · 5900 Balcones Drive, STE 100, Austin, TX
                78731, USA
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
