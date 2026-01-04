import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatITest from "@/components/WhatITest";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <WhatITest />
        <HowItWorks />
        <Pricing />
        <Testimonial />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
