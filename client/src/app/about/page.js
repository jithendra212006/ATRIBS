import Navbar from "@/components/home/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AtribsStoryBook from "@/components/Story/AtribsStoryBook";
import AtribsBento from "@/components/about/AtribsBento";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white">
      <Navbar />
      <AboutHero />
      <AtribsStoryBook />
      {/* <AtribsBento /> */}
    </main>
  );
}
