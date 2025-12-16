import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import { Checklist } from "../components/Checklist";
import { CTAButton } from "../components/CTAButton";

export const metadata = {
  title: "What's Actually Vulnerable in Your Web Application | Jalwan",
  description: "Common vulnerabilities found in web applications. Most founders don't know they exist until it's too late.",
};

export default function RisksPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-shell pb-8 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-text leading-tight">
              What attackers actually look for in your web application
            </h1>
            <p className="text-xl text-subtle max-w-2xl mx-auto leading-relaxed">
              These vulnerabilities are in almost every app I test. Yours probably has at least 3 of them right now.
            </p>
          </div>
        </section>

        <Section id="auth" title="Authentication & Session Abuse" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-text">How attackers get into accounts that aren't theirs:</p>
            <Checklist
              items={[
                "Weak password reset mechanisms that let anyone change any user's password",
                "JWT tokens that don't expire or can be forged",
                "Session cookies stored in predictable ways that attackers can steal",
                "Login endpoints that give away whether an email exists (helps with targeted attacks)",
                "No rate limiting on login attempts (easy brute force)"
              ]}
            />
            <p className="text-subtle text-base italic mt-6">Cost when exploited: Total account takeover. Your users lose everything.</p>
          </div>
        </Section>

        <Section id="data" title="Data Exposure" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-text">How your customer data leaks:</p>
            <Checklist
              items={[
                "APIs that return sensitive data when you just ask for it (no proper checks)",
                "Predictable URLs/IDs that let attackers enumerate all users",
                "Unencrypted data in transit or at rest",
                "Database backups left in public cloud buckets",
                "API keys and secrets hardcoded in code or stored insecurely"
              ]}
            />
            <p className="text-subtle text-base italic mt-6">Cost when exploited: Regulatory fines (GDPR, CCPA), lawsuits, reputation damage, lost customers.</p>
          </div>
        </Section>

        <Section id="logic" title="Business Logic Flaws" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-text">How attackers break your business model:</p>
            <Checklist
              items={[
                "Bypassing payment checks (getting premium features for free)",
                "Manipulating prices or discounts at checkout",
                "Duplicate order exploitation or refund abuse",
                "Account balance manipulation",
                "Rate limit bypass to DoS your service"
              ]}
            />
            <p className="text-subtle text-base italic mt-6">Cost when exploited: Direct revenue loss. Sometimes thousands per day.</p>
          </div>
        </Section>

        <Section id="access" title="Privilege & Access Control" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-text">How attackers get admin access:</p>
            <Checklist
              items={[
                "Admin endpoints that are just hidden, not actually protected",
                "No proper permission checks (changing other users' data)",
                "Horizontal privilege escalation (accessing other users' accounts at the same level)",
                "Vertical privilege escalation (becoming an admin from a regular user)",
                "Insecure Direct Object References (guessing object IDs to access other data)"
              ]}
            />
            <p className="text-subtle text-base italic mt-6">Cost when exploited: Complete system compromise. Attackers become you.</p>
          </div>
        </Section>

        <section className="section-shell">
          <div className="max-w-3xl mx-auto">
            <div className="card space-y-4">
              <h2 className="text-2xl font-semibold text-text">The pattern?</h2>
              <p className="text-text text-lg">
                Your developers probably weren't thinking like attackers when they built this. They were thinking about features. Speed. Shipping fast.
              </p>
              <p className="text-subtle text-base mt-4">
                That's not their fault. Security requires a different mindset. Someone needs to break it intentionally. That's what I do.
              </p>
              <div className="pt-4">
                <CTAButton href="/#contact">Let me test your web application</CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
