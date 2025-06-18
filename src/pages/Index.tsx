import Hero from "@/components/Hero";
import PropertiesGrid from "@/components/PropertiesGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PropertiesGrid />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
