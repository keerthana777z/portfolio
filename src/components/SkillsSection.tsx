import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "NLP", "CNN", "Computer Vision", "Neural Networks"],
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "R", "SQL", "JavaScript", "C++"],
  },
  {
    title: "Data Science",
    skills: ["Data Analysis", "Data Visualization", "Statistical Modeling", "Feature Engineering", "Pandas", "NumPy"],
  },
  {
    title: "Tools & Technologies",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Git", "Docker", "AWS", "Jupyter"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative z-10">
      <div className="container px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical competencies spanning the full AI/ML and Data Science lifecycle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                    className="skill-pill"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;