import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Reviews />
      <Gallery />
      <Schedule />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
