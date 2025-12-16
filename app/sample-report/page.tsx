import Link from "next/link";
import reportTemplate from "../../lib/report-template.json" assert { type: "json" };
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";

const findings = [
  {
    title: "Broken Access Control on project resources",
    cvss: 8.7,
    severity: "P1",
    impact: "Tenant data could be read and modified via predictable IDs.",
    remediation: "Enforce ownership checks on every project fetch and mutation; add ABAC policies and ID scoping; cover with tests."
  },
  {
    title: "JWT refresh token not rotated",
    cvss: 6.5,
    severity: "P2",
    impact: "Stolen refresh token yields persistent access; no device binding or rotation.",
    remediation: "Rotate refresh tokens on each use, bind to device fingerprint, expire on logout, and add IP/user-agent variance alerts."
  }
];

export default function SampleReportPage() {
  return (
    <>
      <Header />
      <main>
        <Section title="Sample Report" eyebrow="See what you’ll receive">
          <div className="card space-y-4">
            <p className="text-subtle text-sm">Interactive HTML preview</p>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4 space-y-3">
              <p className="text-text font-semibold">Executive Summary</p>
              <p className="text-subtle text-sm">A short, clear overview of what was tested, what was found, and the impact in plain language — followed by the details and how to fix them.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {findings.map((finding) => (
                <div key={finding.title} className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-2">
                  <p className="font-semibold text-text">{finding.title}</p>
                  <p className="text-sm text-subtle">CVSS v3.1: {finding.cvss} | Priority: {finding.severity}</p>
                  <p className="text-sm text-subtle">Business impact: {finding.impact}</p>
                  <p className="text-sm text-subtle">Remediation: {finding.remediation}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/api/report?download=1" className="btn-primary">Download PDF</Link>
              <Link href="/api/report" className="btn-secondary">View PDF in browser</Link>
            </div>
            <p className="text-sm text-subtle">Report format: Executive Summary, Scope, Methodology, Findings (title, CVSS, severity label, PoC, screenshots/requests, remediation), Risk Prioritization, Fix checklist, Appendix (logs & raw PoC), and Retest instructions.</p>
            <p className="text-sm text-subtle">Report template source: {reportTemplate.title} — CVSS {reportTemplate.cvss}, severity {reportTemplate.severity}, priority {reportTemplate.priority}.</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
