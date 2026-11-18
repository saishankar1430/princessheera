import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAIRYTALE_CONFIG } from "../../config/fairytaleConfig";
import { RoseClusterSvg, RoyalCrownSvg } from "../RoyalIllustrations";

interface Page2CastleGatesProps {
  onNext: () => void;
}

export function Page2CastleGates({ onNext }: Page2CastleGatesProps) {
  const [gatesOpen, setGatesOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-5 py-4 text-center">
      {/* Heading revealed once gates open (smoothly reserving visual space) */}
      <AnimatePresence>
        {gatesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mb-4 max-w-[330px]"
          >
            <h1 className="font-display text-2xl sm:text-[27px] font-bold leading-tight text-[#8F1948] [text-wrap:balance]">
              {FAIRYTALE_CONFIG.page2Castle.heading}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lavender Castle Battlement & Swinging Gates */}
      <div className="relative w-72 sm:w-80 mx-auto">
        {/* Battlement Top Crests */}
        <div className="grid grid-cols-5 gap-2 px-1 -mb-1 relative z-10">
          {[0, 1, 2, 3, 4].map((idx) => (
            <div
              key={idx}
              className="h-5 rounded-t-sm bg-[#C7B0E5] border-t-2 border-x border-[#DFCEFA]"
            />
          ))}
        </div>

        {/* Main Castle Tower Wall */}
        <div
          className="relative rounded-b-2xl pt-4 pb-0 px-4 shadow-[0_18px_40px_rgba(120,76,148,0.22)] border border-[#B59AD8]"
          style={{
            background: "linear-gradient(180deg, #C7B0E5 0%, #B89DDD 100%)",
          }}
        >
          {/* Crown emblem centered above arch */}
          <div className="flex justify-center mb-2">
            <RoyalCrownSvg className="w-10 h-8 drop-shadow-sm" />
          </div>

          {/* Arched Gate Aperture */}
          <div
            className="relative mx-auto w-full h-64 rounded-t-full overflow-hidden border-[4px] border-[#D9A74A] bg-[#2D1A45]"
            style={{ perspective: "900px" }}
          >
            {/* Interior Castle Sky & Fairytale Castle (revealed behind gates) */}
            <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#331B52] via-[#5A3277] to-[#E6B2CB]">
              {/* Twinkling Stars */}
              {[
                { x: "18%", y: "16%", s: 3 },
                { x: "78%", y: "14%", s: 4 },
                { x: "32%", y: "26%", s: 2.5 },
                { x: "66%", y: "24%", s: 3 },
                { x: "50%", y: "12%", s: 3.5 },
              ].map((star, idx) => (
                <span
                  key={idx}
                  style={{ left: star.x, top: star.y, width: star.s, height: star.s }}
                  className="absolute rounded-full bg-[#FFF7C2] animate-shimmer"
                />
              ))}

              {/* Celebratory Fireworks when open */}
              {gatesOpen && (
                <>
                  <motion.svg
                    viewBox="0 0 80 80"
                    className="absolute top-6 left-4 w-16 h-16"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0.3, 1.1, 0.95], opacity: [0, 1, 0.85] }}
                    transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2 }}
                  >
                    {Array.from({ length: 10 }, (_, i) => {
                      const angle = (i * 36 * Math.PI) / 180;
                      return (
                        <line
                          key={i}
                          x1="40"
                          y1="40"
                          x2={40 + Math.cos(angle) * 26}
                          y2={40 + Math.sin(angle) * 26}
                          stroke="#FCE08B"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                      );
                    })}
                  </motion.svg>
                  <motion.svg
                    viewBox="0 0 80 80"
                    className="absolute top-8 right-4 w-14 h-14"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0.3, 1.1, 0.95], opacity: [0, 1, 0.85] }}
                    transition={{ duration: 1.7, delay: 0.7, repeat: Infinity, repeatDelay: 1.3 }}
                  >
                    {Array.from({ length: 10 }, (_, i) => {
                      const angle = (i * 36 * Math.PI) / 180;
                      return (
                        <line
                          key={i}
                          x1="40"
                          y1="40"
                          x2={40 + Math.cos(angle) * 24}
                          y2={40 + Math.sin(angle) * 24}
                          stroke="#F9A8D4"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                      );
                    })}
                  </motion.svg>
                </>
              )}

              {/* Drifting Pastel Clouds */}
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 left-3 w-16 h-6 rounded-full bg-white/75"
              />
              <motion.div
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-3 w-14 h-5 rounded-full bg-[#FFEAF2]/80"
              />

              {/* Fairytale Pink & Gold Castle Illustration */}
              <svg viewBox="0 0 220 175" className="absolute bottom-0 inset-x-0 w-full h-44" fill="none">
                {/* Side towers */}
                <rect x="26" y="72" width="32" height="103" fill="#FAD2E0" stroke="#D9A74A" strokeWidth="1.5" />
                <polygon points="22,72 42,36 62,72" fill="#E87DA6" stroke="#B6305E" strokeWidth="1.5" />
                <rect x="162" y="72" width="32" height="103" fill="#FAD2E0" stroke="#D9A74A" strokeWidth="1.5" />
                <polygon points="158,72 178,36 198,72" fill="#E87DA6" stroke="#B6305E" strokeWidth="1.5" />

                {/* Main center keep */}
                <rect x="56" y="64" width="108" height="111" fill="#FCE4EC" stroke="#D9A74A" strokeWidth="1.8" />
                {/* Tall center spire */}
                <rect x="88" y="36" width="44" height="50" fill="#F9CFE0" stroke="#D9A74A" strokeWidth="1.5" />
                <polygon points="82,38 110,6 138,38" fill="#C93B6B" stroke="#9A1B49" strokeWidth="1.5" />
                {/* Royal flag */}
                <line x1="110" y1="6" x2="110" y2="0" stroke="#D9A74A" strokeWidth="2" />
                <path d="M110 1L124 5L110 9Z" fill="#FCE08B" />

                {/* Glowing windows */}
                <rect x="37" y="92" width="10" height="16" rx="5" fill="#FFF3B0" />
                <rect x="173" y="92" width="10" height="16" rx="5" fill="#FFF3B0" />
                <rect x="103" y="52" width="14" height="20" rx="7" fill="#FFF3B0" />
                <rect x="70" y="92" width="12" height="18" rx="6" fill="#FFF3B0" />
                <rect x="138" y="92" width="12" height="18" rx="6" fill="#FFF3B0" />

                {/* Main Castle Arch Door */}
                <path d="M92 175V130C92 119 100 112 110 112C120 112 128 119 128 130V175H92Z" fill="#A6184D" stroke="#D9A74A" strokeWidth="2" />
                {/* Green hillside */}
                <path d="M0 175C40 158 80 164 110 168C150 160 185 162 220 175H0Z" fill="#9BC49E" />
              </svg>
            </div>

            {/* Left Swinging Gate Door */}
            <motion.div
              initial={{ rotateY: 0, x: 0 }}
              animate={gatesOpen ? { rotateY: -102, x: -10 } : { rotateY: 0, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
              className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#B51D4F] border-r border-[#D9A74A] flex flex-col justify-evenly items-end pr-3 cursor-pointer z-20"
              onClick={() => setGatesOpen(true)}
            >
              {/* Gold horizontal ribs & ring */}
              <div className="w-full h-1.5 bg-[#D9A74A]/80" />
              <div className="w-5 h-5 rounded-full border-[2.5px] border-[#FCE08B] bg-[#8E123B] shadow-inner" />
              <div className="w-full h-1.5 bg-[#D9A74A]/80" />
            </motion.div>

            {/* Right Swinging Gate Door */}
            <motion.div
              initial={{ rotateY: 0, x: 0 }}
              animate={gatesOpen ? { rotateY: 102, x: 10 } : { rotateY: 0, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }}
              className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#A61847] border-l border-[#D9A74A] flex flex-col justify-evenly items-start pl-3 cursor-pointer z-20"
              onClick={() => setGatesOpen(true)}
            >
              <div className="w-full h-1.5 bg-[#D9A74A]/80" />
              <div className="w-5 h-5 rounded-full border-[2.5px] border-[#FCE08B] bg-[#8E123B] shadow-inner" />
              <div className="w-full h-1.5 bg-[#D9A74A]/80" />
            </motion.div>
          </div>
        </div>

        {/* Rose Bouquet overlapping bottom-left corner exactly like reference */}
        <div className="absolute -bottom-5 -left-6 z-30 pointer-events-none">
          <RoseClusterSvg className="w-28 h-24 drop-shadow-md" />
        </div>
      </div>

      {/* Caption & Action CTA */}
      <div className="mt-7 max-w-[320px] flex flex-col items-center">
        {!gatesOpen ? (
          <motion.button
            type="button"
            onClick={() => setGatesOpen(true)}
            whileTap={{ scale: 0.96 }}
            className="min-h-[48px] px-7 py-3 rounded-full bg-white text-[#331B29] font-semibold text-sm shadow-[0_8px_22px_rgba(158,27,79,0.16)] border border-[#EBCBD8] hover:bg-[#FFF9FB] transition-colors cursor-pointer whitespace-nowrap"
          >
            {FAIRYTALE_CONFIG.page2Castle.closedButtonText}
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-[#5A3B4C] leading-relaxed mb-5">
              {FAIRYTALE_CONFIG.page2Castle.subheading}
            </p>
            <motion.button
              type="button"
              onClick={onNext}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="min-h-[48px] px-8 py-3 rounded-full bg-[#9E1B4F] text-white font-semibold text-sm shadow-[0_10px_25px_rgba(158,27,79,0.3)] hover:bg-[#7A123B] transition-colors cursor-pointer whitespace-nowrap"
            >
              {FAIRYTALE_CONFIG.page2Castle.enterButtonText}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
