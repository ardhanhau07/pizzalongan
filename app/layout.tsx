import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pizzalongan — Pizza Panjang Pekalongan",
  description: "Cara baru makan Pizza, rasa nikmat tiada tara. Pizza panjang khas Pekalongan. Halal, Fresh Baked Everyday.",
  keywords: ["pizza", "pekalongan", "pizzalongan", "pizza panjang", "halal"],
  openGraph: {
    title: "Pizzalongan — Pizza Panjang Pekalongan",
    description: "Cara baru makan Pizza, rasa nikmat tiada tara.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
