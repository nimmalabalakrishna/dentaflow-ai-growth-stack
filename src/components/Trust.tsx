import { Card } from "@/components/ui/card";
import { Shield, Lock, Award, Zap } from "lucide-react";

const Trust = () => {
  const trustItems = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with full BAA documentation and regular compliance audits"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "End-to-end encryption and secure API connections to protect sensitive patient information"
    },
    {
      icon: Award,
      title: "Performance Guarantee",
      description: "3x ROI guarantee within 6 months or we work at no charge until you achieve it"
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Direct integration with Dentrix, Open Dental, Eaglesoft, and other major PM systems"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on <span className="text-primary">Enterprise Standards</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Security, compliance, and performance guarantees you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
