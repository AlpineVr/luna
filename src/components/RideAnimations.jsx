import { motion } from "framer-motion";
import { useMemo } from "react";

function Stars({ count = 25, width = 200, height = 150 }) {
  const stars = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      x: (i * 73 + 17) % width,
      y: (i * 47 + 11) % height,
      r: (i % 3) * 0.4 + 0.5,
      opacity: (i % 5) * 0.12 + 0.2,
    })), [count, width, height]);
  return stars.map((s, i) => (
    <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="white" opacity={s.opacity} />
  ));
}

export function MoonshotAnimation({ className = "" }) {
  return (
    <svg viewBox="0 0 200 160" className={`w-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#050A1F" />
      <Stars count={35} width={200} height={160} />

      {/* Soft glow behind tower */}
      <ellipse cx="100" cy="90" rx="30" ry="50" fill="rgba(96,165,250,0.04)" />

      {/* Ground */}
      <path d="M0,140 Q50,138 100,140 Q150,142 200,140 L200,160 L0,160 Z" fill="#0A1540" />

      {/* Tower */}
      <rect x="94" y="76" width="12" height="64" rx="1" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />

      {/* Launch rails */}
      <line x1="97" y1="76" x2="97" y2="138" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />
      <line x1="103" y1="76" x2="103" y2="138" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />

      {/* Platform base */}
      <rect x="86" y="132" width="28" height="6" rx="2" fill="rgba(255,255,255,0.2)" />

      {/* Rider glow */}
      <motion.circle cx="100" cy="76" r="9" fill="rgba(96,165,250,0.15)"
        animate={{ cy: [76, 12, 12, 76] }}
        transition={{ duration: 3.5, times: [0, 0.38, 0.62, 1], repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      />
      {/* Rider */}
      <motion.circle cx="100" cy="76" r="5" fill="#60a5fa"
        style={{ filter: "drop-shadow(0 0 5px #60a5fa)" }}
        animate={{ cy: [76, 12, 12, 76] }}
        transition={{ duration: 3.5, times: [0, 0.38, 0.62, 1], repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      />

      {/* Trail */}
      <motion.line x1="100" x2="100" stroke="rgba(96,165,250,0.2)" strokeWidth="2"
        animate={{ y1: [76, 12, 12, 76], y2: [90, 76, 76, 90] }}
        transition={{ duration: 3.5, times: [0, 0.38, 0.62, 1], repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      />

      <text x="100" y="155" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="6" fontFamily="monospace" letterSpacing="2">THE MOONSHOT</text>
    </svg>
  );
}

// Parabola: peak at x=150, y=16; base at x=25 and x=275, y=110
// a = (110-16)/(150-25)^2 = 94/15625 ≈ 0.006016
const CH_POINTS = Array.from({ length: 11 }, (_, i) => {
  const x = 25 + i * 25;
  const y = 0.006016 * Math.pow(x - 150, 2) + 16;
  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
});

export function CraterHopAnimation({ className = "" }) {
  const arcD = `M ${CH_POINTS.map(p => `${p.x},${p.y}`).join(" L ")}`;

  return (
    <svg viewBox="0 0 300 130" className={`w-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="130" fill="#050A1F" />
      <Stars count={40} width={300} height={130} />

      {/* Ground */}
      <path d="M0,108 Q75,106 130,108 Q150,110 170,108 Q225,106 300,108 L300,130 L0,130 Z" fill="#0A1540" />

      {/* Left crater walls */}
      <path d="M5,108 Q25,88 45,83 Q65,88 85,108" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      {/* Right crater walls */}
      <path d="M215,108 Q235,88 255,83 Q275,88 295,108" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />

      {/* Dotted trajectory path */}
      <path d={arcD} fill="none" stroke="rgba(129,140,248,0.3)" strokeWidth="1" strokeDasharray="4,4" />

      {/* Vehicle glow */}
      <motion.circle cx="25" cy="110" r="8" fill="rgba(129,140,248,0.12)"
        animate={{ cx: CH_POINTS.map(p => p.x), cy: CH_POINTS.map(p => p.y) }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      />
      {/* Vehicle */}
      <motion.circle cx="25" cy="110" r="4.5" fill="#818cf8"
        style={{ filter: "drop-shadow(0 0 5px #818cf8)" }}
        animate={{ cx: CH_POINTS.map(p => p.x), cy: CH_POINTS.map(p => p.y) }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      />

      <text x="150" y="126" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="6" fontFamily="monospace" letterSpacing="2">THE CRATERHOP™</text>
    </svg>
  );
}