import { MessageCircle, Search, Shield, FileCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Quick chat",
    description: "Tell me about your app. I'll ask a few questions to understand the scope.",
    duration: "5 minutes",
  },
  {
    number: "02",
    icon: Search,
    title: "Scope & quote",
    description: "I review your app and send you a clear price. No surprises.",
    duration: "24 hours",
  },
  {
    number: "03",
    icon: Shield,
    title: "Deep testing",
    description: "I manually test your app the same way an attacker would, focusing on things scanners miss.",
    duration: "3-5 days",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Actionable report",
    description: "You get a clear report with severity ratings and step-by-step fix guidance.",
    duration: "Delivered",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-heading mb-6 heading-display">
            From message to report
          </h2>
          <p className="text-lg text-muted-foreground">
            No lengthy contracts. No meetings. Just results.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative p-8 rounded-2xl bg-surface-elevated border border-border group hover:border-primary/20 transition-all duration-300"
              >
                {/* Step number badge */}
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Step {step.number}
                </div>
                
                <div className="pt-2">
                  <div className="w-14 h-14 rounded-2xl bg-highlight flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-heading mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  
                  <span className="inline-flex items-center text-xs font-medium text-primary bg-highlight px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
