import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this a full penetration test?",
    answer:
      "This is a focused security review of your web application, looking at the areas attackers usually target in real products. It is not an infrastructure or network pentest. The focus is on authentication, permissions, business logic, and APIs because that is where most SaaS issues actually come from.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "From first message to final report, it usually takes 5 to 7 business days. The testing itself takes around 3 to 5 days, depending on complexity. I will confirm the timeline before starting.",
  },
  {
    question: "What access do you need to my app?",
    answer:
      "Usually I only need a test account on staging or production. If your app has multiple roles, access to each helps. No source code is required. I test the app from the outside.",
  },
  {
    question: "Will you sign an NDA?",
    answer:
      "Absolutely. I'm happy to sign your NDA before we begin. Confidentiality is non-negotiable in this work.",
  },
  {
    question: "What if you don't find anything?",
    answer:
      "It is rare, but possible. If no significant issues are found, I will explain what was tested and why your app held up. You still receive a full report, and the money back guarantee applies.",
  },
  {
    question: "How do you determine the price?",
    answer:
      "The price depends on your app’s size and complexity, including the number of features, user roles, and exposed surface. After you share your app, I will review it and confirm a firm price. There are no surprises or hidden fees.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-20 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-heading mb-6 heading-display">
            Got questions? I've got answers.
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-heading hover:no-underline py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
