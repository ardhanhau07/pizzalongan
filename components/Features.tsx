"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon:"🕌", title:"Halal Certified",    desc:"Seluruh bahan dan proses produksi telah tersertifikasi Halal Indonesia. Aman dan terpercaya.", accent:"#1A5C2C" },
  { icon:"🔥", title:"Fresh Baked Daily",  desc:"Dipanggang segar setiap hari. Tidak ada produk yang disimpan berhari-hari — selalu freshly made.", accent:"#C8272D" },
  { icon:"❤️", title:"Homemade with Love", desc:"Dibuat dengan cinta oleh @Legit_cakeandcookies. Resep original, kualitas rumahan terbaik.", accent:"#D4A017" },
  { icon:"📏", title:"Pizza Panjang Unik", desc:"Cara baru menikmati pizza — format panjang yang mudah dibagi dan dimakan bersama.", accent:"#7B1D1D" },
  { icon:"📍", title:"3 Outlet Tersedia",  desc:"Hadir di 3 lokasi strategis di Pekalongan dan sekitarnya untuk kemudahan akses Anda.", accent:"#1A5C2C" },
  { icon:"🚀", title:"Order Mudah",        desc:"Pesan langsung via WhatsApp atau kunjungi outlet terdekat. Bisa request varian favorit Anda.", accent:"#C8272D" },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="keunggulan" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#1A0A00" }}>
      {/* decorative glows */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(200,39,45,0.12), transparent)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(26,92,44,0.12), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border"
                style={{ color: "#D4A017", borderColor: "rgba(212,160,23,0.3)", fontFamily: "Syne,sans-serif" }}>
            Kenapa Pizzalongan?
          </span>
          <h2 className="font-black leading-tight text-white"
              style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem,6vw,4rem)" }}>
            Lebih dari <span style={{ color: "#C8272D" }}>Sekadar Pizza</span>
          </h2>
          <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Kami hadir dengan konsep berbeda — pizza panjang yang fresh, halal, dan dibuat dengan sepenuh hati.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                   style={{ backgroundColor: `${f.accent}25`, border: `1px solid ${f.accent}40` }}>
                {f.icon}
              </div>
              <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: "Syne,sans-serif" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{f.desc}</p>
              <div className="mt-5 h-0.5 w-10 rounded-full group-hover:w-20 transition-all duration-500"
                   style={{ backgroundColor: f.accent }} />
            </motion.div>
          ))}
        </div>

        {/* quote banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-14 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{ backgroundColor: "#C8272D" }}
        >
          <div className="absolute inset-0 opacity-[0.07]"
               style={{ backgroundImage: "repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 50%)", backgroundSize: "18px 18px" }} />
          <div className="relative z-10">
            <h3 className="font-black text-white text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>
              "Made with love, only for you"
            </h3>
            <p className="mb-4 text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>Original Homemade by @Legit_cakeandcookies</p>
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Syne,sans-serif" }}>
              Please Consume Immediately for Best Quality
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
