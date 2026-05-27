import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MenuSection from "@/components/MenuSection";
import Features from "@/components/Features";
import Outlets from "@/components/Outlets";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <MenuSection />
      <Features />
      <Outlets />
      <OrderSection />
      <Footer />
    </main>
  );
}
