import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedStars from "@/components/AnimatedStars";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <ScrollProgress />
      <AnimatedStars />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;