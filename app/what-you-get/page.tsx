import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import { CTAButton } from "../components/CTAButton";

export const metadata = {
  title: "What You Get From a Pentest | Jalwan",
  description: "A penetration test report shows exactly what's vulnerable, how attackers exploit it, and how to fix it.",
};

export default function WhatYouGetPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-shell pb-8 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-text leading-tight">
              What you actually get from me
            </h1>
            <p className="text-xl text-subtle max-w-2xl mx-auto leading-relaxed">
              Not a list of scary vulnerabilities. A clear roadmap to fix your web application and sleep better.
            </p>
          </div>
        </section>

        <Section id="report" title="The Report" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-text">You get one PDF. Clear. No fluff. Organized like this:</p>
            <div className="space-y-4">
              <div className="card">
                <p className="font-semibold text-text mb-2">Executive Summary</p>
                <p className="text-subtle text-sm">
                  What was tested. What was found. The risk level. What to do first. This is for your board/stakeholders.
                </p>
              </div>
              <div className="card">
                <p className="font-semibold text-text mb-2">Findings (Detailed)</p>
                <p className="text-subtle text-sm">
                  For each vulnerability: what it is, how I found it, why it matters, how to reproduce it, and step-by-step how to fix it.
                </p>
              </div>
              <div className="card">
                <p className="font-semibold text-text mb-2">Proof of Concept</p>
                <p className="text-subtle text-sm">
                  Evidence. Screenshots. Code snippets. Proof that this isn't theoretical. It's real and exploitable right now.
                </p>
              </div>
              <div className="card">
                <p className="font-semibold text-text mb-2">Remediation Plan</p>
                <p className="text-subtle text-sm">
                  Prioritized list. Which vulnerabilities to fix first. Time estimates. Who should do it (backend, frontend, devops).
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="after" title="After the report" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-text">I don't just hand you a report and disappear:</p>
            <div className="card space-y-4">
              <ul className="space-y-3 text-text text-base">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-semibold">•</span>
                  <span>30 days of email support. Questions about the findings? Ask.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-semibold">•</span>
                  <span>Discounted retest to verify your fixes actually solved the problem.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-semibold">•</span>
                  <span>You know exactly what to do and how to do it. No more guessing.</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="confidence" title="What changes" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card space-y-3">
                <p className="text-text font-semibold">Before testing</p>
                <ul className="text-subtle text-sm space-y-2">
                  <li>✗ You don't know what's vulnerable</li>
                  <li>✗ You're hoping nothing breaks</li>
                  <li>✗ Security feels abstract</li>
                  <li>✗ You're a liability to your customers</li>
                </ul>
              </div>
              <div className="card space-y-3 bg-accent/5 border-accent/50">
                <p className="text-accent font-semibold">After testing</p>
                <ul className="text-subtle text-sm space-y-2">
                  <li>✓ You know exactly what's wrong</li>
                  <li>✓ You have a clear roadmap to fix it</li>
                  <li>✓ Security is concrete and actionable</li>
                  <li>✓ You can tell customers "We tested this"</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-subtle text-base mt-6">
              That's the difference. Knowledge. Confidence. Peace of mind.
            </p>
          </div>
        </Section>

        <section className="section-shell">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold text-text">Ready to know what's actually broken?</h2>
            <p className="text-subtle text-lg">
              Get a clear report. Know exactly what to fix. Sleep better.
            </p>
            <CTAButton href="/#contact">Request your test</CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
