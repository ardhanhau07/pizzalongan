"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, ExternalLink } from "lucide-react";

const outlets = [
  {
    number: "01",
    name: "Outlet Siwalan",
    address: "Desa Wonosari, Kec. Siwalan, Kab. Pekalongan",
    landmark: "Utara Indomaret Siwalan",
    color: "#C8272D",
    gmaps: "https://maps.google.com/?q=Desa+Wonosari+Siwalan+Pekalongan",
  },
  {
    number: "02",
    name: "Outlet Wonokerto",
    address: "Bebel, Wonokerto, Kab. Pekalongan",
    landmark: "Lapak UMKM Besti — Seberang Sonic Chicken",
    color: "#1A5C2C",
    gmaps: "https://maps.google.com/?q=Bebel+Wonokerto+Pekalongan",
  },
  {
    number: "03",
    name: "Outlet Jenggot",
    address: "Jenggot, Pekalongan Selatan, Kota Pekalongan",
    landmark: "Depan Adiba Batik",
    color: "#D4A017",
    gmaps: "https://maps.google.com/?q=Jenggot+Pekalongan+Selatan",
  },
];

export default function Outlets() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="outlet" className="py-24 bg-[#FFF8EE] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C8272D]/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C8272D]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-syne text-[#C8272D] font-bold text-sm tracking-[0.3em] uppercase mb-4 border border-[#C8272D]/30 px-4 py-1.5 rounded-full">
            Lokasi Kami
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-[#1A0A00] leading-tight">
            Temukan Kami di{" "}
            <span className="text-[#C8272D]">3 Outlet</span>
          </h2>
          <p className="mt-4 text-[#5A3A1A] font-nunito text-lg max-w-lg mx-auto">
            Hadir di Pekalongan dan sekitarnya. Kunjungi outlet terdekat atau pesan via WhatsApp.
          </p>
        </motion.div>

        {/* Outlets grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outlets.map((o, i) => (
            <motion.div
              key={o.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Top accent */}
              <div
                className="h-32 relative flex items-end p-6"
                style={{ background: `linear-gradient(135deg, ${o.color} 0%, ${o.color}CC 100%)` }}
              >
                {/* Large number */}
                <span
                  className="absolute top-4 right-4 font-display font-black text-7xl leading-none opacity-20 text-white"
                >
                  {o.number}
                </span>
                <div className="relative z-10">
                  <span className="inline-block bg-white/20 text-white font-syne font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    Outlet {o.number}
                  </span>
                  <h3 className="font-display font-black text-white text-2xl">{o.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: o.color }} />
                  <div>
                    <p className="font-syne font-semibold text-[#1A0A00] text-sm leading-snug">{o.address}</p>
                    <p className="text-[#9A7560] font-nunito text-xs mt-1">📍 {o.landmark}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={18} className="shrink-0" style={{ color: o.color }} />
                  <p className="font-syne font-semibold text-[#1A0A00] text-sm">Fresh Baked Everyday</p>
                </div>

                <a
                  href={o.gmaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 text-sm font-syne font-bold transition-all hover:gap-3"
                  style={{ color: o.color }}
                >
                  Lihat di Google Maps
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
