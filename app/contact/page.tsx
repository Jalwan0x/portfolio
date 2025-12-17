"use client";

import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setStatus("Thanks. I'll reply within one business day.");
      form.reset();
    } else {
      setStatus("Could not send. Please email hi@jalwan.app.");
    }
  }

  return (
    <>
      <Header />
      <main>
        <Section title="Request a Security Audit" eyebrow="Quick form. I'll reply within one business day">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-start">
            <form className="card space-y-5" onSubmit={handleSubmit}>
              <input type="text" name="company" placeholder="Company" className="hidden" aria-hidden />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="text-subtle">Work email</span>
                  <input required name="email" type="email" className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-3" placeholder="you@company.com" />
                </label>
                <label className="space-y-2 text-sm">
                  <span className="text-subtle">Role</span>
                  <input required name="role" className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-3" placeholder="CTO / Founder / Security" />
                </label>
              </div>
              <label className="space-y-2 text-sm">
                <span className="text-subtle">Primary app / URL</span>
                <input required name="appUrl" type="url" className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-3" placeholder="https://app.yourdomain.com" />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-subtle">What changed recently? (30s prequal)</span>
                <input name="prequal" className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-3" placeholder="New auth, API, launch, compliance date" />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-subtle">Notes / scope context</span>
                <textarea name="notes" rows={4} className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-3" placeholder="Environments, credentials, timelines" />
              </label>
              <div className="space-y-2 text-sm">
                <p className="text-subtle">Anti‑spam</p>
                <p className="text-subtle">A hidden field helps block bots. You can also add reCAPTCHA v3 if needed.</p>
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">Request Security Audit</button>
              {status && <p className="text-sm text-subtle" role="status">{status}</p>}
            </form>
            <div className="card space-y-4 text-subtle text-sm leading-relaxed">
              <p className="text-text font-semibold text-lg">What happens next</p>
              <ul className="space-y-3">
                <li>1) I review your note and send a quick confirmation + calendar link.</li>
                <li>2) We agree scope (what to test) and timelines, then I start testing.</li>
                <li>3) You receive a clear PDF + HTML report: what I found, impact, and how to fix it. Retest is included.</li>
              </ul>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                Prefer email? Write to hi@jalwan.app. Include your web app URL and timelines.
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
