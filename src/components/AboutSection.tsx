import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10">
      <div className="container px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title text-foreground mb-4">About Me</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card p-8 md:p-10"
          >
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I’m a passionate Computer Science student with a deep interest in Data Science, Artificial Intelligence, and Machine Learning. I enjoy turning complex data into meaningful insights and building intelligent systems that make a real-world impact.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
               My journey in tech is driven by curiosity and a constant desire to learn. Whether it’s experimenting with deep learning architectures, developing predictive models, or exploring new AI ideas, I love pushing my boundaries and growing with every project I work on.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
              or diving into research papers that challenge my understanding of what's possible with AI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;