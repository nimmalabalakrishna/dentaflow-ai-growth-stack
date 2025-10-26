import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileCheck, MessageSquare, ArrowRight } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface SystemsProps {
  onBookingClick: () => void;
}

const Systems = ({ onBookingClick }: SystemsProps) => {
  const { trackCTAClick } = useAnalytics();

  const handleSystemCTAClick = (systemName: string) => {
    trackCTAClick('systems_section', `Learn More - ${systemName}`);
    onBookingClick();
  };

  const systems = [
    {
      icon: Users,
      name: "Patient Retention & Revenue Recovery System",
      tagline: "Turn missed appointments into recovered revenue",
      problem: "Your practice loses $80-180K annually from no-shows, missed recalls, and inactive patients.",
      solution: "Automated workflows that prevent revenue leakage through intelligent reminders, reactivation campaigns, and waitlist management.",
      benefits: [
        "250-620% revenue increase annually",
        "40-50% staff time reduction weekly",
        "350-900% ROI within 6 months",
        "HIPAA-compliant automation"
      ],
      roi: "3 months"
    },
    {
      icon: FileCheck,
      name: "Revenue Cycle & Claims Automation System",
      tagline: "Accelerate cash flow and eliminate claim rejections",
      problem: "Manual insurance verification and claim errors delay collections and waste valuable staff time.",
      solution: "Intelligent automation that verifies eligibility, scrubs claims before submission, and handles follow-ups automatically.",
      benefits: [
        "5% lift in total collections",
        "50% faster revenue cycle",
        "25-35% back-office time reduction weekly",
        "87% reduction in claim rejections"
      ],
      roi: "4 months"
    },
    {
      icon: MessageSquare,
      name: "Lead Response & New Patient Acquisition System",
      tagline: "Never lose another lead to slow response times",
      problem: "80% of dental inquiries never book because practices respond too slowly or not at all.",
      solution: "AI-powered instant response system with 24/7 chatbots, voice agents, and SMS follow-ups that book appointments automatically.",
      benefits: [
        "200-300% increase in monthly new patients",
        "150-400% boost in annual revenue",
        "300% higher conversion on inquiries",
        "80% reduction in staff workload"
      ],
      roi: "3 months"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Three Complete AI Systems.<br />
            <span className="text-primary">One Unified Revenue Engine.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each system solves a critical revenue challenge. Together, they transform your practice operations.
          </p>
        </div>

        <div className="space-y-12">
          {systems.map((system, index) => (
            <Card 
              key={index} 
              className="p-8 md:p-10 bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent">
                    <system.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{system.name}</h3>
                    <p className="text-lg text-primary">{system.tagline}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-destructive flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                        The Problem
                      </h4>
                      <p className="text-muted-foreground">{system.problem}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        The Solution
                      </h4>
                      <p className="text-muted-foreground">{system.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Quantified Impact:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {system.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm">
                      <span className="text-muted-foreground">ROI Timeline: </span>
                      <span className="font-semibold text-primary">{system.roi}</span>
                    </div>
                    <Button variant="ghost" className="text-primary" onClick={() => handleSystemCTAClick(system.name)}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
            onClick={() => {
              trackCTAClick('systems_bottom', 'Book Your AI Strategy Session');
              onBookingClick();
            }}
          >
            Book Your AI Strategy Session
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Systems;
