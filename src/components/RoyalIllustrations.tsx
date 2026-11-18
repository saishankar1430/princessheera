import React from "react";

export function RoyalCrownSvg({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="crownGold" x1="10" y1="8" x2="70" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCE08B" />
          <stop offset="48%" stopColor="#E5AE42" />
          <stop offset="100%" stopColor="#B87A1E" />
        </linearGradient>
      </defs>
      <path
        d="M12 45L6 18L24 30L40 10L56 30L74 18L68 45H12Z"
        fill="url(#crownGold)"
        stroke="#9A6213"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="11" y="45" width="58" height="8" rx="4" fill="#C98A28" stroke="#9A6213" strokeWidth="1.5" />
      {/* Crown tip pearls */}
      <circle cx="6" cy="16" r="3.5" fill="#FFF7E2" stroke="#D9A74A" strokeWidth="1.2" />
      <circle cx="40" cy="8" r="4.2" fill="#FFF7E2" stroke="#D9A74A" strokeWidth="1.2" />
      <circle cx="74" cy="16" r="3.5" fill="#FFF7E2" stroke="#D9A74A" strokeWidth="1.2" />
      {/* Jewels */}
      <circle cx="40" cy="34" r="4.5" fill="#B21F56" stroke="#FFE3EC" strokeWidth="1.2" />
      <circle cx="24" cy="37" r="3" fill="#E87DA6" stroke="#FFF2F6" strokeWidth="1" />
      <circle cx="56" cy="37" r="3" fill="#E87DA6" stroke="#FFF2F6" strokeWidth="1" />
    </svg>
  );
}

export function WaxSealSvg({
  className = "w-14 h-14",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="waxGrad" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#D63B74" />
          <stop offset="55%" stopColor="#A6184D" />
          <stop offset="100%" stopColor="#6D0D30" />
        </radialGradient>
      </defs>
      {/* Scalloped outer wax edge */}
      <path
        d="M40 4C44.5 4 47.2 7.4 51.3 8.6C55.4 9.8 59.5 8 62.9 10.6C66.3 13.2 66.2 17.6 68.7 21C71.2 24.4 75.4 25.7 76.6 29.8C77.8 33.9 75.1 37.5 75.1 41.8C75.1 46.1 77.8 49.7 76.6 53.8C75.4 57.9 71.2 59.2 68.7 62.6C66.2 66 66.3 70.4 62.9 73C59.5 75.6 55.4 73.8 51.3 75C47.2 76.2 44.5 79.6 40 79.6C35.5 79.6 32.8 76.2 28.7 75C24.6 73.8 20.5 75.6 17.1 73C13.7 70.4 13.8 66 11.3 62.6C8.8 59.2 4.6 57.9 3.4 53.8C2.2 49.7 4.9 46.1 4.9 41.8C4.9 37.5 2.2 33.9 3.4 29.8C4.6 25.7 8.8 24.4 11.3 21C13.8 17.6 13.7 13.2 17.1 10.6C20.5 8 24.6 9.8 28.7 8.6C32.8 7.4 35.5 4 40 4Z"
        fill="url(#waxGrad)"
      />
      <circle cx="40" cy="41.8" r="24" stroke="#E989AC" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="40" cy="41.8" r="20.5" fill="#8C1340" stroke="#5A0927" strokeWidth="1" />
      {label ? (
        <text
          x="40"
          y="47"
          textAnchor="middle"
          fill="#FCE5EE"
          fontSize="17"
          fontWeight="700"
          fontFamily="Playfair Display, serif"
        >
          {label}
        </text>
      ) : (
        <path
          d="M27 49L24 35L33 41L40 31L47 41L56 35L53 49H27Z"
          fill="#F9D0DE"
          stroke="#FCEBF1"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export function RoseClusterSvg({
  className = "w-28 h-24",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 140 110"
      fill="none"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      {/* Leaves */}
      <ellipse cx="32" cy="76" rx="22" ry="11" transform="rotate(-24 32 76)" fill="#8CB396" />
      <ellipse cx="104" cy="78" rx="22" ry="11" transform="rotate(20 104 78)" fill="#7EA689" />
      <ellipse cx="68" cy="42" rx="16" ry="9" transform="rotate(-8 68 42)" fill="#9EC1A7" />
      <ellipse cx="48" cy="90" rx="18" ry="8" transform="rotate(14 48 90)" fill="#739B7E" />
      {/* Back pale rose */}
      <circle cx="44" cy="58" r="19" fill="#F4B6C9" />
      <circle cx="44" cy="58" r="13" fill="#EA8FAC" />
      <path d="M37 56C40 50 48 50 50 57C52 63 42 66 38 61" stroke="#FCE3EC" strokeWidth="1.8" strokeLinecap="round" />
      {/* Right cream-blush rose */}
      <circle cx="92" cy="64" r="17" fill="#FAD7E2" />
      <circle cx="92" cy="64" r="11" fill="#F1A7BE" />
      <path d="M87 62C90 57 96 58 97 63C98 68 90 70 87 66" stroke="#FFF4F8" strokeWidth="1.6" strokeLinecap="round" />
      {/* Center rich burgundy-pink rose */}
      <circle cx="67" cy="72" r="21" fill="#D45882" />
      <circle cx="67" cy="72" r="14.5" fill="#B6305E" />
      <circle cx="67" cy="72" r="8" fill="#921B45" />
      <path
        d="M59 69C63 62 73 63 75 71C77 78 65 82 60 76"
        stroke="#FBC7D8"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Tiny rosebuds */}
      <circle cx="24" cy="60" r="6.5" fill="#E884A6" />
      <circle cx="112" cy="56" r="5.5" fill="#F4B6C9" />
    </svg>
  );
}

export function AviatorMascotSvg({ className = "w-44 h-40" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 170" fill="none" className={className} aria-hidden="true">
      {/* Soft clouds behind plane */}
      <path
        d="M25 130C15 130 9 122 12 113C14 106 23 103 29 107C33 98 46 97 53 105C61 102 70 109 68 119C73 123 70 130 62 130H25Z"
        fill="#FFFFFF"
        fillOpacity="0.92"
      />
      {/* Plane tail & wings */}
      <path d="M35 88L22 65L46 76Z" fill="#DF95CF" stroke="#9B5997" strokeWidth="2" strokeLinejoin="round" />
      <ellipse cx="105" cy="116" rx="52" ry="12" fill="#E79BD5" stroke="#9B5997" strokeWidth="2" />
      {/* Plane body */}
      <path
        d="M36 92C36 78 52 70 86 70H136C153 70 162 82 162 96C162 110 151 116 132 116H64C46 116 36 106 36 92Z"
        fill="#F8C8E8"
        stroke="#9B5997"
        strokeWidth="2.5"
      />
      {/* Cute kitty/corgi passenger */}
      <circle cx="98" cy="62" r="24" fill="#F5BA7A" stroke="#8C4E2B" strokeWidth="2.2" />
      {/* Ears */}
      <path d="M77 48L72 28L90 40Z" fill="#F5BA7A" stroke="#8C4E2B" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M119 48L124 28L106 40Z" fill="#F5BA7A" stroke="#8C4E2B" strokeWidth="2.2" strokeLinejoin="round" />
      {/* Inner cream cheeks */}
      <ellipse cx="98" cy="69" rx="14" ry="10" fill="#FFF2E2" />
      {/* Eyes & blush */}
      <circle cx="89" cy="59" r="3" fill="#462519" />
      <circle cx="107" cy="59" r="3" fill="#462519" />
      <ellipse cx="83" cy="66" rx="4" ry="2.2" fill="#F28AA8" fillOpacity="0.7" />
      <ellipse cx="113" cy="66" rx="4" ry="2.2" fill="#F28AA8" fillOpacity="0.7" />
      <path d="M95 66Q98 70 101 66" stroke="#462519" strokeWidth="1.8" strokeLinecap="round" />
      {/* Tiny gold crown */}
      <path d="M87 38L84 24L93 31L98 21L103 31L112 24L109 38H87Z" fill="#F5C451" stroke="#9A6213" strokeWidth="1.6" />
      {/* Scarf */}
      <path d="M74 79C85 84 111 84 122 79L116 88C104 92 92 92 80 88Z" fill="#A61D52" />
      {/* Propeller */}
      <ellipse cx="164" cy="95" rx="4" ry="28" fill="#FCE08B" stroke="#9A6213" strokeWidth="2" />
      <circle cx="164" cy="95" r="6" fill="#C98A28" stroke="#9A6213" strokeWidth="1.8" />
    </svg>
  );
}

export function BuntingGarlandSvg({ className = "w-full h-14" }: { className?: string }) {
  const colors = ["#F28BB2", "#F7CE68", "#A61C50", "#D5B4F0", "#F28BB2", "#F7CE68", "#A61C50", "#D5B4F0"];
  return (
    <svg viewBox="0 0 400 60" fill="none" className={className} preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 10Q200 34 400 10" stroke="#EBC97A" strokeWidth="2" fill="none" />
      {colors.map((color, idx) => {
        const x = 18 + idx * 46;
        const yOffset = Math.sin((idx / (colors.length - 1)) * Math.PI) * 11;
        return (
          <polygon
            key={idx}
            points={`${x},${11 + yOffset} ${x + 34},${13 + yOffset} ${x + 17},${46 + yOffset}`}
            fill={color}
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}

export function FairyCarriageSvg({ className = "w-28 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 100" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="carriageBody" x1="20" y1="20" x2="100" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCE7F3" />
          <stop offset="100%" stopColor="#F5C6DB" />
        </linearGradient>
      </defs>
      {/* Coach body */}
      <path
        d="M32 58C32 34 48 22 68 22C88 22 102 34 102 58C102 70 92 76 67 76C42 76 32 70 32 58Z"
        fill="url(#carriageBody)"
        stroke="#D9A74A"
        strokeWidth="3"
      />
      {/* Top crown finial */}
      <path d="M58 22L55 12L63 17L68 9L73 17L81 12L78 22H58Z" fill="#F5C451" stroke="#9A6213" strokeWidth="1.4" />
      {/* Glowing coach window */}
      <rect x="55" y="34" width="25" height="24" rx="12" fill="#FFF6C9" stroke="#D9A74A" strokeWidth="2.5" />
      <path d="M67.5 34V58M55 46H80" stroke="#D9A74A" strokeWidth="1.5" />
      {/* Gold frame scroll */}
      <path d="M22 72C40 82 94 82 114 68" stroke="#D9A74A" strokeWidth="3" strokeLinecap="round" />
      {/* Wheels */}
      <circle cx="44" cy="78" r="14" fill="#FFF9E6" fillOpacity="0.2" stroke="#D9A74A" strokeWidth="3" />
      <circle cx="44" cy="78" r="4" fill="#D9A74A" />
      <path d="M44 64V92M30 78H58M34 68L54 88M54 68L34 88" stroke="#D9A74A" strokeWidth="1.5" />
      <circle cx="92" cy="78" r="14" fill="#FFF9E6" fillOpacity="0.2" stroke="#D9A74A" strokeWidth="3" />
      <circle cx="92" cy="78" r="4" fill="#D9A74A" />
      <path d="M92 64V92M78 78H106M82 68L102 88M102 68L82 88" stroke="#D9A74A" strokeWidth="1.5" />
    </svg>
  );
}
