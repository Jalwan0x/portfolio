import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import { CTAButton } from "../components/CTAButton";

export const metadata = {
  title: "Frequently Asked Questions | Jalwan",
  description: "Common questions about web application penetration testing, pricing, timeline, and process.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-shell pb-8 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-text leading-tight">
              Common questions
            </h1>
            <p className="text-xl text-subtle max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about web application penetration testing.
            </p>
          </div>
        </section>

        <Section id="faq" title="" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="card cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-text">
                <span>How much does a pentest cost?</span>
                <span className="text-accent group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-subtle text-sm mt-3 ml-4">As an independent researcher, I don't have the overhead of big firms. <span className="text-accent font-semibold">For your first test, I offer a discount.</span> We'll discuss and I'll give you the best price for your situation.</p>
            </details>
            <details className="card cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-text">
                <span>How long does testing take?</span>
                <span className="text-accent group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-subtle text-sm mt-3 ml-4">Depends on your web application's complexity. Simple applications: 7 days. More complex ones: up to 2 weeks. Day 0 you grant access, I test thoroughly, then you get the report. Fast compared to big firms (3+ months), but not rushed.</p>
            </details>
            <details className="card cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-text">
                <span>Do you test internal tools or just customer-facing apps?</span>
                <span className="text-accent group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-subtle text-sm mt-3 ml-4">Both. If it's connected to your infrastructure or handles company data, I can test it. Let me know what you need secured.</p>
            </details>
            <details className="card cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-text">
                <span>What if you don't find anything?</span>
                <span className="text-accent group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-subtle text-sm mt-3 ml-4">Unlikely. But if your web application genuinely has no exploitable issues, you'll get a report saying so. That's still valuable.</p>
            </details>
            <details className="card cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-text">
                <span>Will you disclose vulnerabilities publicly?</span>
                <span className="text-accent group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-subtle text-sm mt-3 ml-4">No. Everything stays private. You get the report. No one else does. We can sign an NDA if you want.</p>
            </details>
            <details className="card cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-text">
                <span>What payment methods do you accept?</span>
                <span className="text-accent group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-subtle text-sm mt-3 ml-4">Bank transfer, PayPal, or cryptocurrency. 50% upfront, 50% on delivery of the report. We'll discuss payment details after we agree on scope.</p>
            </details>
            <details className="card cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-text">
                <span>Do you provide retest services?</span>
                <span className="text-accent group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-subtle text-sm mt-3 ml-4">Yes. After you fix the issues, I can verify your fixes at a discounted rate. This ensures the vulnerabilities are actually resolved.</p>
            </details>
            <details className="card cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-text">
                <span>What do you need from me to start testing?</span>
                <span className="text-accent group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-subtle text-sm mt-3 ml-4">Test credentials (or a way to create them), the scope (URLs/domains to test), and any areas you're specifically concerned about. That's it. I handle the rest.</p>
            </details>
            <details className="card cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-text">
                <span>Do you offer ongoing security consulting?</span>
                <span className="text-accent group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-subtle text-sm mt-3 ml-4">Not right now. I focus on penetration testing. But I can recommend you to trusted security consultants if you need ongoing help.</p>
            </details>
          </div>
        </Section>

        <section className="section-shell">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold text-text">Still have questions?</h2>
            <p className="text-subtle text-lg max-w-2xl mx-auto">
              Send me an email or fill out the contact form. I'll get back to you within 24 hours.
            </p>
            <CTAButton href="/#contact">Get in touch</CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
