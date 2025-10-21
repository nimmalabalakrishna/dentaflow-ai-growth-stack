import { useState } from "react";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Systems from "@/components/Systems";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Trust from "@/components/Trust";
import FinalCTA from "@/components/FinalCTA";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
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
        onOpenChange={setIsBookingModalOpen} 
      />
    </div>
  );
};

export default Index;
