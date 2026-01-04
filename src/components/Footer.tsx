import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-heading">jalwan.app</span>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#what-i-test" className="text-muted-foreground hover:text-foreground transition-colors">
              What I Test
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground text-center md:text-right mt-6 md:mt-0">
            © 2026 <span className="font-semibold">jalwan.app</span>, Manual security for modern apps
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
