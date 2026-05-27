"use client";

const items = [
  "🍕 Supreme Mix",
  "🥩 Meat Lovers",
  "🧀 American Cheese",
  "🌶️ Beef Pepperoni",
  "🌭 Sausage Pizza",
  "🍖 Meatball Pizza",
  "✅ Halal Certified",
  "🔥 Fresh Baked Everyday",
  "❤️ Made with Love",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <section id="marquee" className="bg-[#C8272D] overflow-hidden py-4">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-white font-syne font-bold text-sm tracking-widest uppercase whitespace-nowrap flex items-center gap-3"
          >
            {item}
            <span className="text-[#D4A017] text-xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
