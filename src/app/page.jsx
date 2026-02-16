import NewsLetter from "@/components/home/NewsLetter";
import About from "./about/page";
import Testimonials from "@/components/home/Testimonials";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <About />
      <Testimonials />
      <NewsLetter />
    </div>
  );
}
