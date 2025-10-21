import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 bg-card border-border">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-bold">Book Your AI Strategy Session</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden px-6 pb-6">
          <iframe
            src="https://cal.com/balakrishna-azsutt/growth-call-with-nimmala"
            className="w-full h-full border-0 rounded-lg"
            title="Book a meeting"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
