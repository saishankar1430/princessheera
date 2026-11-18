import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FAIRYTALE_CONFIG } from "../config/fairytaleConfig";
import { AviatorMascotSvg } from "./RoyalIllustrations";

interface IntroLoaderProps {
  onComplete: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const fullText = FAIRYTALE_CONFIG.intro.loadingText;
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    const typingInterval = window.setInterval(() => {
      setTypedLength((prev) => {
        if (prev >= fullText.length) {
          window.clearInterval(typingInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 45);

    const finishTimer = window.setTimeout(() => {
      onComplete();
    }, 2400);

    return () => {
      window.clearInterval(typingInterval);
      window.clearTimeout(finishTimer);
    };
  }, [fullText, onComplete]);

  return (
    <div
      onClick={onComplete}
      className="relative flex-1 flex flex-col items-center justify-center px-6 text-center select-none cursor-pointer overflow-hidden"
    >
      {/* Decorative pastel clouds like the reference video */}
      <motion.div
        className="absolute top-12 left-6 w-24 h-10 rounded-full bg-white/80 blur-[0.5px] shadow-sm"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-24 right-4 w-28 h-11 rounded-full bg-[#F5E1EB]/90 shadow-sm"
        animate={{ x: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-28 left-8 w-28 h-11 rounded-full bg-white/85 shadow-sm"
        animate={{ x: [0, 14, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Flying crowned kitty aviator */}
      <motion.div
        initial={{ x: -110, y: 12, opacity: 0, rotate: -6 }}
        animate={{
          x: [null, 0, 8, 0],
          y: [12, -8, 2, -6],
          opacity: 1,
          rotate: [null, 2, -2, 0],
        }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <AviatorMascotSvg className="w-48 h-40 drop-shadow-md" />
      </motion.div>

      <p className="mt-5 font-display text-lg font-medium text-[#9E1B4F] min-h-[28px]">
        {fullText.slice(0, typedLength)}
        <span className="inline-block w-0.5 h-5 bg-[#9E1B4F] ml-0.5 align-middle animate-pulse" />
      </p>
    </div>
  );
}
