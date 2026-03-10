import { motion } from "framer-motion";
import {
  Palette,
  Globe,
  Layout,
  MonitorSmartphone,
  Sparkles,
  Box,
  PenTool,
  Figma,
  Code,
  Cuboid,
  Wand2
} from "lucide-react";

const services = [
  { icon: Globe, label: "Web Development" },
  { icon: Palette, label: "Brand Design" },
  { icon: MonitorSmartphone, label: "Web Apps" },
  { icon: Layout, label: "Landing Pages" },
  { icon: Sparkles, label: "Motion Graphics" },
  { icon: Box, label: "3D Design" },
  { icon: PenTool, label: "UX / UI Consultation" },
];

const techStack = [
  { name: "Figma", icon: Figma },
  { name: "Framer", icon: Wand2 },
  { name: "Webflow", icon: Globe },
  { name: "React", icon: Code },
  { name: "Spline", icon: Cuboid },
  { name: "Rive", icon: Sparkles },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 border-b border-border/30 flex justify-center"
    >
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 sm:mb-8">
              <span className="text-muted-foreground">Services that</span>
              <br />
              supercharge your business.
            </h2>

            {/* Tech Stack */}
            <div className="mt-10">
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 tracking-wide">
                TECH STACK
              </p>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 sm:gap-4 max-w-sm">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-foreground text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform"
                    title={tech.name}
                  >
                    <tech.icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SERVICES LIST */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 py-2 sm:py-3"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-foreground text-primary-foreground flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <span className="font-medium text-sm sm:text-base text-foreground">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;