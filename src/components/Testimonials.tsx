import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "DentaFlow recovered $180K in our first year by automating patient recalls and no-show prevention. Our staff actually has time to focus on patient care now instead of chasing appointments.",
      author: "Dr. Sarah Mitchell",
      role: "Practice Owner",
      practice: "Mitchell Dental Care",
      results: "$180K recovered, 22 hrs/week saved"
    },
    {
      quote: "We were skeptical about AI, but their revenue cycle system reduced our claim rejections by 87% and freed up our entire billing team to focus on complex cases. The ROI was undeniable.",
      author: "Jennifer Chen",
      role: "Practice Manager",
      practice: "Bright Smiles Dentistry",
      results: "87% fewer rejections, $95K additional collections"
    },
    {
      quote: "The lead response system is a game-changer. We went from losing 70% of our web inquiries to booking 60% of them. That's 10 new patients per month we would have lost to competitors.",
      author: "Dr. Marcus Thompson",
      role: "Owner & Dentist",
      practice: "Thompson Family Dentistry",
      results: "10 new patients/month, $120K annual revenue increase"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Practice Leaders Say About <span className="text-primary">DentaFlow AI</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from dental practices that chose systems over standalone tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary mb-6" />
              
              <p className="text-foreground mb-6 flex-1 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border pt-6 space-y-3">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.practice}</div>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-semibold text-primary">{testimonial.results}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
