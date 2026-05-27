"use client";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Outlet", href: "#outlet" },
  { label: "Pesan", href: "#pesan" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 60));
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor: scrolled ? "rgba(255,248,238,0.96)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          {/* Wadah lingkaran merah logo */}
          <div className="w-10 h-10 bg-[#C8272D] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform overflow-hidden relative">
            {/* 2. GANTI TEKS PZL DENGAN INI */}
            <img src="logo.png" alt="Logo Pizzalongan" width={45} height={45} className="object-contain"/>
          </div>
          
          <div>
            <span className="font-display text-[#C8272D] font-black text-xl leading-none block">
              PIZZALONGAN
            </span>
            <span className="font-syne text-[#1A5C2C] text-[10px] font-semibold tracking-widest uppercase">
              Pizza Panjang Pekalongan
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} className="font-semibold text-sm relative group transition-colors"
                 style={{ fontFamily: "Syne,sans-serif", color: "#1A0A00" }}
                 onMouseEnter={e => (e.currentTarget.style.color = "#C8272D")}
                 onMouseLeave={e => (e.currentTarget.style.color = "#1A0A00")}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: "#C8272D" }} />
              </a>
            </li>
          ))}
          <li>
            <a href="https://wa.me/62816413468" target="_blank" rel="noopener noreferrer"
               className="text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-md"
               style={{ backgroundColor: "#C8272D", fontFamily: "Syne,sans-serif" }}>
              Order Sekarang
            </a>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: "#1A0A00" }} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                    className="md:hidden px-6 py-6 space-y-4 border-t"
                    style={{ backgroundColor: "#FFF8EE", borderColor: "#F5E6CC" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
               className="block font-bold text-lg transition-colors"
               style={{ fontFamily: "Syne,sans-serif", color: "#1A0A00" }}>
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/62816413468" target="_blank" rel="noopener noreferrer"
             className="block w-full text-center text-white font-bold text-base px-5 py-3 rounded-full"
             style={{ backgroundColor: "#C8272D", fontFamily: "Syne,sans-serif" }}>
            Order Sekarang
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
