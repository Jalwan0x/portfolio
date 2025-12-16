import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import { Checklist } from "../components/Checklist";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Section title="Hi, I’m Jalwan" eyebrow="I provide web penetration testing">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-4 text-subtle leading-relaxed">
              <p className="text-text text-xl font-semibold">I help startups find and fix security issues early.</p>
              <p>I test your web application the way attackers do, then translate the findings into clear actions for your team. No hype, no noise.</p>
              <p>Background: manual-first testing and bug bounty experience; code review for teams that provide access; guidance on auth, secrets, and CI/CD basics.</p>
              <p>Disclosure: I only test with written permission and defined scope. Vulnerabilities are reported privately with remediation guidance before any disclosure.</p>
            </div>
            <div className="card">
              <p className="text-sm text-subtle">Signals</p>
              <Checklist
                items={[
                  "Limited monthly audits to maintain manual depth.",
                  "Manual first; tools only to extend coverage (not replace thinking).",
                  "Short, clear report with CVSS scores and business impact."
                ]}
              />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
