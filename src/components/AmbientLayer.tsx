import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface FloatingParticle {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  kind: "heart" | "sparkle";
}

const PARTICLES: FloatingParticle[] = [
  { id: 1, left: "7%", top: "16%", size: 12, duration: 7.2, delay: 0, kind: "heart" },
  { id: 2, left: "88%", top: "14%", size: 10, duration: 6.4, delay: 1.1, kind: "sparkle" },
  { id: 3, left: "12%", top: "54%", size: 11, duration: 8.5, delay: 0.7, kind: "sparkle" },
  { id: 4, left: "92%", top: "48%", size: 13, duration: 7.8, delay: 2.0, kind: "heart" },
  { id: 5, left: "14%", top: "82%", size: 10, duration: 6.9, delay: 1.5, kind: "heart" },
  { id: 6, left: "86%", top: "80%", size: 12, duration: 7.5, delay: 0.4, kind: "sparkle" },
  { id: 7, left: "48%", top: "8%", size: 9, duration: 6.2, delay: 2.4, kind: "sparkle" },
];

export function AmbientLayer({ darkTheme = false }: { darkTheme?: boolean }) {
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number; visible: boolean }>({
    x: -100,
    y: -100,
    visible: false,
  });
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mq.matches);
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY, visible: true });
    };
    const onLeave = () => {
      setCursorPos((prev) => ({ ...prev, visible: false }));
    };

    if (mq.matches) {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
    }
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* Gentle floating hearts & sparkles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-10" aria-hidden="true">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            style={{ left: p.left, top: p.top }}
            className="absolute"
            animate={{
              y: [0, -14, 0],
              opacity: [0.25, 0.72, 0.25],
              scale: [0.9, 1.12, 0.9],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {p.kind === "heart" ? (
              <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                  fill={darkTheme ? "#F6A6C5" : "#DC7B9F"}
                  fillOpacity="0.65"
                />
              </svg>
            ) : (
              <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
                  fill={darkTheme ? "#FCE08B" : "#D9A74A"}
                  fillOpacity="0.7"
                />
              </svg>
            )}
          </motion.div>
        ))}

        {/* Occasional drifting butterfly */}
        <motion.div
          className="absolute"
          initial={{ x: "-10%", y: "26%", opacity: 0 }}
          animate={{
            x: ["-8%", "35%", "78%", "112%"],
            y: ["26%", "18%", "28%", "16%"],
            opacity: [0, 0.85, 0.85, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatDelay: 7,
            ease: "easeInOut",
          }}
        >
          <svg width="24" height="20" viewBox="0 0 28 24" fill="none">
            <path d="M14 12C10 3 2 4 3 11C4 16 10 15 14 12Z" fill="#E8A0C4" fillOpacity="0.85" />
            <path d="M14 12C18 3 26 4 25 11C24 16 18 15 14 12Z" fill="#D2B6EE" fillOpacity="0.85" />
            <path d="M14 13C10 14 7 20 11 21C13 21.5 14 17 14 13Z" fill="#F2B8D3" fillOpacity="0.8" />
            <path d="M14 13C18 14 21 20 17 21C15 21.5 14 17 14 13Z" fill="#DFCAFA" fillOpacity="0.8" />
            <rect x="13.2" y="8" width="1.6" height="9" rx="0.8" fill="#6F4162" />
          </svg>
        </motion.div>
      </div>

      {/* Lightweight desktop floating crown-sparkle cursor follower */}
      {isPointerFine && cursorPos.visible && (
        <div
          className="pointer-events-none fixed z-[90] transition-transform duration-75 ease-out hidden md:block"
          style={{
            left: cursorPos.x + 12,
            top: cursorPos.y + 12,
          }}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
            <path
              d="M4 17L2 7L8 12L12 5L16 12L22 7L20 17H4Z"
              fill="#F5C451"
              stroke="#9E1B4F"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  );
}
