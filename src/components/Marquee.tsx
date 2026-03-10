import { motion } from "framer-motion";

const Marquee = () => {
  const brands = [
    "Frequencii",
    "Kintsugi",
    "CoreOS",
    "Luminary",
    "45 Degrees"
  ];

  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8"
        >

          {/* Label */}
          <div className="flex items-center justify-center md:justify-start gap-4 flex-shrink-0">
            <span className="text-base sm:text-lg font-bold text-muted-foreground whitespace-nowrap">
              ZREX · ARCHIVES
            </span>
          </div>

          {/* MARQUEE */}
          <div className="overflow-hidden flex-1 w-full min-w-0">
            <div
              className="flex items-center gap-10 sm:gap-14 md:gap-16 whitespace-nowrap"
              style={{
                animation: "marquee-scroll 16s linear infinite",
                width: "max-content"
              }}
            >
              {[...Array(2)].flatMap((_, setIdx) =>
                brands.map((name, i) => (
                  <span
                    key={`${setIdx}-${i}`}
                    className="text-base sm:text-lg font-semibold text-muted-foreground/60"
                  >
                    {name}
                  </span>
                ))
              )}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Marquee;