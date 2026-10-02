"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { NAV } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-brick-deep text-white">
        <div className="container-bx flex items-center justify-center gap-3 py-2 text-center text-[11px] font-medium uppercase tracking-wider sm:text-xs">
          <span className="hidden h-1.5 w-1.5 rounded-full bg-ember sm:inline-block" />
          <span className="text-white/80">
            Engineering-led BIM &amp; CAD drafting — USA · UK · UAE · Pakistan
          </span>
          <Link
            href="/services"
            className="hidden whitespace-nowrap font-semibold text-white underline underline-offset-4 hover:text-ember sm:inline"
          >
            Explore capabilities →
          </Link>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper">
        <div className="container-bx flex h-[80px] items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                    active
                      ? "bg-sand text-brick"
                      : "text-muted hover:bg-cream hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn btn-primary hidden sm:inline-flex">
              Start a Project
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`overflow-hidden border-t border-line bg-paper transition-[max-height] duration-300 ease-out lg:hidden ${
            open ? "max-h-[80vh]" : "max-h-0"
          }`}
        >
          <nav className="container-bx flex flex-col gap-1 py-4">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active ? "bg-sand text-brick" : "text-ink hover:bg-cream"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn btn-primary mt-3 w-full"
            >
              Start a Project
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
