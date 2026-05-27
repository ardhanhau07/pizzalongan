"use client";

export default function Footer() {
  return (
    <footer className="py-10 border-t" style={{ backgroundColor: "#100500", borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "#C8272D" }}>
              <span className="text-white font-bold text-xs" style={{ fontFamily: "Syne,sans-serif" }}>PZL</span>
            </div>
            <div>
              <span className="font-black text-white text-lg leading-none block" style={{ fontFamily: "'Playfair Display',serif" }}>PIZZALONGAN</span>
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#1A5C2C", fontFamily: "Syne,sans-serif" }}>Pizza Panjang Pekalongan</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Original Homemade by{" "}
              <a href="https://instagram.com/legit_cakeandcookies" target="_blank" rel="noopener noreferrer"
                 className="hover:opacity-80 transition-opacity" style={{ color: "#D4A017" }}>
                @Legit_cakeandcookies
              </a>
            </p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>
              © {new Date().getFullYear()} Pizzalongan · All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ border: "1px solid rgba(26,92,44,0.4)" }}>
            <span className="text-lg">✅</span>
            <span className="font-bold text-xs uppercase tracking-wider" style={{ color: "#1A5C2C", fontFamily: "Syne,sans-serif" }}>Halal Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
