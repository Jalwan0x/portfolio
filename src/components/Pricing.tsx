import { Check, X, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "Manual testing of your web app",
  "Authentication and authorization deep dive",
  "Broken access control and permission issues",
  "End to end business logic testing",
  "Private and sensitive data exposure checks",
  "Input handling and injection testing",
  "Common web vulnerabilities in real apps",
  "API behavior and data exposure review",
  "Proof of concept for every finding",
  "Screenshots, videos, and exact requests",
];

const notIncluded = [
  "Infrastructure/network testing",
  "Mobile native apps",
  "Source code review",
];

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-16 md:py-20 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Investment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-heading mb-6 heading-display">
            One service. Honest pricing.
          </h2>
          <p className="text-lg text-muted-foreground">
            No tiers. No upsells. Just the security review your app needs.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Gradient border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-3xl" />
            
            <div className="relative bg-card rounded-3xl p-8 md:p-10 border border-transparent">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                <ShieldCheck className="h-4 w-4" />
                Most Popular
              </div>
              
              <div className="text-center pt-4 mb-8">
                <h3 className="text-2xl font-semibold text-heading mb-4">
                  Web App Security Review
                </h3>
                <div className="mb-2">
                  <span className="text-5xl md:text-6xl font-semibold heading-display gradient-text">
                    $399
                  </span>
                  <span className="text-2xl md:text-3xl text-muted-foreground"> – </span>
                  <span className="text-5xl md:text-6xl font-semibold heading-display gradient-text">
                    $599
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Based on app complexity • Quote before you commit
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div>
                  <ul className="space-y-3">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Not included:</p>
                  <ul className="space-y-2">
                    {notIncluded.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <X className="h-4 w-4 text-muted-foreground/50" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Trust signal - Psychology: Risk reversal */}
              <div className="bg-highlight rounded-xl p-4 mb-8 text-center">
                <p className="font-medium text-foreground mb-1">💰 100% Money-Back Guarantee</p>
                <p className="text-sm text-muted-foreground">
                  If the report isn't useful to you, get a full refund. No questions asked.
                </p>
              </div>
              
              <Button
                onClick={scrollToContact}
                size="lg"
                className="w-full py-7 text-base font-medium rounded-xl group"
              >
                Get your free quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Delivery in 3-5 business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
