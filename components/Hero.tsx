"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

/* ---------- pizza slice SVG ---------- */
const Slice = ({ style }: { style?: React.CSSProperties }) => (
  <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className="w-16 h-20 md:w-20 md:h-24">
    <path d="M50 4 L96 130 L4 130 Z" fill="#D4A017"/>
    <path d="M50 4 L96 130 L4 130 Z" fill="url(#cg)" opacity="0.9"/>
    <circle cx="42" cy="90"  r="9"  fill="#C8272D"/>
    <circle cx="65" cy="75"  r="8"  fill="#C8272D"/>
    <circle cx="50" cy="112" r="7"  fill="#C8272D"/>
    <circle cx="32" cy="108" r="6"  fill="#1A5C2C" opacity="0.9"/>
    <circle cx="70" cy="108" r="6"  fill="#1A5C2C" opacity="0.9"/>
    <path d="M50 4 L96 130 L4 130 Z" fill="none" stroke="#9E6B00" strokeWidth="2"/>
    <path d="M22 120 Q50 105 78 120" stroke="#F5C842" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <defs>
      <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5C842"/>
        <stop offset="100%" stopColor="#D4A017" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

/* ---------- rotating badge ---------- */
const HalalBadge = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className="w-28 h-28 md:w-32 md:h-32"
  >
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M60 6 L73 42 L111 42 L81 64 L93 100 L60 78 L27 100 L39 64 L9 42 L47 42 Z" fill="#C8272D"/>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontFamily="Syne,sans-serif" fontWeight="800" letterSpacing="0.5">HALAL</text>
      <text x="50%" y="64%" textAnchor="middle" dominantBaseline="middle" fill="#FFD700" fontSize="7.5" fontFamily="Syne,sans-serif" fontWeight="700">✓ CERTIFIED</text>
    </svg>
  </motion.div>
);

/* ---------- floating pizza plate ---------- */
const PizzaPlate = () => {
  const angles = [0, 60, 120, 180, 240, 300];
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* glow */}
      <div style={{ background: "radial-gradient(circle, rgba(200,39,45,0.35) 0%, transparent 70%)" }}
           className="absolute inset-0 rounded-full blur-3xl scale-110" />
      {/* plate */}
      <div className="absolute inset-6 rounded-full border-2 border-yellow-400/20"
           style={{ backgroundColor: "#2A1500" }} />

      {/* slices */}
      {angles.map((deg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.4, ease: "backOut" }}
          className="absolute inset-0 flex items-start justify-center"
          style={{ transform: `rotate(${deg}deg)` }}
        >
          <Slice style={{ transform: `rotate(${-deg}deg)`, marginTop: "4px" }} />
        </motion.div>
      ))}

      {/* center cap */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div style={{ backgroundColor: "#C8272D" }}
             className="w-14 h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center shadow-2xl z-10">
          <span className="text-white font-bold text-base leading-none" style={{ fontFamily: "Syne,sans-serif" }}>PZL</span>
          <span className="text-white/60 text-[8px] uppercase tracking-wider">pizza</span>
        </div>
      </div>
    </div>
  );
};

/* ========== HERO ========== */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#1A0A00" }}
    >
      {/* red radial glow */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(200,39,45,0.2) 0%, transparent 70%)" }} />

      {/* giant ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-bold leading-none tracking-tight"
              style={{ fontSize: "18vw", color: "rgba(255,255,255,0.025)", fontFamily: "'Playfair Display',serif" }}>
          PIZZA
        </span>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── LEFT ── */}
          <div className="space-y-7">
            <motion.span
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="inline-block text-sm font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border"
              style={{ color: "#D4A017", borderColor: "rgba(212,160,23,0.4)", fontFamily: "Syne,sans-serif" }}
            >
              🍕 Fresh Baked Everyday
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }}
              className="leading-none"
              style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900 }}
            >
              <span className="block text-6xl md:text-7xl lg:text-8xl" style={{ color: "#C8272D" }}>PIZZA</span>
              <span className="block text-6xl md:text-7xl lg:text-8xl text-white">LONGAN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-semibold leading-snug max-w-md"
              style={{ color: "#F5E6CC", fontFamily: "Syne,sans-serif" }}
            >
              Cara baru makan Pizza,{" "}
              <span style={{ color: "#D4A017" }}>rasa nikmat tiada tara</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.55 }}
              className="text-base leading-relaxed max-w-sm"
              style={{ color: "rgba(245,230,204,0.6)" }}
            >
              Pizza panjang khas Pekalongan — homemade dengan bahan terbaik, tersedia dalam 6 varian lezat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://wa.me/62816413468" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-white font-bold text-base px-7 py-4 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                 style={{ backgroundColor: "#C8272D", fontFamily: "Syne,sans-serif" }}>
                🛒 Pesan via WhatsApp
              </a>
              <a href="#menu"
                 className="inline-flex items-center gap-2 text-white font-bold text-base px-7 py-4 rounded-full border-2 transition-all hover:-translate-y-0.5"
                 style={{ borderColor: "rgba(255,255,255,0.3)", fontFamily: "Syne,sans-serif" }}>
                Lihat Menu
              </a>
            </motion.div>

            {/* stats */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-8 pt-2"
            >
              {[{ n: "6", l: "Varian Menu" }, { n: "3", l: "Outlet Aktif" }, { n: "100%", l: "Halal" }].map(s => (
                <div key={s.l}>
                  <div className="text-3xl font-black" style={{ fontFamily: "'Playfair Display',serif", color: "#C8272D" }}>{s.n}</div>
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "rgba(245,230,204,0.55)", fontFamily: "Syne,sans-serif" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -16, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <PizzaPlate />
            </motion.div>

            {/* halal badge */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }} animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute top-0 right-0 md:-right-2"
            >
              <HalalBadge />
            </motion.div>

            {/* fresh badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute bottom-6 left-0 md:-left-2 rounded-2xl px-4 py-3 shadow-2xl"
              style={{ backgroundColor: "#1A5C2C" }}
            >
              <p className="font-bold text-xs uppercase tracking-wider" style={{ color: "#D4A017", fontFamily: "Syne,sans-serif" }}>Fresh Baked</p>
              <p className="font-black text-white text-lg leading-none" style={{ fontFamily: "'Playfair Display',serif" }}>Everyday</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* scroll caret */}
      <motion.a href="#marquee"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        <ChevronDown size={32} />
      </motion.a>

      {/* bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 56" className="w-full" fill="#FFF8EE" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,56 C360,0 1080,0 1440,56 L1440,56 L0,56 Z"/>
        </svg>
      </div>
    </section>
  );
}
