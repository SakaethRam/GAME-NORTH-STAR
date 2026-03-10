import { motion } from "framer-motion";
import { ArrowUpRight, GithubIcon } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";

const projects = [
  { img: project1, name: "KYMA", type: "AI Agency" },
  { img: project2, name: "Mugen", type: "Design Studio" },
  { img: project3, name: "Essentia", type: "Ecommerce Site" },
  { img: project4, name: "Axiom", type: "Ecommerce Site" },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 flex justify-center border-b border-border/30"
    >
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-12 sm:mb-16 text-center"
        >
          Latest Works
        </motion.h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              {/* Image */}
              <div className="rounded-2xl overflow-hidden bg-muted mb-4">
                <motion.img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-52 sm:h-60 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Project Info */}
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-base sm:text-lg truncate">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {project.type}
                  </p>
                </div>

                <a href="https://github.com/SakaethRam" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
                  <ArrowUpRight className="w-4 h-4" />
                  
                <span className="relative">
                  View Repository
                <span className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10 sm:mt-12">
          
          <a href="https://github.com/SakaethRam" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-2 text-sm sm:text-base font-medium text-foreground">
          <GithubIcon className="w-4 h-4" />
          <span className="relative">
            ZREX · ARCHIVES || REPOSITORIES
            <span className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;