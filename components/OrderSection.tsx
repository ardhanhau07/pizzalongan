"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle } from "lucide-react";

const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/>
  </svg>
);

const socials = [
  { icon:<MessageCircle className="w-5 h-5"/>, label:"WhatsApp",  value:"0816 413 468",          href:"https://wa.me/62816413468",                 color:"#25D366", bg:"rgba(37,211,102,0.12)" },
  { icon:<TikTokIcon />,                       label:"TikTok",    value:"@pizzalongan.pkl",       href:"https://tiktok.com/@pizzalongan.pkl",        color:"#000000", bg:"rgba(0,0,0,0.12)" },
  { icon:<IgIcon />,                           label:"Instagram", value:"@pizzalongan",           href:"https://instagram.com/pizzalongan",          color:"#E1306C", bg:"rgba(225,48,108,0.12)" },
  { icon:<Mail className="w-5 h-5"/>,          label:"Email",     value:"pizzalonganpkl@gmail.com",href:"mailto:pizzalonganpkl@gmail.com",           color:"#C8272D", bg:"rgba(200,39,45,0.12)" },
];

export default function OrderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="pesan" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#1A0A00" }}>
      {/* grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center mb-12"
        >
          <span className="inline-block text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border"
                style={{ color: "#D4A017", borderColor: "rgba(212,160,23,0.3)", fontFamily: "Syne,sans-serif" }}>
            Hubungi Kami
          </span>
          <h2 className="font-black leading-tight text-white"
              style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem,6vw,4rem)" }}>
            Siap <span style={{ color: "#C8272D" }}>Order?</span>
          </h2>
          <p className="mt-4 text-lg max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Hubungi kami via WhatsApp untuk order, informasi, atau bergabung sebagai co-seller.
          </p>
        </motion.div>

        {/* WA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }} className="mb-8"
        >
          <a href="https://wa.me/62816413468" target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-center gap-4 text-white font-black text-xl md:text-2xl px-10 py-6 rounded-3xl w-full max-w-xl mx-auto transition-all hover:opacity-90 hover:-translate-y-1"
             style={{ backgroundColor: "#C8272D", fontFamily: "Syne,sans-serif" }}
          >
            <span className="text-3xl">🛒</span>
            <span>Pesan via WhatsApp</span>
            <span className="text-sm font-semibold px-5 py-3 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>0816413468</span>
          </a>
        </motion.div>

        {/* social grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {socials.map((s, i) => (
            <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.07 }}
              className="flex flex-col items-center gap-3 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 group"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                   style={{ backgroundColor: s.bg, color: s.color, border: `1px solid ${s.color}30` }}>
                {s.icon}
              </div>
              <div className="text-center">
                <p className="font-bold text-white text-xs uppercase tracking-wider" style={{ fontFamily: "Syne,sans-serif" }}>{s.label}</p>
                <p className="text-xs mt-0.5 break-all" style={{ color: "rgba(255,255,255,0.45)" }}>{s.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* co-seller note */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-8 text-center rounded-2xl p-6" style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: "#D4A017", fontFamily: "Syne,sans-serif" }}>
            💼 Mau Jadi Co-seller?
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Bergabunglah sebagai mitra reseller Pizzalongan. Hubungi kami untuk informasi lebih lanjut!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
