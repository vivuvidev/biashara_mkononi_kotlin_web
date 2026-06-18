import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dialog as DialogPrimitive } from "radix-ui";

interface Screenshot {
  src: string;
  alt: string;
}

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
}

export default function ScreenshotCarousel({ screenshots }: ScreenshotCarouselProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const touchStartX = useRef(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
  };

  return (
    <>
      {/* Gallery */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => openLightbox(i)}
            className="flex-none w-40 md:w-48 rounded-2xl overflow-hidden border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Open ${shot.alt} in full screen`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={192}
              height={416}
              className="w-full h-auto object-cover block"
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogPortal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 duration-200 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />

          <DialogPrimitive.Content
            className="fixed inset-0 z-50 flex items-center justify-center outline-none"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <DialogTitle className="sr-only">Screenshot preview</DialogTitle>
            <DialogDescription className="sr-only">
              {screenshots[lightboxIndex]?.alt}
            </DialogDescription>

            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Image
                  src={screenshots[lightboxIndex]?.src ?? ""}
                  alt={screenshots[lightboxIndex]?.alt ?? ""}
                  width={440}
                  height={954}
                  className="max-h-[88vh] max-w-[80vw] w-auto h-auto object-contain rounded-2xl shadow-2xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <p
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums pointer-events-none"
              aria-live="polite"
            >
              {lightboxIndex + 1} / {screenshots.length}
            </p>

            <DialogClose asChild>
              <button
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </DialogClose>

            <button
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              onClick={prev}
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              onClick={next}
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </>
  );
}
