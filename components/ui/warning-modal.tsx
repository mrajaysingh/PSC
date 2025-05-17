import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

interface WarningModalProps {
  isOpen: boolean;
  onAcknowledge: () => void;
}

export function WarningModal({ isOpen, onAcknowledge }: WarningModalProps) {
  const [timeLeft, setTimeLeft] = useState(10);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowButton(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isOpen]);

  return (
    <Dialog modal open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="p-0 border-none max-w-[600px] !bg-[#020817] dark" hideCloseButton>
        <div className="p-6">
          {/* Logo and Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-[300px] h-[120px] mb-4">
              <Image
                src="/AUTHORIZATION/MOA.png"
                alt="Ministry of Corporate Affairs"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-2xl font-bold text-center text-white mb-2">Official Notice</h2>
            <div className="w-16 h-1 bg-[#E5B033] rounded"></div>
          </div>

          {/* Warning Content */}
          <div className="space-y-4 text-center mb-6">
            <p className="text-lg font-semibold text-white">
              This is an official educational website.
            </p>
            <p className="text-gray-300">
              Any unauthorized access, cyber threats, or illegal activities against this platform are strictly prohibited and punishable under the Information Technology Act, 2000 and other applicable laws.
            </p>
            <p className="text-gray-300">
              Strict legal action will be taken against individuals or entities engaging in any malicious activities.
            </p>
          </div>

          {/* Acknowledgment Button */}
          <div className="flex flex-col items-center justify-center gap-3">
            {!showButton ? (
              <div className="flex items-center justify-center gap-2">
                <div className="h-8 w-8 rounded-full border-2 border-[#E5B033] flex items-center justify-center">
                  <span className="text-[#E5B033] font-semibold">{timeLeft}</span>
                </div>
                <span className="text-gray-300">Please read the notice carefully</span>
              </div>
            ) : (
              <Button 
                onClick={onAcknowledge}
                className="bg-[#E5B033] hover:bg-[#E5B033]/90 text-black font-semibold px-8 py-2"
              >
                I Acknowledge and Agree
              </Button>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-400">
            © Government of India - Ministry of Corporate Affairs
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 