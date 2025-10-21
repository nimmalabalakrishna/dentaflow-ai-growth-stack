import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How is this different from buying individual AI tools?",
      answer: "Individual AI tools create fragmented workflows and require constant manual oversight. We build complete systems where multiple AI tools work together seamlessly, integrated with your existing practice management software. The result is true automation—not just more tools to manage."
    },
    {
      question: "What about data security and HIPAA compliance?",
      answer: "All our systems are built with HIPAA compliance from day one. We use enterprise-grade encryption, secure API connections, and conduct regular security audits. Your patient data never leaves approved, compliant systems, and we provide complete BAA (Business Associate Agreement) documentation."
    },
    {
      question: "How complex is the integration with our current systems?",
      answer: "We handle all technical integration work for you. Our systems connect directly with major practice management platforms like Dentrix, Open Dental, and Eaglesoft. Most implementations are completed within 2-4 weeks with minimal disruption to your daily operations."
    },
    {
      question: "What if the system doesn't deliver the promised ROI?",
      answer: "We stand behind our results with a performance guarantee. If your system doesn't generate at least 3x ROI within 6 months, we'll work additional hours at no charge until it does. Our success is directly tied to your measurable business outcomes."
    },
    {
      question: "Will this replace our staff or require new technical hires?",
      answer: "No. These systems eliminate repetitive administrative tasks so your team can focus on high-value patient interactions. You won't need to hire technical staff—we provide ongoing support and system optimization as part of our service."
    },
    {
      question: "How long before we see results?",
      answer: "Most practices see initial results within 30 days and full system ROI within 3-6 months. The patient retention system typically shows the fastest impact, often recovering missed revenue within the first billing cycle."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Questions About <span className="text-primary">AI Implementation</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Addressing the concerns that matter most to practice leaders
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
