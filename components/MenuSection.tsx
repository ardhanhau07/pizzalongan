"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const menus = [
  { name:"Supreme Mix",    emoji:"🍕", desc:"Perpaduan sempurna semua topping pilihan — jagung, daging cincang, sosis, dan mozzarella lumer.", accent:"#C8272D", badge:"Best Seller" },
  { name:"Meat Lovers",    emoji:"🥩", desc:"Untuk pecinta daging sejati. Sosis, daging sapi cincang, dan bakso sapi dalam satu pizza panjang.", accent:"#7B1D1D", badge:"Favorit" },
  { name:"American Cheese",emoji:"🧀", desc:"Keju melted slice tebal berlimpah di atas saos bolognese. Meleleh di setiap gigitan.", accent:"#D4A017", badge:"Creamy" },
  { name:"Beef Pepperoni", emoji:"🌶️", desc:"Pepperoni sapi premium dengan mozzarella dan saos pedas. Sensasi Italia di Pekalongan.", accent:"#8B2500", badge:"Pedas" },
  { name:"Sausage Pizza",  emoji:"🌭", desc:"Sosis juicy melimpah dengan oregano dan saos keju di atas kulit pizza panjang renyah.", accent:"#1A5C2C", badge:"Juicy" },
  { name:"Meatball Pizza", emoji:"🍖", desc:"Bakso sapi kenyal di atas mozzarella dan saos bolognese. Perpaduan lokal yang unik.", accent:"#2C1A5C", badge:"Unik" },
];

function Card({ item, index }: { item: typeof menus[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.09, ease: "easeOut" }}
      className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 group"
    >
      <div className="h-1.5 w-full" style={{ backgroundColor: item.accent }} />
      <span className="absolute top-5 right-4 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
            style={{ backgroundColor: item.accent, fontFamily: "Syne,sans-serif" }}>
        {item.badge}
      </span>
      <div className="mx-6 mt-6 mb-4 w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-4xl"
           style={{ backgroundColor: `${item.accent}18`, border: `1px solid ${item.accent}30` }}>
        {item.emoji}
      </div>
      <div className="px-6 pb-8">
        <h3 className="font-black text-2xl mb-2 group-hover:transition-colors"
            style={{ fontFamily: "'Playfair Display',serif", color: "#1A0A00" }}>
          {item.name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#5A3A1A" }}>{item.desc}</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.accent }} />
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#9A7560", fontFamily: "Syne,sans-serif" }}>
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
    <section id="menu" className="py-24 dot-pattern-light" style={{ backgroundColor: "#FFF8EE" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border"
                style={{ color: "#C8272D", borderColor: "rgba(200,39,45,0.3)", fontFamily: "Syne,sans-serif" }}>
            Pilihan Varian
          </span>
          <h2 className="font-black leading-tight" style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.5rem,6vw,4rem)", color: "#1A0A00" }}>
            Coba Semua <span style={{ color: "#C8272D" }}>Variannya</span>
          </h2>
          <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: "#5A3A1A" }}>
            Enam pilihan pizza panjang dengan topping premium — semuanya halal dan fresh baked setiap hari.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menus.map((item, i) => <Card key={item.name} item={item} index={i} />)}
        </div>

        {/* ingredients */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 rounded-3xl p-6 md:p-8" style={{ backgroundColor: "#1A0A00" }}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl mt-0.5">📋</span>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: "#D4A017", fontFamily: "Syne,sans-serif" }}>Komposisi Bahan</h4>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,230,204,0.75)" }}>
                Tepung terigu, telur, minyak nabati, gula, garam, pengemulsi roti, air, saos bolognese, mozarella, oregano,
                aneka topping (sosis, jagung pipil, daging sapi cincang, bakso sapi, pepperoni dan keju melted slice, mayonaise, saos pedas, saos kejui).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
