"use client";

import { useState } from "react";

const labelCls =
  "block text-[11px] font-semibold uppercase tracking-[0.1em] text-muted";
const inputCls =
  "mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-brick";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="card flex flex-col items-center justify-center px-8 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brick text-2xl text-white">
          ✓
        </div>
        <h3 className="mt-6 text-2xl font-extrabold tracking-tight">Thank you.</h3>
        <p className="mt-3 max-w-sm text-pretty text-[15px] leading-relaxed text-muted">
          Your enquiry has been received. Our team will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn btn-outline mt-7"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="card p-7 sm:p-9"
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brick">
        Project Enquiry
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name
          </label>
          <input id="name" name="name" required className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputCls}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="company" className={labelCls}>
          Company / Organisation
        </label>
        <input id="company" name="company" className={inputCls} placeholder="Optional" />
      </div>

      <div className="mt-4">
        <label htmlFor="details" className={labelCls}>
          Project details
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          required
          className={`${inputCls} resize-y`}
          placeholder="Tell us about your project, scope and timeline…"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-6 w-full text-base">
        Send Enquiry →
      </button>
    </form>
  );
}
