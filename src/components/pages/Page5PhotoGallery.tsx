import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Camera, X } from "lucide-react";
import { FAIRYTALE_CONFIG, GalleryPhotoConfig } from "../../config/fairytaleConfig";
import { BuntingGarlandSvg } from "../RoyalIllustrations";

interface Page5PhotoGalleryProps {
  onNext: () => void;
}

interface VerifiedPhoto extends GalleryPhotoConfig {
  src: string;
}

export function Page5PhotoGallery({ onNext }: Page5PhotoGalleryProps) {
  const [failedFiles, setFailedFiles] = useState<Record<string, boolean>>({});
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const allPhotos: VerifiedPhoto[] = FAIRYTALE_CONFIG.page5Gallery.photos.map((item) => ({
    ...item,
    src: `${FAIRYTALE_CONFIG.page5Gallery.photosBasePath}${item.filename}`,
  }));

  const visiblePhotos = allPhotos.filter((photo) => !failedFiles[photo.filename]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight") {
        setLightboxIdx((i) =>
          i === null || visiblePhotos.length === 0 ? null : (i + 1) % visiblePhotos.length,
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIdx((i) =>
          i === null || visiblePhotos.length === 0
            ? null
            : (i - 1 + visiblePhotos.length) % visiblePhotos.length,
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIdx, visiblePhotos.length]);

  const activePhoto =
    lightboxIdx !== null && lightboxIdx < visiblePhotos.length ? visiblePhotos[lightboxIdx] : null;

  return (
    <div className="flex-1 flex flex-col items-center px-4 pb-6 relative text-center text-white overflow-x-clip">
      {/* Festive Bunting Garland across top */}
      <div className="w-[108%] -mx-4 -mt-1 pointer-events-none">
        <BuntingGarlandSvg className="w-full h-14 drop-shadow" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-1 mb-5 max-w-[320px]"
      >
        <h1 className="font-display text-3xl font-bold text-[#FFF7FB]">
          {FAIRYTALE_CONFIG.page5Gallery.heading}
        </h1>
        <p className="text-xs text-pink-200/90 mt-1.5 leading-relaxed">
          {FAIRYTALE_CONFIG.page5Gallery.subheading}
        </p>
      </motion.div>

      {/* Photo Garland Grid OR Sweet Royal Memory Box Empty State */}
      {visiblePhotos.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[320px] my-3 rounded-3xl bg-white/10 backdrop-blur-md border border-pink-200/30 px-6 py-7 shadow-xl flex flex-col items-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#9E1B4F]/80 border border-[#FCE08B]/60 flex items-center justify-center mb-3 shadow-md">
            <Camera className="w-7 h-7 text-[#FCE08B]" />
          </div>
          <h2 className="font-display text-lg font-semibold text-[#FFF7FB]">
            {FAIRYTALE_CONFIG.page5Gallery.emptyBoxTitle}
          </h2>
          <p className="text-xs text-pink-100/85 leading-relaxed mt-2">
            {FAIRYTALE_CONFIG.page5Gallery.emptyBoxBody}
          </p>
        </motion.div>
      ) : (
        <div className="relative w-full max-w-[360px] my-1 space-y-5">
          <p className="text-[11px] text-pink-200/80 tabular-nums">
            {visiblePhotos.length} {visiblePhotos.length === 1 ? "memory" : "memories"} · Tap any photo to view full size
          </p>

          {Array.from({ length: Math.ceil(visiblePhotos.length / 2) }, (_, rowIdx) => {
            const pair = visiblePhotos.slice(rowIdx * 2, rowIdx * 2 + 2);
            return (
              <div key={rowIdx} className="relative">
                {/* Hanging Garland String behind each row of Polaroids */}
                <svg
                  viewBox="0 0 360 32"
                  className="w-full h-6 -mb-3.5 opacity-65 pointer-events-none"
                  fill="none"
                >
                  <path d="M4 6Q180 30 356 6" stroke="#FCE08B" strokeWidth="1.5" />
                </svg>

                <div className="grid grid-cols-2 gap-3.5 justify-items-center">
                  {pair.map((photo, colIdx) => {
                    const idx = rowIdx * 2 + colIdx;
                    return (
                      <motion.button
                        key={photo.filename}
                        type="button"
                        onClick={() => setLightboxIdx(idx)}
                        initial={{ opacity: 0, y: 14, rotate: photo.tiltDeg }}
                        animate={{ opacity: 1, y: 0, rotate: photo.tiltDeg }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                        className="relative w-full max-w-[155px] bg-[#FFFDF9] rounded-xl p-2 pb-3 shadow-[0_12px_28px_rgba(10,4,20,0.45)] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FCE08B]"
                      >
                        {/* Pink Ribbon Pin */}
                        <span
                          className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#E86D9C] border-2 border-[#FCE08B] shadow"
                          aria-hidden="true"
                        />

                        <div className="w-full aspect-[4/4.5] rounded-lg overflow-hidden bg-[#F3E6EC]">
                          <img
                            src={photo.src}
                            alt={photo.caption}
                            decoding="async"
                            onError={() =>
                              setFailedFiles((prev) =>
                                prev[photo.filename] ? prev : { ...prev, [photo.filename]: true },
                              )
                            }
                            className="w-full h-full object-cover object-top transition-transform duration-300"
                          />
                        </div>

                        <p className="font-script text-xl leading-tight text-[#4D2A3C] text-center mt-2 px-1 truncate">
                          {photo.caption}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Angled Paper Ribbon Banner */}
      <motion.div
        initial={{ opacity: 0, rotate: -2 }}
        animate={{ opacity: 1, rotate: -1.5 }}
        className="mt-6 bg-[#FFFDF9] text-[#331B29] px-6 py-2.5 rounded-sm shadow-lg border border-[#D9A74A]/45"
      >
        <p className="font-display text-sm font-semibold italic">
          {FAIRYTALE_CONFIG.page5Gallery.bannerText}
        </p>
      </motion.div>

      {/* One Last Thing CTA */}
      <motion.button
        type="button"
        onClick={onNext}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        className="mt-5 min-h-[48px] px-8 py-3 rounded-full bg-[#9E1B4F] text-white font-semibold text-sm shadow-[0_10px_28px_rgba(0,0,0,0.35)] border border-pink-300/35 hover:bg-[#B2225B] transition-colors cursor-pointer whitespace-nowrap"
      >
        {FAIRYTALE_CONFIG.page5Gallery.nextButtonText}
      </motion.button>

      {/* Full-Screen Photo Lightbox */}
      <AnimatePresence>
        {activePhoto && lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#12081E]/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIdx(null)}
              aria-label="Close photo lightbox"
              className="absolute top-4 right-4 min-h-[44px] min-w-[44px] rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              key={activePhoto.filename}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-[#FFFDF9] rounded-2xl p-3 pb-5 shadow-2xl"
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.caption}
                className="w-full max-h-[65vh] object-contain rounded-xl bg-[#F3E6EC]"
              />
              <p className="font-script text-3xl text-[#9E1B4F] text-center mt-3">
                {activePhoto.caption}
              </p>

              {visiblePhotos.length > 1 && (
                <div className="flex items-center justify-between mt-3 px-2">
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIdx(
                        (lightboxIdx - 1 + visiblePhotos.length) % visiblePhotos.length,
                      )
                    }
                    aria-label="Previous photo"
                    className="min-h-[44px] min-w-[44px] rounded-full bg-[#FAF0F4] text-[#9E1B4F] flex items-center justify-center hover:bg-[#F3DCE6] cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <span className="text-xs font-medium text-[#765567] tabular-nums">
                    {lightboxIdx + 1} / {visiblePhotos.length}
                  </span>

                  <button
                    type="button"
                    onClick={() => setLightboxIdx((lightboxIdx + 1) % visiblePhotos.length)}
                    aria-label="Next photo"
                    className="min-h-[44px] min-w-[44px] rounded-full bg-[#FAF0F4] text-[#9E1B4F] flex items-center justify-center hover:bg-[#F3DCE6] cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
