import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Systems from "@/components/Systems";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Trust from "@/components/Trust";
import FinalCTA from "@/components/FinalCTA";
import BookingModal from "@/components/BookingModal";
import ChatWidget from "@/components/ChatWidget";
import { useAnalytics } from "@/hooks/useAnalytics";

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { trackPageView, trackBookingModal } = useAnalytics();

  useEffect(() => {
    trackPageView('/');
  }, []);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
    trackBookingModal('open');
  };

  const handleModalClose = (open: boolean) => {
    setIsBookingModalOpen(open);
    if (!open) {
      trackBookingModal('close');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero onBookingClick={handleBookingClick} />
      <SocialProof />
      <Systems onBookingClick={handleBookingClick} />
      <Testimonials />
      <Trust />
      <FAQ />
      <FinalCTA onBookingClick={handleBookingClick} />
      <BookingModal 
        open={isBookingModalOpen} 
        onOpenChange={handleModalClose} 
      />
      <ChatWidget />
    </div>
  );
};

export default Index;
