import { motion } from "framer-motion";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import { GitlabIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-28 pb-20 flex items-center border-b border-border overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-10 shadow-sm">
              <div className="relative flex items-center justify-center w-3 h-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-black opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </div>
              <span className="text-sm text-muted-foreground">
                Capstone Edition March'26
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-8">
              <span className="text-muted-foreground font-medium">
                Design that
              </span>
              <br />
              <span className="text-foreground">
                delivers results.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              <span className="font-semibold text-foreground">
                Strategic design that drives growth, not just looks good.
              </span>{" "}
              I create everything your brand needs to attract customers and
              turn them into sales.
            </p>

            <motion.a
              href="https://gitlab.com" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <GitlabIcon className="w-4 h-4" />
              Book a NoteLab
            </motion.a>
          </motion.div>

          {/* FLOATING PROJECT CARDS (RESPONSIVE) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[320px] sm:h-[420px] lg:h-[520px] mt-10 lg:mt-0"
          >
            {[project1, project2, project3, project4].map((img, i) => (
              <motion.div
                key={i}
                className="absolute rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-card"
                style={{
                  width: "75%",
                  top: `${i * 28}px`,
                  right: `${i * 6}%`,
                  rotate: `${-6 + i * 4}deg`,
                  zIndex: 4 - i,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 20,
                }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;