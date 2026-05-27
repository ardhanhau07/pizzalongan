"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const floatVariants = {
  animate: {
    y: [0, -18, 0],
    rotate: [-2, 2, -2],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const PizzaSliceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 10 L190 170 L10 170 Z" fill="#D4A017" stroke="#9E6B00" strokeWidth="3"/>
    <path d="M100 10 L190 170 L10 170 Z" fill="url(#cheeseGrad)"/>
    <circle cx="80" cy="120" r="12" fill="#C8272D" opacity="0.9"/>
    <circle cx="130" cy="100" r="10" fill="#C8272D" opacity="0.9"/>
    <circle cx="100" cy="145" r="9" fill="#C8272D" opacity="0.9"/>
    <circle cx="65" cy="155" r="7" fill="#1A5C2C" opacity="0.8"/>
    <circle cx="140" cy="140" r="8" fill="#1A5C2C" opacity="0.8"/>
    <path d="M100 10 L190 170 L10 170 Z" fill="none" stroke="#9E6B00" strokeWidth="3"/>
    <path d="M40 155 Q100 130 160 155" stroke="#F5C842" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <defs>
      <linearGradient id="cheeseGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5C842"/>
        <stop offset="100%" stopColor="#D4A017"/>
      </linearGradient>
    </defs>
  </svg>
);

const StarBadge = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="w-28 h-28 md:w-36 md:h-36 relative"
  >
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 5 L72 45 L112 45 L80 70 L92 110 L60 85 L28 110 L40 70 L8 45 L48 45 Z" fill="#C8272D"/>
      <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="9" fontFamily="Syne, sans-serif" fontWeight="800" letterSpacing="0.5">HALAL</text>
      <text x="50%" y="66%" textAnchor="middle" dominantBaseline="middle" fill="#FFD700" fontSize="7" fontFamily="Syne, sans-serif" fontWeight="700">✓ CERTIFIED</text>
    </svg>
  </motion.div>
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1A0A00] pizza-bg-pattern"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(200,39,45,0.18) 0%, transparent 70%)"
        }}
      />

      {/* Decorative large letters */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="font-display text-[18vw] font-black text-white/[0.03] leading-none tracking-tight">
          PIZZA
        </span>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block font-syne text-[#D4A017] font-bold text-sm tracking-[0.3em] uppercase mb-4 border border-[#D4A017]/40 px-4 py-1.5 rounded-full">
                🍕 Fresh Baked Everyday
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl font-black leading-none"
            >
              <span className="text-[#C8272D] block">PIZZA</span>
              <span className="text-white block">LONGAN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#F5E6CC] font-syne text-xl md:text-2xl font-semibold leading-snug max-w-md"
            >
              Cara baru makan Pizza,{" "}
              <span className="text-[#D4A017]">rasa nikmat tiada tara</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="text-[#F5E6CC]/60 font-nunito text-base leading-relaxed max-w-sm"
            >
              Pizza panjang khas Pekalongan — homemade dengan bahan terbaik, tersedia dalam 6 varian lezat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/62816413468"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C8272D] text-white font-syne font-bold text-base px-8 py-4 rounded-full hover:bg-[#9E1E23] transition-all hover:shadow-2xl hover:shadow-red-900/50 hover:-translate-y-1 active:translate-y-0"
              >
                <span>🛒</span> Pesan via WhatsApp
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-syne font-bold text-base px-8 py-4 rounded-full hover:border-[#D4A017] hover:text-[#D4A017] transition-all"
              >
                Lihat Menu
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex gap-8 pt-4"
            >
              {[
                { num: "6", label: "Varian Menu" },
                { num: "3", label: "Outlet Aktif" },
                { num: "100%", label: "Halal" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-black text-[#C8272D]">{s.num}</div>
                  <div className="font-syne text-xs text-[#F5E6CC]/60 font-semibold uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - pizza visual */}
          <div className="relative flex items-center justify-center">
            {/* Glow ring */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#C8272D]/10 blur-3xl" />
            <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-[#C8272D]/20 animate-ping" style={{ animationDuration: "3s" }} />

            {/* Pizza illustration */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative z-10 w-72 h-72 md:w-96 md:h-96"
            >
              {/* Circle plate */}
              <div className="absolute inset-4 rounded-full bg-[#2A1500] shadow-2xl border-2 border-[#D4A017]/20" />
              
              {/* Pizza slices arranged in circle */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transform: `rotate(${deg}deg)` }}
                >
                  <div
                    className="absolute top-2"
                    style={{ transformOrigin: "bottom center", transform: `rotate(${-deg}deg)` }}
                  >
                    <PizzaSliceIcon className="w-20 h-20 md:w-24 md:h-24" />
                  </div>
                </motion.div>
              ))}

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="z-20 bg-[#C8272D] rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-2xl">
                  <span className="font-display text-white font-black text-lg leading-none">PZL</span>
                  <span className="text-[8px] text-white/70 font-syne uppercase tracking-wider">pizza</span>
                </div>
              </div>
            </motion.div>

            {/* Halal badge floating */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute top-0 right-0 md:-right-4"
            >
              <StarBadge />
            </motion.div>

            {/* Fresh badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute bottom-8 left-0 md:-left-4 bg-[#1A5C2C] text-white rounded-2xl px-4 py-3 shadow-2xl"
            >
              <p className="font-syne font-bold text-xs uppercase tracking-wider text-[#D4A017]">Fresh Baked</p>
              <p className="font-display font-black text-lg leading-none">Everyday</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#marquee"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
      >
        <ChevronDown size={32} />
      </motion.a>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full" fill="#FFF8EE" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z"/>
        </svg>
      </div>
    </section>
  );
}
