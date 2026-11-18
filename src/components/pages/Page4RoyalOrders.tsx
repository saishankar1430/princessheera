import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAIRYTALE_CONFIG } from "../../config/fairytaleConfig";
import { RoseClusterSvg, WaxSealSvg } from "../RoyalIllustrations";

interface Page4RoyalOrdersProps {
  onNext: () => void;
}

const HOLD_DURATION_MS = 950;

export function Page4RoyalOrders({ onNext }: Page4RoyalOrdersProps) {
  const [holdProgress, setHoldProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [isSealed, setIsSealed] = useState(false);
  const [holdHint, setHoldHint] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isHolding || isSealed) return;

    startTimeRef.current = performance.now();

    const tick = (now: number) => {
      if (startTimeRef.current === null) return;
      const elapsed = now - startTimeRef.current;
      const pct = Math.min(1, elapsed / HOLD_DURATION_MS);
      setHoldProgress(pct);

      if (pct >= 1) {
        setIsSealed(true);
        setIsHolding(false);
        setHoldHint(false);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isHolding, isSealed]);

  const startHold = () => {
    if (isSealed) return;
    setHoldHint(false);
    setIsHolding(true);
  };

  const cancelHold = () => {
    if (isSealed) return;
    if (isHolding && holdProgress < 1) {
      setHoldHint(true);
    }
    setIsHolding(false);
    setHoldProgress(0);
  };

  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - holdProgress);

  return (
    <div className="flex-1 flex flex-col items-center px-4 pt-2 pb-6 relative">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-3"
      >
        <h1 className="font-display text-3xl font-bold text-[#331B29]">
          {FAIRYTALE_CONFIG.page4Orders.heading}
        </h1>
        <p className="text-xs text-[#765567] mt-1">
          {FAIRYTALE_CONFIG.page4Orders.subheading}
        </p>
      </motion.div>

      {/* Rolled Royal Parchment Scroll */}
      <div className="relative w-full max-w-[360px]">
        {/* Top Scroll Roller */}
        <div
          className="relative z-20 h-6 mx-1 rounded-full border border-[#C69231] shadow-md flex items-center justify-between px-1"
          style={{
            background: "linear-gradient(180deg, #FBF0D4 0%, #E7C88B 50%, #D3A557 100%)",
          }}
        >
          <span className="w-3 h-7 -ml-2 rounded-full bg-[#B98225] border border-[#8E6014] shadow" />
          <span className="w-3 h-7 -mr-2 rounded-full bg-[#B98225] border border-[#8E6014] shadow" />
        </div>

        {/* Parchment Body with scrollable 10 promises */}
        <div
          className="relative z-10 -my-2 mx-3 px-4 py-5 border-x-2 border-[#D9A74A]/70 shadow-[0_14px_34px_rgba(128,82,42,0.16)]"
          style={{
            background: "linear-gradient(180deg, #FFFDF7 0%, #FDF4E3 50%, #FBF0D9 100%)",
          }}
        >
          <div className="max-h-[345px] overflow-y-auto royal-scroll pr-1.5 space-y-3.5">
            {FAIRYTALE_CONFIG.page4Orders.orders.map((order, idx) => (
              <motion.div
                key={order.number}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(idx * 0.04, 0.35), duration: 0.3 }}
                className="flex items-start gap-3 text-left pb-3 border-b border-[#EBD8B5]/65 last:border-b-0 last:pb-0"
              >
                {/* Numbered Crimson Seal */}
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#9E1B4F] text-white text-xs font-bold tabular-nums flex items-center justify-center shadow-sm mt-0.5 border border-[#FCE08B]/60">
                  {order.number}
                </span>

                <div className="min-w-0">
                  <h2 className="text-[11px] font-bold tracking-wider text-[#9E1B4F] uppercase">
                    {order.title}
                  </h2>
                  <p className="text-xs leading-relaxed text-[#472B3A] mt-0.5">
                    {order.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Scroll Roller */}
        <div
          className="relative z-20 h-6 mx-1 rounded-full border border-[#C69231] shadow-md flex items-center justify-between px-1"
          style={{
            background: "linear-gradient(180deg, #FBF0D4 0%, #E7C88B 50%, #D3A557 100%)",
          }}
        >
          <span className="w-3 h-7 -ml-2 rounded-full bg-[#B98225] border border-[#8E6014] shadow" />
          <span className="w-3 h-7 -mr-2 rounded-full bg-[#B98225] border border-[#8E6014] shadow" />
        </div>

        {/* Floral Corner Decorations */}
        <div className="pointer-events-none absolute -top-3 -right-5 z-30">
          <RoseClusterSvg className="w-20 h-16 opacity-95" flip />
        </div>
        <div className="pointer-events-none absolute -bottom-5 -left-5 z-30">
          <RoseClusterSvg className="w-20 h-16 opacity-95" />
        </div>
      </div>

      {/* Press & Hold Wax Seal Section */}
      <div className="mt-5 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {!isSealed ? (
            <motion.div
              key="unsealed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center"
            >
              <button
                type="button"
                onPointerDown={startHold}
                onPointerUp={cancelHold}
                onPointerLeave={cancelHold}
                onPointerCancel={cancelHold}
                onKeyDown={(e) => {
                  if ((e.key === " " || e.key === "Enter") && !e.repeat) {
                    e.preventDefault();
                    startHold();
                  }
                }}
                onKeyUp={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    cancelHold();
                  }
                }}
                aria-label="Press and hold the royal seal to make it official"
                className="relative w-20 h-20 rounded-full flex items-center justify-center select-none touch-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9E1B4F]"
              >
                {/* Dashed background ring + filling progress stroke */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    fill="none"
                    stroke="#E2BCCB"
                    strokeWidth="2.5"
                    strokeDasharray="5 4"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    fill="none"
                    stroke="#9E1B4F"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                  />
                </svg>

                <motion.div
                  animate={isHolding ? { scale: 0.9 } : { scale: 1 }}
                  className="w-14 h-14 rounded-full bg-[#F5D6E2] border-2 border-[#E39DB8] flex items-center justify-center shadow-inner"
                >
                  <WaxSealSvg className="w-11 h-11 opacity-85" />
                </motion.div>
              </button>

              <p className="mt-2 text-xs text-[#765567] max-w-[230px]">
                {holdHint
                  ? "Keep pressing and holding for just 1 second..."
                  : FAIRYTALE_CONFIG.page4Orders.holdInstruction}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="sealed"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-script text-3xl text-[#9E1B4F]">
                  {FAIRYTALE_CONFIG.page4Orders.sealedText}
                </span>
                <motion.div
                  initial={{ scale: 1.5, rotate: -18 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16 }}
                >
                  <WaxSealSvg className="w-12 h-12 drop-shadow-md" />
                </motion.div>
              </div>

              <motion.button
                type="button"
                onClick={onNext}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="min-h-[48px] px-8 py-3 rounded-full bg-[#9E1B4F] text-white font-semibold text-sm shadow-[0_10px_25px_rgba(158,27,79,0.3)] hover:bg-[#7A123B] transition-colors cursor-pointer whitespace-nowrap"
              >
                {FAIRYTALE_CONFIG.page4Orders.nextButtonText}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
