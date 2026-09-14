import Navbar from "@/components/home/Navbar";
import AboutHero from "@/components/about/AboutHero";
import ScrollTimelinePro from "@/components/about/ScrollTimelinePro";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white">
      <Navbar />
      <AboutHero />
      <div id="timeline">
        <ScrollTimelinePro />
      </div>
    </main>
  );
}
