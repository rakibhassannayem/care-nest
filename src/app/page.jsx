import NewsLetter from "@/components/home/NewsLetter";
import About from "./about/page";
import Testimonials from "@/components/home/Testimonials";
import HeroSection from "@/components/home/HeroSection";
import ServicesPage from "./services/page";

export default function Home() {
  // throw new Error("This is a test error!");
  return (
    <div className="space-y-20">
      <HeroSection />
      <About />
      <ServicesPage />
      <Testimonials />
      <NewsLetter />
    </div>
  );
}
