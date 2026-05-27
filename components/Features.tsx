"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🕌",
    title: "Halal Certified",
    desc: "Seluruh bahan dan proses produksi telah tersertifikasi Halal Indonesia. Aman dan terpercaya.",
    color: "#1A5C2C",
  },
  {
    icon: "🔥",
    title: "Fresh Baked Daily",
    desc: "Dipanggang segar setiap hari. Tidak ada produk yang disimpan berhari-hari — selalu freshly made.",
    color: "#C8272D",
  },
  {
    icon: "❤️",
    title: "Homemade with Love",
    desc: "Dibuat dengan cinta oleh @Legit_cakeandcookies. Resep original, kualitas rumahan terbaik.",
    color: "#D4A017",
  },
  {
    icon: "📏",
    title: "Pizza Panjang Unik",
    desc: "Cara baru menikmati pizza — format panjang yang mudah dibagi dan dimakan bersama.",
    color: "#7B1D1D",
  },
  {
    icon: "📍",
    title: "3 Outlet Tersedia",
    desc: "Hadir di 3 lokasi strategis di Pekalongan dan sekitarnya untuk kemudahan akses Anda.",
    color: "#1A5C2C",
  },
  {
    icon: "🚀",
    title: "Order Mudah",
    desc: "Pesan langsung via WhatsApp atau kunjungi outlet terdekat. Bisa request varian favorit Anda.",
    color: "#C8272D",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="keunggulan" className="py-24 bg-[#1A0A00] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8272D, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #1A5C2C, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-syne text-[#D4A017] font-bold text-sm tracking-[0.3em] uppercase mb-4 border border-[#D4A017]/30 px-4 py-1.5 rounded-full">
            Kenapa Pizzalongan?
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-tight">
            Lebih dari{" "}
            <span className="text-[#C8272D]">Sekadar Pizza</span>
          </h2>
          <p className="mt-4 text-white/60 font-nunito text-lg max-w-lg mx-auto">
            Kami hadir dengan konsep berbeda — pizza panjang yang fresh, halal, dan dibuat dengan sepenuh hati.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg"
                style={{ background: `${f.color}30`, border: `1px solid ${f.color}50` }}
              >
                {f.icon}
              </div>
              <h3 className="font-syne font-bold text-white text-lg mb-2">{f.title}</h3>
              <p className="text-white/55 font-nunito text-sm leading-relaxed">{f.desc}</p>

              {/* Accent line */}
              <div
                className="mt-5 h-0.5 w-10 rounded-full group-hover:w-20 transition-all duration-500"
                style={{ background: f.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 bg-[#C8272D] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px"
            }}
          />
          <div className="relative z-10">
            <h3 className="font-display text-3xl md:text-4xl font-black text-white mb-3">
              "Made with love, only for you"
            </h3>
            <p className="text-white/80 font-nunito mb-6 text-lg">
              Original Homemade by @Legit_cakeandcookies
            </p>
            <p className="text-white/60 text-sm font-syne font-semibold uppercase tracking-widest">
              Please Consume Immediately for Best Quality
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
