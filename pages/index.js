import Cities from "@/components/Home/Cities";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Working from "@/components/Home/Working";

export default function HomePage() {
  return (
    <div className="container">
      <HeroSection />
      <Cities />
      <Working />
      <Services />
    </div>
  );
}
