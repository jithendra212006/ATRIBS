import Navbar from "@/components/home/Navbar";
import GradientWaves from "@/components/backgrounds/GradientWaves";
import Hero from "@/components/home/Hero";
import Forte from "@/components/home/Forte";
import Solutions from "@/components/home/Solutions";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Background Gradient Waves */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <GradientWaves
          horizonColor="#EF4444"
          waveColor="#be185d"
          crestColor="#18181b"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="high"
          brightness={1.2}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.5}
          grain
          grainIntensity={0.03}
        />
      </div>

      {/* hero */}
      <Hero />

      {/* forte */}
      <Forte />

      <Solutions />
    </main>
  );
}
