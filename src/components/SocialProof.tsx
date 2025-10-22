import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const SocialProof = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "250-620%",
      label: "Revenue Increase",
      description: "From automated patient retention systems"
    },
    {
      icon: Clock,
      value: "40-50%",
      label: "Staff Time Reduction",
      description: "Through intelligent workflow automation"
    },
    {
      icon: TrendingUp,
      value: "350-900%",
      label: "Average ROI",
      description: "Within first 6 months of implementation"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Results Across <span className="text-primary">50+ Dental Practices</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real systems. Real automation. Real revenue impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(0_72%_51%/0.2)]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
