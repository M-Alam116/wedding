import Cities from "@/components/Home/Cities";
import HeroSection from "@/components/Home/HeroSection";

export default function HomePage() {
  return (
    <div className="container">
      <HeroSection />
      <Cities />
    </div>
  );
}
