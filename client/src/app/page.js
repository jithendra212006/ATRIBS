import Navbar from "@/components/home/Navbar";
import GradientWaves from "@/components/backgrounds/GradientWaves";
import Hero from "@/components/home/Hero";
import Forte from "@/components/home/Forte";
import Solutions from "@/components/home/Solutions";
import ServicesSection from "@/components/home/ServicesSection";
import GlobalConnections from "@/components/home/GlobalConnections";
import TechStackIntegrations from "@/components/home/TechStackIntegrations";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Background Gradient Waves */}

      {/* hero */}
      <Hero />

      {/* forte */}
      <Forte />

      <Solutions />

      <GlobalConnections />

      <TechStackIntegrations />

      <Footer />
    </main>
  );
}
