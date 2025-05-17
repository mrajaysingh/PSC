import { Dialog } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: {
    image: string;
    title: string;
    description: string;
  } | null;
  onNext: () => void;
  onPrevious: () => void;
}

export function ImageModal({
  isOpen,
  onClose,
  currentImage,
  onNext,
  onPrevious,
}: ImageModalProps) {
  if (!currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative w-[90vw] max-w-[900px] bg-background/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            {/* Close button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-2 z-50 bg-background shadow-md hover:bg-background/90 border-none group"
              onClick={onClose}
            >
              <X className="h-4 w-4 group-hover:text-[#E5B033]" />
            </Button>

            {/* Navigation buttons */}
            <div className="absolute left-4 top-[50%] -translate-y-1/2 z-50">
              <Button
                variant="outline"
                size="icon"
                className="bg-background shadow-md hover:bg-background/90 border-none group"
                onClick={onPrevious}
              >
                <ChevronLeft className="h-6 w-6 group-hover:text-[#E5B033]" />
              </Button>
            </div>

            <div className="absolute right-4 top-[50%] -translate-y-1/2 z-50">
              <Button
                variant="outline"
                size="icon"
                className="bg-background shadow-md hover:bg-background/90 border-none group"
                onClick={onNext}
              >
                <ChevronRight className="h-6 w-6 group-hover:text-[#E5B033]" />
              </Button>
            </div>

            {/* Image container */}
            <div className="relative w-full overflow-hidden" style={{ height: 'calc(70vh - 100px)' }}>
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image details */}
            <div className="p-4 bg-background">
              <h3 className="text-xl font-semibold mb-2">{currentImage.title}</h3>
              <p className="text-muted-foreground">{currentImage.description}</p>
            </div>
          </div>
        </div>
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/60 -z-10" onClick={onClose} />
      </div>
    </Dialog>
  );
} 