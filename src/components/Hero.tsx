import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import PDFDownloadButton from "./PDFDownloadButton";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-0 flex items-center py-12 md:py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />
      </div>
      
        <div className="container mb-0 pb-0">
        <div className="max-w-3xl mx-auto text-center">
          {/* Only one sample report button below the CTAs */}
          {/* Trust badge */}
          <div className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by SaaS founders
            </span>
          </div>
          
          <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-heading leading-[1.1] mb-6 heading-display">
            Most apps have security gaps.<br />
            <span className="block mt-2 gradient-text">I help find them before they turn into real problems.</span>
          </h1>

          <p className="opacity-0 animate-fade-in-up animation-delay-200 text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Manual security testing focused on what scanners miss.<br />
            Clear, practical reports you can actually act on.
          </p>
          
          {/* Social proof mini */}
          <div className="opacity-0 animate-fade-in-up animation-delay-300 flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Manual testing only</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Clear fix recommendations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Refund if not useful</span>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group px-8 py-7 text-base font-medium rounded-xl hover-lift"
            >
              Let’s talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <a 
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              See how it works
            </a>
          </div>
          <div className="flex justify-center mt-2 mb-0 pb-0">
            <PDFDownloadButton />
          </div>
        </div>
      </div>
      {/* Scroll indicator removed as requested */}
    </section>
  );
};

export default Hero;
