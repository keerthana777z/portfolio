import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import AnimatedStars from "@/components/AnimatedStars";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import WaveDivider from "@/components/WaveDivider";

function App() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      
      {/* Global Effects */}
      <AnimatedStars />
      <CursorGlow />
      <ScrollProgress />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />

        <WaveDivider />
        <AboutSection />

        <WaveDivider />
        <ProjectsSection />

        <WaveDivider />
        <HobbiesSection />

        <WaveDivider />
        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}

export default App;
