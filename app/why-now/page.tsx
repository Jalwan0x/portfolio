import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import { CTAButton } from "../components/CTAButton";

export const metadata = {
  title: "Why Your Web Application Needs Testing Now | Jalwan",
  description: "The longer you wait, the more expensive the breach. Here's what happens when attackers find your vulnerabilities first.",
};

export default function WhyNowPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-shell pb-8 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-text leading-tight">
              Why you can't wait to fix this
            </h1>
            <p className="text-xl text-subtle max-w-2xl mx-auto leading-relaxed">
              Every day your web application is untested is another day an attacker might be finding what you missed.
            </p>
          </div>
        </section>

        <Section id="math" title="The math is brutal" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card space-y-3">
                <p className="text-accent font-semibold">Cost of testing now</p>
                <p className="text-3xl font-bold text-text">Affordable</p>
                <p className="text-subtle text-sm">7-14 days. Find issues. Fix them. Move on.</p>
              </div>
              <div className="card space-y-3 border-2 border-red-500/30">
                <p className="text-red-400 font-semibold">Cost of a breach later</p>
                <p className="text-3xl font-bold text-text">$100K+</p>
                <p className="text-subtle text-sm">Regulatory fines, lawsuits, lost customers, reputation damage.</p>
              </div>
            </div>
            <p className="text-center text-subtle text-base mt-6 italic">
              The longer you wait, the more expensive it becomes.
            </p>
          </div>
        </Section>

        <Section id="happening" title="What's happening right now" eyebrow="">
          <div className="max-w-3xl mx-auto">
            <div className="card space-y-4">
              <ul className="space-y-4 text-text text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                  <span>Automated scanners are running against your domain constantly. Looking for low-hanging fruit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                  <span>If they find something exploitable, it gets sold. Or used. Or worse.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                  <span>You won't know until it's too late. A breach is discovered months after it happens.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                  <span>Your customers find out. Your competitors find out. Your board finds out. Not ideal.</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="competition" title="Your competitors are already doing this" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-text">
              Security-conscious founders are getting their apps tested. They're fixing issues before attackers find them. They're sleeping better.
            </p>
            <p className="text-subtle text-base">
              If you're not doing it, you're behind. Not in a "nice to have" way. In a "real risk" way.
            </p>
            <div className="card space-y-4 mt-6">
              <p className="text-text font-semibold">The founder who waits is the one writing the apology email to customers.</p>
              <p className="text-subtle text-sm">
                The founder who tests now is the one saying "We caught this before it became a problem."
              </p>
            </div>
          </div>
        </Section>

        <Section id="timeline" title="What happens if you wait" eyebrow="">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="card space-y-3">
              <p className="font-semibold text-text">Week 1</p>
              <p className="text-subtle text-sm">Nothing. Everything seems fine.</p>
            </div>
            <div className="card space-y-3">
              <p className="font-semibold text-text">Month 2</p>
              <p className="text-subtle text-sm">Attackers are still scanning. Some might have found something. You don't know.</p>
            </div>
            <div className="card space-y-3 border-2 border-red-500/30">
              <p className="font-semibold text-red-400">Month 4</p>
              <p className="text-subtle text-sm">You get a notification. Your data was breached. It happened 2 months ago. You're just finding out now.</p>
            </div>
            <div className="card space-y-3 border-2 border-red-500/30">
              <p className="font-semibold text-red-400">Month 6+</p>
              <p className="text-subtle text-sm">Lawsuits. Fines. Public announcement. Customer churn. Your reputation takes years to recover.</p>
            </div>
          </div>
        </Section>

        <section className="section-shell">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold text-text">Don't be the founder writing the breach apology email</h2>
            <p className="text-subtle text-lg">
              7-14 days. That's all it takes to know what's vulnerable. Then you fix it before attackers do.
            </p>
            <CTAButton href="/#contact">Get tested this week</CTAButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
