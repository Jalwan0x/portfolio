import { CTAButton } from "./components/CTAButton";
import { Section } from "./components/Section";
import { Checklist } from "./components/Checklist";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/ContactForm";
import { PDFDownloadButton } from "./components/PDFDownloadButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-shell pb-8 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-textBright leading-tight animate-slideUp">
              Know what's exposed before someone else does
            </h1>
            <p className="text-xl text-subtle max-w-2xl mx-auto leading-relaxed animate-slideUp" style={{ animationDelay: '0.1s' }}>
              Manual testing shows you exactly how your app can be broken. What most companies don't know until it's too late.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <CTAButton href="/#contact">Request Penetration Test</CTAButton>
              <p className="text-sm text-subtle">No obligation to hire me after the assessment.</p>
            </div>
          </div>
        </section>

        {/* Mobile-first highlight of key risks */}
        <section className="section-shell pt-0">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <p className="text-lg text-textBright font-semibold flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden />
                Top risks I'm catching this week
              </p>
              <CTAButton href="/risks" variant="secondary">See all risks</CTAButton>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="card-stagger card p-4 space-y-1 bg-gradient-to-br from-danger/15 to-danger/5 border-danger/40 hover:border-danger/70 group cursor-pointer">
                <p className="text-danger font-semibold text-sm flex items-center gap-2 group-hover:text-danger transition-colors">🔐 Account Access</p>
                <p className="text-subtle text-xs">Authentication is broken in most apps. Can attackers log in as your users? They usually can.</p>
              </div>
              <div className="card-stagger card p-4 space-y-1 bg-gradient-to-br from-warning/15 to-warning/5 border-warning/40 hover:border-warning/70 group cursor-pointer">
                <p className="text-warning font-semibold text-sm flex items-center gap-2 group-hover:text-warning transition-colors">📊 Data Exposure</p>
                <p className="text-subtle text-xs">Your API probably leaks more than you think. IDs, user data, payment info. Most apps don't validate properly.</p>
              </div>
              <div className="card-stagger card p-4 space-y-1 bg-gradient-to-br from-accent/15 to-accent/5 border-accent/40 hover:border-accent/70 group cursor-pointer">
                <p className="text-accent font-semibold text-sm flex items-center gap-2 group-hover:text-accentLight transition-colors">💰 Business Logic</p>
                <p className="text-subtle text-xs">Can users skip payment? Duplicate orders? Access admin features? Most apps have at least one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick links to key pages */}
        <section className="section-shell pt-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="card-stagger card p-4 space-y-2 bg-gradient-to-br from-accent/15 to-accent/5 border-accent/40 hover:border-accent/70 group">
                <p className="text-accent font-semibold flex items-center gap-2 group-hover:text-accentLight transition-colors">⏳ Why now</p>
                <p className="text-subtle text-sm">Waiting invites breaches. See why timing matters.</p>
                <CTAButton href="/why-now" variant="secondary">Read why now</CTAButton>
              </div>
              <div className="card-stagger card p-4 space-y-2 bg-gradient-to-br from-accent/15 to-accent/5 border-accent/40 hover:border-accent/70 group">
                <p className="text-accent font-semibold flex items-center gap-2 group-hover:text-accentLight transition-colors">📄 What you get</p>
                <p className="text-subtle text-sm">See the report structure and post-test support.</p>
                <CTAButton href="/what-you-get" variant="secondary">See deliverables</CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* What This Testing Is Used For */}
        <Section id="value" title="What a web penetration test actually shows" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-text">You probably think your app is secure. Most founders do. Here's what testing usually finds:</p>
            <Checklist
              items={[
                "Who can access what. Authentication flaws are in almost every app.",
                "Data you thought was private. Broken APIs and missing validation leak it.",
                "Business logic abuse. Users can often do things you never intended.",
                "Endpoints you forgot existed. The features that ship with bugs."
              ]}
            />
            <p className="text-subtle text-base italic mt-6">Unknown doesn't mean safe. It just means you haven't tested it yet.</p>
          </div>
        </Section>

        {/* The Service */}
        <Section id="service" title="The assessment is comprehensive" eyebrow="">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-text mb-6">This isn't a vulnerability scan. It's a real security assessment:</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-stagger card">
                <p className="font-semibold text-lg text-text">Every user-facing feature</p>
                <p className="text-subtle mt-1 text-sm">Forms, workflows, and edge cases. I test like a real user and an attacker.</p>
              </div>
              <div className="card-stagger card">
                <p className="font-semibold text-lg text-text">All API endpoints</p>
                <p className="text-subtle mt-1 text-sm">Hidden endpoints, unauthenticated access, and privilege escalation paths.</p>
              </div>
              <div className="card-stagger card">
                <p className="font-semibold text-lg text-text">Authentication & authorization</p>
                <p className="text-subtle mt-1 text-sm">Session handling, token validation, and account isolation.</p>
              </div>
              <div className="card-stagger card">
                <p className="font-semibold text-lg text-text">Business logic</p>
                <p className="text-subtle mt-1 text-sm">How users interact with your system. Can they abuse pricing, orders, or workflows?</p>
              </div>
            </div>
            <p className="text-center text-subtle text-base mt-8">You get a detailed report with findings and context. You handle the fixes yourself.</p>
          </div>
        </Section>

        {/* Sample Report Preview */}
        <Section id="sample-report" title="See a Real Security Report" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-text">This is the exact report format you'll receive. Before attackers find these issues for you.</p>
            <p className="text-text">I run a full manual assessment against a controlled demo application so you can see how real security problems are documented clearly, without noise or filler.</p>
            <p className="text-lg text-textBright font-semibold">Inside the sample report:</p>
            <Checklist
              items={[
                "Real, exploitable issues that affect users, data, and revenue",
                "Clear explanation of what's at risk and why it matters",
                "Reproduction details your engineers can act on immediately",
                "No scanner screenshots. No false positives. Just real findings."
              ]}
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <PDFDownloadButton />
              <CTAButton href="/#contact" variant="secondary">Request a security assessment</CTAButton>
            </div>
          </div>
        </Section>

        {/* Who This Is For */}
        <Section id="who-for" title="Who this is for" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <Checklist
              items={[
                "Early-stage startups before launch that want to avoid public leaks",
                "SaaS products handling user data and payments",
                "Teams that want manual testing, not automated scanner reports",
                "Founders who want real issues surfaced, not paperwork"
              ]}
            />
            <p className="text-subtle text-base italic">I only take a small number of clients so I can go deep instead of rushing scans.</p>
          </div>
        </Section>

        {/* Why Choose Me */}
        <Section id="authority" title="Why manual testing matters" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <Checklist
              items={[
                "Manual testing finds what scanners miss. Real vulnerabilities, not false alarms.",
                "Found authentication bypass issues during independent research.",
                "Identified high-risk vulnerabilities in production-grade applications.",
                "You get clear findings. No noise, no CYA reports."
              ]}
            />
            <p className="text-subtle text-base italic mt-6">I'm onboarding my first private clients now. You get direct access and focused testing. No middlemen.</p>
          </div>
        </Section>

        {/* Why Not Others */}
        <Section id="compare" title="How I compare" eyebrow="">
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-text font-semibold border-b border-white/10"></th>
                    <th className="text-center p-4 text-text font-semibold border-b border-white/10">Automated Scanners</th>
                    <th className="text-center p-4 text-accent font-semibold border-b border-accent/50 bg-accent/5">Me (Independent)</th>
                    <th className="text-center p-4 text-text font-semibold border-b border-white/10">Other Enterprise Solutions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-subtle">Finds real vulnerabilities</td>
                    <td className="p-4 text-center">✗ Misses 80%</td>
                    <td className="p-4 text-center bg-accent/5">✓ Real flaws</td>
                    <td className="p-4 text-center">✓ Thorough</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-subtle">False positives</td>
                    <td className="p-4 text-center">✗ Tons of noise</td>
                    <td className="p-4 text-center bg-accent/5">✓ Zero</td>
                    <td className="p-4 text-center">✓ None</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-subtle">Business logic testing</td>
                    <td className="p-4 text-center">✗ Doesn't do this</td>
                    <td className="p-4 text-center bg-accent/5">✓ Yes, manual</td>
                    <td className="p-4 text-center">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-subtle">Speed</td>
                    <td className="p-4 text-center">✓ Instant</td>
                    <td className="p-4 text-center bg-accent/5">✓ 7-14 days</td>
                    <td className="p-4 text-center">✗ Longer timeline</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-subtle font-semibold">Cost</td>
                    <td className="p-4 text-center text-accent">$0-$2K</td>
                    <td className="p-4 text-center text-accent font-semibold bg-accent/5">85%+ less expensive</td>
                    <td className="p-4 text-center text-text">$3K-$8K</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-subtle text-base mt-8">
              Cheap scanners find noise. Expensive agencies take months. Manual testing from someone who actually finds bugs gives you real answers.
            </p>
          </div>
        </Section>

        {/* Next Steps */}
        <Section id="next-steps" title="What happens after you contact me" eyebrow="">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-stagger card">
                <p className="font-semibold text-lg text-text">Before the test</p>
                <ul className="text-subtle mt-3 text-sm space-y-2">
                  <li>We scope it out. What parts matter to test.</li>
                  <li>You give me access to the app or staging environment</li>
                  <li>7 to 14 days depending on how complex your app is</li>
                  <li>No commitment. This is just a test.</li>
                </ul>
              </div>
              <div className="card-stagger card">
                <p className="font-semibold text-lg text-text">The report</p>
                <ul className="text-subtle mt-3 text-sm space-y-2">
                  <li>Detailed findings with how each vulnerability works</li>
                  <li>Real exploits, not theoretical warnings</li>
                  <li>Clear explanation of what's at risk</li>
                  <li>No step-by-step fixes. That's your team's work.</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-subtle text-base mt-8">
              Most applications have real security issues. The best time to find them is before an attacker does.
            </p>
          </div>
        </Section>

        {/* Final CTA */}
        <section className="section-shell">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold text-text">Get a clear picture of your security</h2>
            <p className="text-subtle text-lg max-w-2xl mx-auto">A manual penetration test reveals what's actually exposed. No panic, no false positives. Just real findings and context.</p>
            <CTAButton href="/#contact">Schedule an Assessment</CTAButton>
            <p className="text-sm text-subtle mt-4">Questions first? <a href="/faq" className="text-accent hover:text-accentMuted">See the FAQ</a></p>
          </div>
        </section>

        {/* Contact */}
        <Section id="contact" title="Let's talk about your web application" eyebrow="">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
