import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RotateCcw } from "lucide-react";
import { FAIRYTALE_CONFIG } from "../../config/fairytaleConfig";
import { FairyCarriageSvg, RoseClusterSvg, RoyalCrownSvg } from "../RoyalIllustrations";

interface Page6FinalRevealProps {
  onReplay: () => void;
}

interface FireworkBurst {
  id: number;
  xPct: number;
  yPct: number;
  color: string;
}

const FIREWORK_COLORS = ["#FCE08B", "#F9A8D4", "#D8B4FE", "#FDA4AF"];

export function Page6FinalReveal({ onReplay }: Page6FinalRevealProps) {
  const [bursts, setBursts] = useState<FireworkBurst[]>([
    { id: 1, xPct: 22, yPct: 26, color: "#FCE08B" },
    { id: 2, xPct: 78, yPct: 30, color: "#F9A8D4" },
  ]);
  const [crowned, setCrowned] = useState(false);
  const [crownShowerKey, setCrownShowerKey] = useState(0);

  const handleTapSky = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = Math.max(10, Math.min(90, ((e.clientX - rect.left) / rect.width) * 100));
    const yPct = Math.max(10, Math.min(62, ((e.clientY - rect.top) / rect.height) * 100));
    const newBurst: FireworkBurst = {
      id: Date.now() + Math.random(),
      xPct,
      yPct,
      color: FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)],
    };
    setBursts((prev) => [...prev.slice(-5), newBurst]);
  };

  const handleCrownAgain = () => {
    setCrowned(true);
    setCrownShowerKey((k) => k + 1);
    setBursts((prev) => [
      ...prev.slice(-3),
      { id: Date.now() + 1, xPct: 26, yPct: 24, color: "#FCE08B" },
      { id: Date.now() + 2, xPct: 74, yPct: 26, color: "#F9A8D4" },
    ]);
  };

  return (
    <div className="flex-1 flex flex-col items-center px-4 pt-1 pb-7 text-center relative overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-3xl font-bold text-[#331B29] leading-tight [text-wrap:balance] mb-3"
      >
        {FAIRYTALE_CONFIG.page6Finale.heading}
      </motion.h1>

      {/* Night-time Fairytale Castle Scene with Interactive Sky Fireworks */}
      <div className="relative w-full max-w-[355px] mb-5">
        <div
          onClick={handleTapSky}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setBursts((prev) => [
                ...prev.slice(-5),
                {
                  id: Date.now(),
                  xPct: 30 + Math.random() * 40,
                  yPct: 20 + Math.random() * 25,
                  color: FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)],
                },
              ]);
            }
          }}
          aria-label="Tap the starry sky to launch fireworks"
          className="relative w-full h-52 rounded-2xl overflow-hidden border-2 border-[#D9A74A]/70 shadow-[0_16px_36px_rgba(65,30,85,0.28)] cursor-pointer select-none"
          style={{
            background: "linear-gradient(180deg, #1E1138 0%, #3F2263 60%, #7C3D79 100%)",
          }}
        >
          {/* Crescent Moon */}
          <svg viewBox="0 0 40 40" className="absolute top-3 left-4 w-9 h-9" aria-hidden="true">
            <path
              d="M24 6C16.5 6 10.5 12 10.5 19.5C10.5 27 16.5 33 24 33C26.2 33 28.2 32.5 30 31.6C24.2 31 19.8 25.8 19.8 19.5C19.8 13.2 24.2 8 30 7.4C28.2 6.5 26.2 6 24 6Z"
              fill="#FFF3B8"
            />
          </svg>

          {/* Twinkling Starry Sky */}
          {[
            { x: "32%", y: "14%" },
            { x: "52%", y: "10%" },
            { x: "70%", y: "16%" },
            { x: "86%", y: "22%" },
            { x: "14%", y: "42%" },
            { x: "88%", y: "44%" },
          ].map((star, idx) => (
            <span
              key={idx}
              style={{ left: star.x, top: star.y }}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#FFF7C9] animate-shimmer pointer-events-none"
            />
          ))}

          {/* Tap the sky pill hint */}
          <span className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-[10px] font-medium text-pink-100 border border-white/20 pointer-events-none">
            {FAIRYTALE_CONFIG.page6Finale.skyHint}
          </span>

          {/* Interactive Firework Bursts */}
          {bursts.map((burst) => (
            <motion.svg
              key={burst.id}
              viewBox="0 0 80 80"
              style={{ left: `${burst.xPct}%`, top: `${burst.yPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-20 h-20 pointer-events-none"
              initial={{ scale: 0.2, opacity: 1 }}
              animate={{ scale: 1.25, opacity: [1, 0.95, 0.25] }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {Array.from({ length: 12 }, (_, i) => {
                const rad = (i * 30 * Math.PI) / 180;
                return (
                  <line
                    key={i}
                    x1="40"
                    y1="40"
                    x2={40 + Math.cos(rad) * 30}
                    y2={40 + Math.sin(rad) * 30}
                    stroke={burst.color}
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                );
              })}
            </motion.svg>
          ))}

          {/* Fairytale Night Castle Silhouette & Glowing Windows */}
          <svg
            viewBox="0 0 320 150"
            className="absolute bottom-0 inset-x-0 w-full h-36 pointer-events-none"
            fill="none"
          >
            {/* Left & Right Towers */}
            <rect x="64" y="64" width="32" height="86" fill="#F8C8DB" stroke="#D9A74A" strokeWidth="1.4" />
            <polygon points="58,64 80,28 102,64" fill="#D44C7E" stroke="#9A1B49" strokeWidth="1.4" />
            <rect x="224" y="64" width="32" height="86" fill="#F8C8DB" stroke="#D9A74A" strokeWidth="1.4" />
            <polygon points="218,64 240,28 262,64" fill="#D44C7E" stroke="#9A1B49" strokeWidth="1.4" />
            {/* Main Keep */}
            <rect x="96" y="56" width="128" height="94" fill="#FCE2EC" stroke="#D9A74A" strokeWidth="1.5" />
            {/* Center Royal Spire */}
            <rect x="136" y="30" width="48" height="44" fill="#F8CFE0" stroke="#D9A74A" strokeWidth="1.5" />
            <polygon points="128,32 160,4 192,32" fill="#B52357" stroke="#8C1340" strokeWidth="1.5" />
            {/* Glowing Castle Windows */}
            <rect x="75" y="82" width="10" height="15" rx="5" fill="#FFF2A6" />
            <rect x="235" y="82" width="10" height="15" rx="5" fill="#FFF2A6" />
            <rect x="153" y="44" width="14" height="18" rx="7" fill="#FFF2A6" />
            <rect x="112" y="82" width="11" height="16" rx="5.5" fill="#FFF2A6" />
            <rect x="197" y="82" width="11" height="16" rx="5.5" fill="#FFF2A6" />
            {/* Castle Gate */}
            <path d="M144 150V112C144 103 151 96 160 96C169 96 176 103 176 112V150H144Z" fill="#9E1B4F" stroke="#D9A74A" strokeWidth="1.8" />
            {/* Soft rolling night hillside */}
            <path d="M0 150C70 132 250 132 320 150H0Z" fill="#6F9A7E" />
          </svg>
        </div>

        {/* Overlapping Foreground Roses & Golden Carriage */}
        <div className="pointer-events-none absolute -bottom-5 -left-4 z-20">
          <RoseClusterSvg className="w-28 h-22 drop-shadow-md" />
        </div>
        <div className="pointer-events-none absolute -bottom-5 -right-3 z-20">
          <FairyCarriageSvg className="w-28 h-22 drop-shadow-md" />
        </div>
      </div>

      {/* Cream Romantic Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="relative w-full max-w-[345px] rounded-2xl bg-[#FFFDF9] border border-[#E7C6D6] shadow-[0_14px_34px_rgba(120,62,92,0.13)] px-5 py-5 text-center mt-2"
      >
        <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed text-[#4B2C3D]">
          {FAIRYTALE_CONFIG.page6Finale.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </motion.div>

      {/* Royal Signature & Forever Line */}
      <div className="mt-4">
        <p className="text-xs text-[#765567]">{FAIRYTALE_CONFIG.page6Finale.signatureLead}</p>
        <p className="font-script text-4xl text-[#9E1B4F] mt-0.5">
          {FAIRYTALE_CONFIG.page6Finale.signatureName}
        </p>
        <p className="font-display text-sm italic font-medium text-[#5A3447] mt-1">
          {FAIRYTALE_CONFIG.page6Finale.foreverLine}
        </p>
      </div>

      {/* Crown Me Again Button */}
      <motion.button
        type="button"
        onClick={handleCrownAgain}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className="mt-5 min-h-[48px] px-7 py-3 rounded-full bg-white text-[#9E1B4F] font-semibold text-sm shadow-[0_8px_22px_rgba(158,27,79,0.18)] border border-[#D9A74A]/70 hover:bg-[#FFF9FB] transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
      >
        <RoyalCrownSvg className="w-6 h-5" />
        <span>{FAIRYTALE_CONFIG.page6Finale.crownButtonText}</span>
      </motion.button>

      {/* Final Celebration Message Revealed on Crown Click */}
      <AnimatePresence>
        {crowned && (
          <motion.div
            key={crownShowerKey}
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="mt-4 max-w-[330px] rounded-2xl bg-[#9E1B4F] text-white px-5 py-4 shadow-xl border border-[#FCE08B]/60"
          >
            <p className="font-display text-sm leading-relaxed">
              {FAIRYTALE_CONFIG.page6Finale.finalToastMessage}
            </p>
            <button
              type="button"
              onClick={onReplay}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-pink-100 hover:text-white underline underline-offset-4 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{FAIRYTALE_CONFIG.page6Finale.replayButtonText}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Falling Crowns, Hearts & Sparkles Celebration Burst */}
      <AnimatePresence>
        {crownShowerKey > 0 && (
          <div
            key={`shower-${crownShowerKey}`}
            className="pointer-events-none absolute inset-0 overflow-hidden z-30"
            aria-hidden="true"
          >
            {Array.from({ length: 16 }, (_, idx) => {
              const leftPct = 6 + ((idx * 17) % 88);
              const delay = (idx % 5) * 0.12;
              return (
                <motion.div
                  key={idx}
                  style={{ left: `${leftPct}%`, top: "-10%" }}
                  initial={{ y: -20, opacity: 0, rotate: -15 }}
                  animate={{
                    y: [0, 620],
                    opacity: [0, 1, 1, 0],
                    rotate: [0, idx % 2 === 0 ? 220 : -220],
                  }}
                  transition={{ duration: 2.8, delay, ease: "easeIn" }}
                  className="absolute"
                >
                  {idx % 3 === 0 ? (
                    <RoyalCrownSvg className="w-7 h-5" />
                  ) : idx % 3 === 1 ? (
                    <span className="text-lg text-[#D9467A]">♥</span>
                  ) : (
                    <span className="text-base text-[#E5AE42]">✦</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
