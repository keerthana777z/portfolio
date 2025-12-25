import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ================= TYPES ================= */

type Category =
  | "All"
  | "AI/ML"
  | "Full Stack"
  | "Distributed Systems"
  | "Web Dev"
  | "Others";

const categories: Category[] = [
  "All",
  "AI/ML",
  "Full Stack",
  "Distributed Systems",
  "Web Dev",
  "Others",
];

/* ================= PROJECT DATA ================= */

const projects = [
  {
    title: "Multimodal Parkinson’s Disease Classification",
    category: "AI/ML" as Category,
    description:
      "A research-oriented multimodal deep learning system for early Parkinson’s disease detection. Designed a three-stream CNN–LSTM architecture to jointly model handwriting dynamics, gait signals, and speech features, followed by feature-level fusion to improve diagnostic robustness.",
    tech: ["Deep Learning", "CNN", "LSTM", "TensorFlow", "Keras"],
    image: "/projects/parkinsons.png",
    github:
      "https://github.com/keerthana777z/Multimodal-parkinson-Disease-Prediction",
  },
  {
    title: "Somnolence and Emotion Detection Study (LAMP)",
    category: "AI/ML" as Category,
    description:
      "A multimodal affective computing study exploring the relationship between drowsiness and emotional states using facial cues and physiological signals, with applications in healthcare, driver monitoring, and HCI research.",
    tech: ["Computer Vision", "Emotion AI", "Python"],
    image: "/projects/somnolence.png",
    github:
      "https://github.com/keerthana777z/Somnolence-and-Emotion-Detection-Study_lamp-main",
  },
  {
    title: "Graph-Based Drug Repurposing Recommender",
    category: "AI/ML" as Category,
    description:
      "A GNN-based biomedical system that predicts novel drug–target interactions using a Neo4j knowledge graph, accelerating drug repurposing and improving interpretability in bioinformatics research.",
    tech: ["GNN", "Neo4j", "PyTorch"],
    image: "/projects/drugrepurposing.png",
    github:
      "https://github.com/keerthana777z/Graph-Based-Drug-Repurposing-Recommender",
  },
  {
    title: "AI-Based Dark Pattern Detection System",
    category: "AI/ML" as Category,
    description:
      "An NLP-driven system that detects deceptive UI/UX dark patterns from websites using a fine-tuned BERT classifier and dynamic scraping, enabling ethical compliance analysis.",
    tech: ["BERT", "NLP", "Selenium"],
    image: "/projects/darkpattern.png",
    github:
      "https://github.com/keerthana777z/AI_BASED_dark-pattern-detector",
  },
  {
    title: "Precedent-Aware Legal Verdict Generator",
    category: "AI/ML" as Category,
    description:
      "A legal AI system using retrieval-augmented generation to predict verdicts grounded in historical legal precedents, improving explainability and reducing hallucinations.",
    tech: ["RAG", "Transformers", "Legal AI"],
    image: "/projects/legalverdict.png",
    github:
      "https://github.com/keerthana777z/Precedent-Aware-Legal-Verdict-Generator",
  },
  {
    title: "Multimodal Anemia Detection",
    category: "AI/ML" as Category,
    description:
      "A medical imaging system for anemia detection from blood smear images using CNN-based feature extraction to support early diagnosis.",
    tech: ["Medical Imaging", "CNN"],
    image: "/projects/anemia.png",
    github:
      "https://github.com/keerthana777z/Anemia-detection-using-Blood-smear-images-",
  },
  {
    title: "Amazon E-Commerce Kafka Simulation",
    category: "Distributed Systems" as Category,
    description:
      "A real-time Kafka-based simulation of an Amazon-like e-commerce platform demonstrating producer–consumer pipelines for orders, payments, and delivery tracking.",
    tech: ["Kafka", "Microservices"],
    image: "/projects/kafka.png",
    github:
      "https://github.com/keerthana777z/Amazon-E-Commerce-Kafka-Simulation",
  },
  {
    title: "Campus Connect",
    category: "Full Stack" as Category,
    description:
      "A full-stack campus platform designed to centralize academic information, improve communication, and enhance student engagement.",
    tech: ["Frontend", "Backend"],
    image: "/projects/campusconnect.png",
    github: "https://github.com/keerthana777z/Campus-connect-",
  },
  {
    title: "MYTHICON",
    category: "Web Dev" as Category,
    description:
      "A creative frontend project focused on immersive storytelling and expressive UI/UX design with smooth interactions.",
    tech: ["UI/UX", "Frontend"],
    image: "/projects/mythicon.png",
    github: "https://github.com/keerthana777z/MYTHICON",
  },
  {
    title: "Netflix Landing Page Clone",
    category: "Web Dev" as Category,
    description:
      "A responsive Netflix landing page clone built to practice real-world layout accuracy, responsiveness, and visual fidelity.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/netflix.png",
    github: "https://github.com/keerthana777z/Landing-page-Netflix",
  },
];

/* ================= COMPONENT ================= */

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A curated collection of research, AI/ML, distributed systems, and
            full-stack projects.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="project-card relative"
            >
              <div className="flex flex-col h-full">

                {/* Image */}
                <div className="w-full h-48 mb-5 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-secondary border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit relative z-10"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
