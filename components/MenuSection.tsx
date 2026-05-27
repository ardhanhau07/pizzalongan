"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const menus = [
  {
    name: "Supreme Mix",
    emoji: "🍕",
    desc: "Perpaduan sempurna semua topping pilihan — jagung, daging cincang, sosis, dan mozzarella lumer.",
    color: "#C8272D",
    accent: "#FFD700",
    badge: "Best Seller",
  },
  {
    name: "Meat Lovers",
    emoji: "🥩",
    desc: "Untuk pecinta daging sejati. Sosis, daging sapi cincang, dan bakso sapi dalam satu pizza panjang.",
    color: "#7B1D1D",
    accent: "#FF8C42",
    badge: "Favorit",
  },
  {
    name: "American Cheese",
    emoji: "🧀",
    desc: "Keju melted slice tebal berlimpah di atas saos bolognese. Meleleh di setiap gigitan.",
    color: "#D4A017",
    accent: "#FFF5CC",
    badge: "Creamy",
  },
  {
    name: "Beef Pepperoni",
    emoji: "🌶️",
    desc: "Pepperoni sapi premium dengan mozzarella dan saos pedas. Sensasi Italia di Pekalongan.",
    color: "#8B2500",
    accent: "#FF6B4A",
    badge: "Pedas",
  },
  {
    name: "Sausage Pizza",
    emoji: "🌭",
    desc: "Sosis juicy melimpah dengan oregano dan saos keju di atas kulit pizza panjang renyah.",
    color: "#1A5C2C",
    accent: "#7FD99F",
    badge: "Juicy",
  },
  {
    name: "Meatball Pizza",
    emoji: "🍖",
    desc: "Bakso sapi kenyal di atas mozzarella dan saos bolognese. Perpaduan lokal yang unik.",
    color: "#2C1A5C",
    accent: "#A78BFA",
    badge: "Unik",
  },
];

function MenuCard({ item, index }: { item: typeof menus[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Top color bar */}
      <div className="h-2" style={{ background: item.color }} />

      {/* Badge */}
      <div
        className="absolute top-6 right-4 text-white font-syne font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider"
        style={{ background: item.color }}
      >
        {item.badge}
      </div>

      {/* Emoji display */}
      <div
        className="mx-6 mt-6 mb-4 w-20 h-20 rounded-2xl flex items-center justify-center text-5xl shadow-inner"
        style={{ background: `${item.color}15` }}
      >
        {item.emoji}
      </div>

      <div className="px-6 pb-8">
        <h3 className="font-display font-black text-2xl text-[#1A0A00] mb-2 group-hover:text-[#C8272D] transition-colors">
          {item.name}
        </h3>
        <p className="text-[#5A3A1A] text-sm leading-relaxed font-nunito">{item.desc}</p>

        <div className="mt-5 flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: item.color }}
          />
          <span className="font-syne text-xs text-[#9A7560] font-semibold uppercase tracking-wider">
            Homemade · Halal · Fresh
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="menu" className="py-24 bg-[#FFF8EE] pizza-bg-pattern relative">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none -translate-y-px">
        <svg viewBox="0 0 1440 60" className="w-full" fill="#FFF8EE" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-syne text-[#C8272D] font-bold text-sm tracking-[0.3em] uppercase mb-4 border border-[#C8272D]/30 px-4 py-1.5 rounded-full">
            Pilihan Varian
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-[#1A0A00] leading-tight">
            Coba Semua{" "}
            <span className="text-[#C8272D]">Variannya</span>
          </h2>
          <p className="mt-4 text-[#5A3A1A] font-nunito text-lg max-w-lg mx-auto">
            Enam pilihan pizza panjang dengan topping premium — semuanya halal dan fresh baked setiap hari.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menus.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* Ingredients note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 bg-[#1A0A00] rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl mt-1">📋</span>
            <div>
              <h4 className="font-syne font-bold text-[#D4A017] text-sm uppercase tracking-widest mb-2">
                Komposisi Bahan
              </h4>
              <p className="text-[#F5E6CC]/80 font-nunito text-sm leading-relaxed">
                Tepung terigu, telur, minyak nabati, gula, garam, pengemulsi roti, air, saos bolognese, 
                mozarella, oregano, aneka topping (sosis, jagung pipil, daging sapi cincang, bakso sapi, 
                pepperoni dan keju melted slice, mayonaise, saos pedas, saos kejui).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
