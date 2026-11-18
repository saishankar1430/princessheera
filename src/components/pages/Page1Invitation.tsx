import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { FAIRYTALE_CONFIG } from "../../config/fairytaleConfig";
import { RoyalCrownSvg, WaxSealSvg } from "../RoyalIllustrations";

interface Page1InvitationProps {
  onFirstInteract: () => void;
  onNext: () => void;
}

export function Page1Invitation({ onFirstInteract, onNext }: Page1InvitationProps) {
  const [stage, setStage] = useState<"sealed" | "opening" | "letter">("sealed");

  const handleBreakSeal = () => {
    if (stage !== "sealed") return;
    onFirstInteract();
    setStage("opening");
    window.setTimeout(() => {
      setStage("letter");
    }, 950);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-6 relative">
      <AnimatePresence mode="wait">
        {stage !== "letter" ? (
          <motion.div
            key="envelope-view"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.94 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center w-full"
          >
            {/* Tiny floating crown above envelope */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mb-3"
            >
              <RoyalCrownSvg className="w-11 h-9 drop-shadow-sm" />
            </motion.div>

            {/* Lavender & Gold Royal Envelope */}
            <motion.div
              onClick={handleBreakSeal}
              whileHover={stage === "sealed" ? { scale: 1.02 } : undefined}
              className="relative w-72 sm:w-80 h-48 rounded-2xl shadow-[0_18px_40px_rgba(125,75,140,0.22)] cursor-pointer select-none overflow-visible"
              style={{
                background: "linear-gradient(145deg, #D9C4F0 0%, #C2A5E3 100%)",
                border: "1.5px solid rgba(217,167,74,0.65)",
              }}
            >
              {/* Peeking mini castle inside envelope when opening */}
              <motion.div
                initial={{ y: 18, opacity: 0 }}
                animate={
                  stage === "opening"
                    ? { y: -32, opacity: 1 }
                    : { y: 18, opacity: 0 }
                }
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="absolute inset-x-4 top-2 h-32 rounded-xl bg-[#FFF9FB] border border-[#D9A74A]/60 shadow-md flex flex-col items-center justify-center z-10 pointer-events-none"
              >
                <Sparkles className="w-6 h-6 text-[#D9A74A] mb-1" />
                <span className="font-script text-2xl text-[#9E1B4F]">
                  {FAIRYTALE_CONFIG.page1Invitation.salutation}
                </span>
              </motion.div>

              {/* Envelope bottom pocket folds */}
              <svg
                viewBox="0 0 320 192"
                className="absolute inset-0 w-full h-full rounded-2xl z-20 pointer-events-none"
                fill="none"
              >
                <path
                  d="M0 192L128 96L0 12V192Z"
                  fill="#CFB7EB"
                  stroke="#E5B95C"
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />
                <path
                  d="M320 192L192 96L320 12V192Z"
                  fill="#C8ADE7"
                  stroke="#E5B95C"
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />
                <path
                  d="M0 192L160 88L320 192H0Z"
                  fill="#D7C0F0"
                  stroke="#D9A74A"
                  strokeOpacity="0.6"
                  strokeWidth="1.2"
                />
              </svg>

              {/* Top Flap (animates open) */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={stage === "opening" ? { rotateX: 165 } : { rotateX: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
                className="absolute inset-x-0 top-0 h-28 z-30 pointer-events-none"
              >
                <svg viewBox="0 0 320 112" className="w-full h-full drop-shadow-sm" fill="none">
                  <path
                    d="M4 2C4 1 6 0 8 0H312C314 0 316 1 316 2L160 106L4 2Z"
                    fill="#DFC9F5"
                    stroke="#D9A74A"
                    strokeWidth="1.6"
                  />
                </svg>
              </motion.div>

              {/* Wax Seal */}
              <motion.div
                animate={
                  stage === "opening"
                    ? { scale: 1.28, opacity: 0, rotate: -18 }
                    : { scale: 1, opacity: 1, rotate: 0 }
                }
                transition={{ duration: 0.4 }}
                className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 z-40"
              >
                <WaxSealSvg className="w-14 h-14 drop-shadow-md" />
              </motion.div>

              {/* Envelope Address Text */}
              <div className="absolute inset-x-0 bottom-4 z-30 text-center pointer-events-none">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-[#5B3B6B]">
                  {FAIRYTALE_CONFIG.page1Invitation.envelopeTopLabel}
                </p>
                <p className="font-script text-4xl leading-none text-[#3D204C] mt-0.5">
                  {FAIRYTALE_CONFIG.page1Invitation.envelopeName}
                </p>
              </div>
            </motion.div>

            {/* Tap to break the seal CTA */}
            <motion.button
              type="button"
              onClick={handleBreakSeal}
              whileTap={{ scale: 0.96 }}
              className="mt-8 min-h-[46px] px-7 py-2.5 rounded-full bg-white text-[#331B29] font-semibold text-sm shadow-[0_8px_22px_rgba(158,27,79,0.16)] border border-[#EBCBD8] hover:border-[#9E1B4F]/40 hover:bg-[#FFF9FB] transition-all cursor-pointer whitespace-nowrap"
            >
              {FAIRYTALE_CONFIG.page1Invitation.sealButtonText}
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="letter-view"
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[350px] flex flex-col items-center"
          >
            {/* Royal Invitation Letter Card */}
            <div className="relative w-full rounded-3xl bg-[#FFFDF9] border-2 border-[#D9A74A]/80 shadow-[0_20px_45px_rgba(120,62,92,0.18)] px-6 py-7 text-center">
              {/* Inner golden hairline border */}
              <div className="pointer-events-none absolute inset-2.5 rounded-[18px] border border-[#D9A74A]/35" />

              <div className="relative z-10 flex flex-col items-center">
                <RoyalCrownSvg className="w-11 h-9 mb-2" />

                <h1 className="font-script text-4xl text-[#9E1B4F] mb-3">
                  {FAIRYTALE_CONFIG.page1Invitation.salutation}
                </h1>

                <div className="space-y-3 text-sm leading-relaxed text-[#4B2C3D]">
                  {FAIRYTALE_CONFIG.page1Invitation.paragraphs.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-[#EED3DF] w-full flex flex-col items-center">
                  <p className="font-script text-3xl text-[#9E1B4F]">
                    {FAIRYTALE_CONFIG.page1Invitation.closing}
                  </p>
                  <div className="mt-2">
                    <WaxSealSvg className="w-10 h-10 opacity-90" />
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              type="button"
              onClick={onNext}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="mt-6 min-h-[48px] px-8 py-3 rounded-full bg-[#9E1B4F] text-white font-semibold text-sm shadow-[0_10px_25px_rgba(158,27,79,0.3)] hover:bg-[#7A123B] transition-colors cursor-pointer whitespace-nowrap"
            >
              {FAIRYTALE_CONFIG.page1Invitation.enterButtonText}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
