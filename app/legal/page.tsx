import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";

export default function LegalPage() {
  return (
    <>
      <Header />
      <main>
        <Section title="Responsible Disclosure" eyebrow="Ethical commitments">
          <div className="card space-y-4 text-subtle leading-relaxed text-sm">
            <p className="text-text font-semibold text-lg">Policy</p>
            <p>I conduct testing only with written authorization and defined scope. Vulnerabilities are reported privately with remediation guidance before any disclosure.</p>
            <p>No exploitation beyond what is required to demonstrate impact. Data is handled securely and deleted after reporting unless otherwise agreed.</p>
            <p>Coordinated disclosure timelines are set with you. Public advisories are optional and only after fixes are confirmed.</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
