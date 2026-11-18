import React from "react";
import { ChevronLeft, Heart, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { FAIRYTALE_CONFIG } from "../config/fairytaleConfig";
import { calculateDaysTogether } from "../utils/dateUtils";
import { RoyalCrownSvg } from "./RoyalIllustrations";

interface KingdomChromeProps {
  currentPage: number;
  totalPages: number;
  darkTheme?: boolean;
  onBack: () => void;
  onCrownClick: () => void;
  crownTaps: number;
  showSecretNote: boolean;
  onCloseSecretNote: () => void;
}

export function KingdomChrome({
  currentPage,
  totalPages,
  darkTheme = false,
  onBack,
  onCrownClick,
  crownTaps,
  showSecretNote,
  onCloseSecretNote,
}: KingdomChromeProps) {
  const daysTogether = calculateDaysTogether(FAIRYTALE_CONFIG.relationshipStartDate);

  return (
    <>
      <header className="relative z-30 w-full px-3 pt-3 pb-1 flex items-center justify-between gap-2">
        {/* Left: Discreet Back Button */}
        <div className="w-11 flex items-center justify-start shrink-0">
          {currentPage > 1 ? (
            <button
              type="button"
              onClick={onBack}
              aria-label="Go to previous chapter"
              className={`min-h-[44px] min-w-[44px] rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                darkTheme
                  ? "text-pink-100/90 hover:bg-white/10"
                  : "text-[#765567] hover:bg-[#9E1B4F]/10 hover:text-[#9E1B4F]"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          ) : (
            <span className="w-11" aria-hidden="true" />
          )}
        </div>

        {/* Center: Clean unboxed metadata + progress dots */}
        <div className="flex flex-col items-center text-center min-w-0">
          <div
            className={`flex items-center gap-1.5 text-[11px] font-medium tracking-tight truncate ${
              darkTheme ? "text-pink-100/90" : "text-[#765567]"
            }`}
          >
            <Heart
              className={`w-3 h-3 shrink-0 ${
                darkTheme ? "text-pink-300 fill-pink-300" : "text-[#9E1B4F] fill-[#9E1B4F]"
              }`}
            />
            <span className="truncate">{FAIRYTALE_CONFIG.madeWithLoveLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums whitespace-nowrap">
              {daysTogether} {daysTogether === 1 ? "day" : "days"} of loving you
            </span>
          </div>

          {/* Chapter progress indicator */}
          <div
            className="flex items-center gap-1.5 mt-1.5"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={totalPages}
            aria-valuenow={currentPage}
            aria-label={`Chapter ${currentPage} of ${totalPages}`}
          >
            {Array.from({ length: totalPages }, (_, i) => {
              const step = i + 1;
              const isActive = step === currentPage;
              const isVisited = step < currentPage;
              return (
                <span
                  key={step}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? darkTheme
                        ? "w-5 bg-[#FCE08B]"
                        : "w-5 bg-[#9E1B4F]"
                      : isVisited
                        ? darkTheme
                          ? "w-2 bg-pink-200/75"
                          : "w-2 bg-[#D685A6]"
                        : darkTheme
                          ? "w-1.5 bg-white/25"
                          : "w-1.5 bg-[#DFC3D1]"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Right: Clickable Crown Easter Egg */}
        <div className="w-11 flex items-center justify-end shrink-0">
          <button
            type="button"
            onClick={onCrownClick}
            aria-label="Royal crown keepsake"
            title={
              crownTaps > 0 && crownTaps < FAIRYTALE_CONFIG.crownEasterEgg.tapsRequired
                ? `${FAIRYTALE_CONFIG.crownEasterEgg.tapsRequired - crownTaps} more taps...`
                : "Tap the royal crown"
            }
            className="min-h-[44px] min-w-[44px] rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer"
          >
            <RoyalCrownSvg className="w-7 h-6 drop-shadow-sm" />
          </button>
        </div>
      </header>

      {/* Secret Crown Easter Egg Modal */}
      <AnimatePresence>
        {showSecretNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1F0F2C]/65 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onCloseSecretNote}
          >
            <motion.div
              initial={{ scale: 0.9, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 12, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-3xl bg-[#FFF9FB] border-2 border-[#D9A74A] shadow-2xl p-6 text-center text-[#331B29]"
            >
              <button
                type="button"
                onClick={onCloseSecretNote}
                aria-label="Close secret note"
                className="absolute top-3 right-3 min-h-[40px] min-w-[40px] rounded-full flex items-center justify-center text-[#765567] hover:bg-[#9E1B4F]/10 hover:text-[#9E1B4F] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-center mb-3">
                <RoyalCrownSvg className="w-12 h-10" />
              </div>

              <h3 className="font-display text-xl font-bold text-[#9E1B4F] mb-2">
                {FAIRYTALE_CONFIG.crownEasterEgg.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#4E2F3F] mb-4">
                {FAIRYTALE_CONFIG.crownEasterEgg.message}
              </p>

              <p className="font-script text-2xl text-[#9E1B4F]">
                Always, {FAIRYTALE_CONFIG.kingSignature} ♡
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
