import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface FinalCTAProps {
  onBookingClick: () => void;
}

const FinalCTA = ({ onBookingClick }: FinalCTAProps) => {
  const { trackCTAClick } = useAnalytics();

  const handleCTAClick = () => {
    trackCTAClick('final_cta', 'Book Your Free Strategy Session');
    onBookingClick();
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-card to-background">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Limited Strategy Sessions Available</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Transform Your Practice
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              with AI Automation?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute AI Strategy Session to discover which system will deliver the fastest ROI for your practice—no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={handleCTAClick}
            >
              Book Your Free Strategy Session
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="pt-6 space-y-2">
            <p className="text-sm text-muted-foreground">
              During your session, we'll:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground">
              <span>✓ Analyze your current revenue gaps</span>
              <span>✓ Map your highest-ROI opportunity</span>
              <span>✓ Show exact system implementation plan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
