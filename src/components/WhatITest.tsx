
import { ShieldAlert, Users, CreditCard, Workflow, Code2, Globe2 } from "lucide-react";

const testAreas = [
  {
    icon: Users,
    title: "Account takeover paths",
    description: "Login bypasses, weak password resets, login state mistakes",
  },
  {
    icon: ShieldAlert,
    title: "Broken access control",
    description: "Viewing other users' data, privilege escalation, missing auth checks",
  },
  {
    icon: CreditCard,
    title: "Payment manipulation",
    description: "Price tampering, trial abuse, refund exploitation",
  },
  {
    icon: Workflow,
    title: "Business logic flaws",
    description: "Skipping steps, race conditions, state manipulation",
  },
  {
    icon: Code2,
    title: "API vulnerabilities",
    description: "Mass data extraction, injection points, rate limit bypasses",
  },
  {
    icon: Globe2,
    title: "Others",
    description: "Hidden edge cases most teams never test",
  },
];

const WhatITest = () => {
  return (
    <section id="what-i-test" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            The Real Threats
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-heading mb-6 heading-display">
            What hackers actually exploit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These aren't theoretical risks. These are the exact vulnerabilities I find in real apps every week.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {testAreas.map((area, index) => (
              <div
                key={area.title}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-highlight flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading mb-1 text-lg">{area.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Psychology: Loss aversion */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground italic">
              "The average cost of a data breach for small businesses is $120,000. A security review costs a fraction of that."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatITest;
