"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, ExternalLink } from "lucide-react";

const outlets = [
  { num:"01", name:"Outlet Siwalan",   addr:"Desa Wonosari, Kec. Siwalan, Kab. Pekalongan", mark:"Utara Indomaret Siwalan",                   color:"#C8272D", maps:"https://maps.google.com/?q=Desa+Wonosari+Siwalan+Pekalongan" },
  { num:"02", name:"Outlet Wonokerto", addr:"Bebel, Wonokerto, Kab. Pekalongan",              mark:"Lapak UMKM Besti — Seberang Sonic Chicken", color:"#1A5C2C", maps:"https://maps.google.com/?q=Bebel+Wonokerto+Pekalongan" },
  { num:"03", name:"Outlet Jenggot",   addr:"Jenggot, Pekalongan Selatan, Kota Pekalongan",  mark:"Depan Adiba Batik",                          color:"#D4A017", maps:"https://maps.google.com/?q=Jenggot+Pekalongan+Selatan" },
];

export default function Outlets() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="outlet" className="py-24 dot-pattern-light" style={{ backgroundColor: "#FFF8EE" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border"
                style={{ color: "#C8272D", borderColor: "rgba(200,39,45,0.3)", fontFamily: "Syne,sans-serif" }}>
            Lokasi Kami
          </span>
          <h2 className="font-black leading-tight" style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem,6vw,4rem)", color: "#1A0A00" }}>
            Temukan Kami di <span style={{ color: "#C8272D" }}>3 Outlet</span>
          </h2>
          <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: "#5A3A1A" }}>
            Hadir di Pekalongan dan sekitarnya. Kunjungi outlet terdekat atau pesan via WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outlets.map((o, i) => (
            <motion.div key={o.num}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2"
            >
              <div className="h-32 relative flex items-end p-6"
                   style={{ background: `linear-gradient(135deg, ${o.color} 0%, ${o.color}CC 100%)` }}>
                <span className="absolute top-3 right-4 font-black text-7xl leading-none opacity-20 text-white"
                      style={{ fontFamily: "'Playfair Display',serif" }}>
                  {o.num}
                </span>
                <div className="relative z-10">
                  <span className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-1"
                        style={{ backgroundColor: "rgba(255,255,255,0.2)", fontFamily: "Syne,sans-serif" }}>
                    Outlet {o.num}
                  </span>
                  <h3 className="font-black text-white text-2xl" style={{ fontFamily: "'Playfair Display',serif" }}>{o.name}</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={17} style={{ color: o.color, marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p className="font-semibold text-sm leading-snug" style={{ color: "#1A0A00", fontFamily: "Syne,sans-serif" }}>{o.addr}</p>
                    <p className="text-xs mt-1" style={{ color: "#9A7560" }}>📍 {o.mark}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={17} style={{ color: o.color, flexShrink: 0 }} />
                  <p className="font-semibold text-sm" style={{ color: "#1A0A00", fontFamily: "Syne,sans-serif" }}>Fresh Baked Everyday</p>
                </div>
                <a href={o.maps} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-1.5 text-sm font-bold transition-all hover:gap-2.5"
                   style={{ color: o.color, fontFamily: "Syne,sans-serif" }}>
                  Lihat di Google Maps <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
