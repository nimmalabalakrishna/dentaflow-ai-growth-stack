import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-[var(--shadow-glow)] bg-gradient-to-r from-primary to-accent hover:scale-110 transition-all duration-300 z-50 p-0"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] bg-card border border-border rounded-lg shadow-[var(--shadow-card)] flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-5 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Hi! Need help?</h3>
              <p className="text-sm opacity-90">We typically respond in 2 minutes</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-white/10 h-8 w-8"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Body */}
          <div className="flex-1 p-5 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-foreground">
                  👋 Welcome! Ask us anything about DentaFlow AI or book a demo.
                </p>
              </div>
              
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3"
                  onClick={() => window.location.href = 'tel:+1-555-0123'}
                >
                  📞 Call us now
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3"
                  onClick={() => window.location.href = 'mailto:hello@dentaflow.ai'}
                >
                  ✉️ Send us an email
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-4 py-2 bg-secondary text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
