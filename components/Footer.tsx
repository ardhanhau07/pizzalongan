"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#100500] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#C8272D] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs font-syne">PZL</span>
            </div>
            <div>
              <span className="font-display text-white font-black text-lg leading-none block">PIZZALONGAN</span>
              <span className="font-syne text-[#1A5C2C] text-[10px] font-semibold tracking-widest uppercase">Pizza Panjang Pekalongan</span>
            </div>
          </div>

          {/* Center note */}
          <div className="text-center">
            <p className="text-white/30 font-nunito text-xs">
              Original Homemade by{" "}
              <a
                href="https://instagram.com/legit_cakeandcookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A017] hover:text-[#D4A017]/80 transition-colors"
              >
                @Legit_cakeandcookies
              </a>
            </p>
            <p className="text-white/20 font-nunito text-xs mt-1">
              © {year} Pizzalongan · All rights reserved
            </p>
          </div>

          {/* Halal badge */}
          <div className="flex items-center gap-2 border border-[#1A5C2C]/40 rounded-full px-4 py-2">
            <span className="text-[#1A5C2C] text-lg">✅</span>
            <span className="font-syne font-bold text-[#1A5C2C] text-xs uppercase tracking-wider">Halal Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
