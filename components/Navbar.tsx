"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 60));
  }, [scrollY]);

  const links = [
    { label: "Menu", href: "#menu" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Outlet", href: "#outlet" },
    { label: "Pesan", href: "#pesan" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF8EE]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#C8272D] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-xs font-syne leading-none text-center">PZL</span>
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

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-syne font-semibold text-sm text-[#1A0A00] hover:text-[#C8272D] transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C8272D] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/62816413468"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C8272D] text-white font-syne font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#9E1E23] transition-all hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5"
            >
              Order Sekarang
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#1A0A00]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#FFF8EE] border-t border-[#F5E6CC] px-6 py-6 space-y-4"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-syne font-bold text-lg text-[#1A0A00] hover:text-[#C8272D] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/62816413468"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#C8272D] text-white font-syne font-bold text-base px-5 py-3 rounded-full hover:bg-[#9E1E23] transition-colors"
          >
            Order Sekarang
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
