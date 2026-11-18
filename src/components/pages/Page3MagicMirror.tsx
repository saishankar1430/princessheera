import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAIRYTALE_CONFIG } from "../../config/fairytaleConfig";
import { RoseClusterSvg, RoyalCrownSvg } from "../RoyalIllustrations";

interface Page3MagicMirrorProps {
  onNext: () => void;
}

const PEARL_ANGLES = Array.from({ length: 24 }, (_, i) => (i * 360) / 24);

export function Page3MagicMirror({ onNext }: Page3MagicMirrorProps) {
  const [tapStep, setTapStep] = useState(0);
  const steps = FAIRYTALE_CONFIG.page3Mirror.steps;
  const isFinished = tapStep >= steps.length;
  const activeStep = tapStep > 0 ? steps[Math.min(tapStep - 1, steps.length - 1)] : null;

  const handleMirrorTap = () => {
    if (tapStep < steps.length) {
      setTapStep((prev) => prev + 1);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-5 py-4 text-center">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-3xl font-bold leading-tight text-[#331B29] [text-wrap:balance]"
      >
        {FAIRYTALE_CONFIG.page3Mirror.heading}
      </motion.h1>

      {/* Dynamic Question Prompt */}
      <AnimatePresence mode="wait">
        <motion.p
          key={tapStep}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="mt-2.5 text-sm font-medium text-[#765567] min-h-[24px]"
        >
          {activeStep ? activeStep.question : FAIRYTALE_CONFIG.page3Mirror.initialPrompt}
        </motion.p>
      </AnimatePresence>

      {/* Ornate Golden Oval Mirror */}
      <div className="relative mt-6 mb-4 flex items-center justify-center">
        {/* Dropping Royal Crown when all 3 questions are answered */}
        <AnimatePresence>
          {isFinished && (
            <motion.div
              initial={{ y: -36, opacity: 0, scale: 0.7, rotate: -10 }}
              animate={{ y: -16, opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="absolute -top-6 z-30 pointer-events-none"
            >
              <RoyalCrownSvg className="w-16 h-12 drop-shadow-md" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Mirror Button */}
        <motion.button
          type="button"
          onClick={handleMirrorTap}
          whileHover={!isFinished ? { scale: 1.025 } : undefined}
          whileTap={!isFinished ? { scale: 0.97 } : undefined}
          aria-label={
            isFinished
              ? "Magic mirror revealed You. Always You."
              : "Tap the magic mirror to ask a question"
          }
          className={`relative w-52 h-68 rounded-[999px] p-3.5 shadow-[0_20px_42px_rgba(145,96,42,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E1B4F] ${
            !isFinished ? "cursor-pointer" : "cursor-default"
          }`}
          style={{
            background: "linear-gradient(145deg, #F3CA6B 0%, #CFA03B 45%, #E7BF62 100%)",
          }}
        >
          {/* Pearl studs around the golden frame */}
          {PEARL_ANGLES.map((deg, idx) => {
            const rad = (deg * Math.PI) / 180;
            const rx = 47;
            const ry = 48;
            const left = 50 + Math.cos(rad) * rx;
            const top = 50 + Math.sin(rad) * ry;
            return (
              <span
                key={idx}
                style={{ left: `${left}%`, top: `${top}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFF7E6] shadow-xs pointer-events-none"
              />
            );
          })}

          {/* Inner Glass Reflection */}
          <div className="relative w-full h-full rounded-[999px] bg-gradient-to-br from-[#FFFDFE] via-[#FBF4F7] to-[#F3E7EE] border-2 border-[#B38126]/50 shadow-inner flex flex-col items-center justify-center overflow-hidden px-4">
            {/* Diagonal subtle mirror sheen */}
            <div
              className="pointer-events-none absolute -top-10 -left-10 w-24 h-72 bg-white/55 rotate-25 blur-[2px]"
              aria-hidden="true"
            />

            {/* Floating Rose Petals inside glass on finale */}
            {isFinished && (
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((petal) => (
                  <motion.span
                    key={petal}
                    initial={{ y: -20, x: (petal - 2) * 24, opacity: 0 }}
                    animate={{
                      y: [0, 160],
                      x: [(petal - 2) * 20, (petal - 2) * 28 + 10],
                      rotate: [0, 180],
                      opacity: [0, 0.75, 0],
                    }}
                    transition={{
                      duration: 3.4,
                      delay: petal * 0.45,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-2 left-1/2 w-2.5 h-3.5 rounded-full bg-[#F195B6]"
                  />
                ))}
              </div>
            )}

            {/* Answer or Initial ? */}
            <AnimatePresence mode="wait">
              {!activeStep ? (
                <motion.span
                  key="question-mark"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="font-display text-6xl font-bold text-[#9E1B4F]/45 select-none"
                >
                  ?
                </motion.span>
              ) : (
                <motion.div
                  key={tapStep}
                  initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 text-center"
                >
                  <span className="font-display text-3xl font-bold leading-snug text-[#3A1B2E]">
                    {activeStep.answer}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Crimson Ruby Cabochon Gem at bottom of frame */}
          <span
            className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-6 rounded-full border-2 border-[#FCE08B] shadow-md z-20"
            style={{
              background: "radial-gradient(circle at 35% 30%, #F45B8E, #9E1B4F 65%, #5C0B2A 100%)",
            }}
            aria-hidden="true"
          />
        </motion.button>

        {/* Left & Right Rose Bouquets */}
        <div className="pointer-events-none absolute -bottom-3 -left-11 z-20">
          <RoseClusterSvg className="w-24 h-20 drop-shadow-sm" />
        </div>
        <div className="pointer-events-none absolute -bottom-3 -right-11 z-20">
          <RoseClusterSvg className="w-24 h-20 drop-shadow-sm" flip />
        </div>
      </div>

      {/* Tap progress dots before completion or Finale message & button */}
      {!isFinished ? (
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5">
            {steps.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx < tapStep ? "w-4 bg-[#9E1B4F]" : "w-2 bg-[#DFC3D1]"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-[#765567]">
            {tapStep === 0 ? "Tap the mirror" : "Tap again to ask more"}
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-3 max-w-[300px] flex flex-col items-center"
        >
          <p className="text-xs text-[#765567] leading-relaxed">
            {FAIRYTALE_CONFIG.page3Mirror.revealLine1}
          </p>
          <p className="font-display text-xl font-bold text-[#9E1B4F] mt-1 mb-4">
            {FAIRYTALE_CONFIG.page3Mirror.revealLine2}
          </p>

          <motion.button
            type="button"
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="min-h-[48px] px-7 py-3 rounded-full bg-[#9E1B4F] text-white font-semibold text-sm shadow-[0_10px_25px_rgba(158,27,79,0.3)] hover:bg-[#7A123B] transition-colors cursor-pointer whitespace-nowrap"
          >
            {FAIRYTALE_CONFIG.page3Mirror.nextButtonText}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
