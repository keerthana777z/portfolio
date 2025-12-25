import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative z-10">
      <div className="container px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-foreground mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-10">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex flex-col gap-4">
              <a
                href="mailto:arkeerthana2004@gmail.com"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">arkeerthana2004@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/keerthana4444/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">LinkedIn</span>
              </a>

              <a
                href="https://github.com/keerthana777z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;