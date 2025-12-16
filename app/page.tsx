import { CTAButton } from "./components/CTAButton";
import { Section } from "./components/Section";
import { Checklist } from "./components/Checklist";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-shell pb-8 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-textBright leading-tight animate-slideUp">
              Hackers are trying to break your web application right now
            </h1>
            <p className="text-xl text-subtle max-w-2xl mx-auto leading-relaxed animate-slideUp" style={{ animationDelay: '0.1s' }}>
              I find what they'll find. I test like an attacker. Then I show you how to fix it before someone malicious does.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <CTAButton href="/#contact">Request Penetration Test</CTAButton>
              <p className="text-sm text-subtle">I don't rush tests.</p>
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
              <div className="card p-4 space-y-1 bg-gradient-to-br from-danger/10 to-transparent border-danger/30 hover:border-danger/50 group cursor-pointer">
                <p className="text-textBright font-semibold text-sm flex items-center gap-2 group-hover:text-danger transition-colors">⚠️ Auth takeover</p>
                <p className="text-subtle text-xs">Weak resets + sloppy tokens = attackers log in as anyone.</p>
              </div>
              <div className="card p-4 space-y-1 bg-gradient-to-br from-warning/10 to-transparent border-warning/30 hover:border-warning/50 group cursor-pointer">
                <p className="text-textBright font-semibold text-sm flex items-center gap-2 group-hover:text-warning transition-colors">🕵️ Data leaks</p>
                <p className="text-subtle text-xs">Predictable IDs, no rate limits, sensitive data just spills out.</p>
              </div>
              <div className="card p-4 space-y-1 bg-gradient-to-br from-accent/10 to-transparent border-accent/30 hover:border-accent/50 group cursor-pointer">
                <p className="text-textBright font-semibold text-sm flex items-center gap-2 group-hover:text-accent transition-colors">💸 Payment bypass</p>
                <p className="text-subtle text-xs">Checkout logic flaws that let users skip paying or steal credits.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick links to key pages */}
        <section className="section-shell pt-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="card p-4 space-y-2 bg-gradient-to-br from-accent/15 to-accent/5 border-accent/40 hover:border-accent/70 group">
                <p className="text-textBright font-semibold flex items-center gap-2 group-hover:text-accent transition-colors">⏳ Why now</p>
                <p className="text-subtle text-sm">Waiting invites breaches. See why timing matters.</p>
                <CTAButton href="/why-now" variant="secondary">Read why now</CTAButton>
              </div>
              <div className="card p-4 space-y-2 bg-gradient-to-br from-accent/15 to-accent/5 border-accent/40 hover:border-accent/70 group">
                <p className="text-textBright font-semibold flex items-center gap-2 group-hover:text-accent transition-colors">📄 What you get</p>
                <p className="text-subtle text-sm">See the report structure and post-test support.</p>
                <CTAButton href="/what-you-get" variant="secondary">See deliverables</CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* What This Testing Is Used For */}
        <Section id="value" title="What vulnerabilities actually cost you" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-text">Here's what I find in nearly every application I test:</p>
            <Checklist
              items={[
                "Attackers accessing user accounts (broken authentication)",
                "Data leaking through APIs (no rate limits, bad validation)",
                "Users bypassing payments or stealing credits",
                "Admin features accessible to regular users"
              ]}
            />
            <p className="text-subtle text-base italic mt-6">These aren't theoretical. They're in your web application right now.</p>
          </div>
        </Section>

        {/* The Service */}
        <Section id="service" title="What I actually do" eyebrow="">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-text mb-6">One comprehensive assessment covering:</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card">
                <p className="font-semibold text-lg text-text">Every page, form, and workflow</p>
                <p className="text-subtle mt-1 text-sm">The stuff automated scanners miss</p>
              </div>
              <div className="card">
                <p className="font-semibold text-lg text-text">Your entire API surface</p>
                <p className="text-subtle mt-1 text-sm">Including the endpoints you forgot existed</p>
              </div>
              <div className="card">
                <p className="font-semibold text-lg text-text">Auth & session handling</p>
                <p className="text-subtle mt-1 text-sm">JWT, OAuth, cookies, the works</p>
              </div>
              <div className="card">
                <p className="font-semibold text-lg text-text">Business logic abuse</p>
                <p className="text-subtle mt-1 text-sm">The creative attacks scanners never find</p>
              </div>
            </div>
            <p className="text-center text-subtle text-base mt-8">You get one brutally honest report. That's it.</p>
          </div>
        </Section>

        {/* Why Choose Me */}
        <Section id="authority" title="Why me?" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <Checklist
              items={[
                "I've found critical vulnerabilities in apps processing millions in revenue",
                "Active bug bounty hunter with valid reports on major platforms",
                "I don't use automated scanners that flag false positives. Everything is manual.",
                "Worked with YC companies, fintech startups, and SaaS platforms you've heard of"
              ]}
            />
            <p className="text-subtle text-base italic mt-6">Real attackers work manually. That's how I work too.</p>
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
              As an independent researcher, I offer the same quality as enterprise solutions, but faster and at a better price. No overhead. No markup.
            </p>
          </div>
        </Section>

        {/* Guarantee & Timing */}
        <Section id="guarantee" title="What you're actually paying for" eyebrow="">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card">
                <p className="font-semibold text-lg text-text">Timeline</p>
                <ul className="text-subtle mt-3 text-sm space-y-2">
                  <li><span className="text-accent">Day 0:</span> Scope & access</li>
                  <li><span className="text-accent">Days 1-6+:</span> Thorough web-application testing</li>
                  <li><span className="text-accent">7-14 days:</span> You get the report</li>
                  <li>Depends on app complexity. Simple apps: 7 days. Complex ones: up to 2 weeks.</li>
                </ul>
              </div>
              <div className="card">
                <p className="font-semibold text-lg text-text">The Guarantee</p>
                <ul className="text-subtle mt-3 text-sm space-y-2">
                  <li>I will find at least 3-5 real issues</li>
                  <li>Not theoretical. Exploitable.</li>
                  <li>No false positives. Everything is confirmed.</li>
                  <li>If your web application is reasonably complex, I will find vulnerabilities.</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-subtle text-base mt-8 italic">
              Every app has problems. The question is who finds them first.
            </p>
          </div>
        </Section>

        {/* Final CTA */}
        <section className="section-shell">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold text-text">Ready to know what's actually wrong?</h2>
            <p className="text-subtle text-lg max-w-2xl mx-auto">Stop guessing. Get a real security assessment from someone who tests like attackers actually do.</p>
            <CTAButton href="/#contact">Request Your Test</CTAButton>
            <p className="text-sm text-subtle mt-4">Have questions? <a href="/faq" className="text-accent hover:text-accentMuted">Check the FAQ</a></p>
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
