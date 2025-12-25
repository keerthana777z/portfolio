import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* ================= BACKGROUND GLOW LAYER ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Top-left glow */}
        <div className="absolute w-[520px] h-[520px] bg-blue-500/25 rounded-full blur-3xl top-[-180px] left-[-180px]" />

        {/* Bottom-right glow */}
        <div className="absolute w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-3xl bottom-[-160px] right-[-160px]" />

        {/* Center subtle glow */}
        <div className="absolute w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container relative z-10 px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* ================= PROFILE IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="relative inline-block group"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1 mx-auto transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/profile.jpg"   // 👉 put your photo here
                  alt="Keerthana AR"
                  className="w-full h-full rounded-full object-cover bg-secondary"
                />
              </div>

              {/* Glow ring on hover */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>

          {/* ================= HEADING ================= */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Keerthana AR</span>
          </motion.h1>

          {/* ================= SUBTITLE ================= */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Computer Science Student | Data Science | AI & ML | Data Analysis |
            Cloud Computing
          </motion.p>

          {/* ================= BUTTONS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="px-8 py-6 text-base font-medium"
            >
              View Projects
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("about")}
              className="px-8 py-6 text-base font-medium border-primary/30 hover:bg-primary/10 hover:border-primary/50"
            >
              Learn More About Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-primary/60 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
