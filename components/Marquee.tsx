"use client";

const items = [
  "🍕 Supreme Mix","🥩 Meat Lovers","🧀 American Cheese","🌶️ Beef Pepperoni",
  "🌭 Sausage Pizza","🍖 Meatball Pizza","✅ Halal Certified","🔥 Fresh Baked Everyday","❤️ Made with Love",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <section id="marquee" className="overflow-hidden py-4" style={{ backgroundColor: "#C8272D" }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="text-white font-bold text-sm tracking-widest uppercase whitespace-nowrap flex items-center gap-3"
                style={{ fontFamily: "Syne,sans-serif" }}>
            {item}
            <span style={{ color: "#D4A017" }} className="text-xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
