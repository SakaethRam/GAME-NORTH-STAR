import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { useRef, useState } from "react";
import { Plus, X, GitlabIcon } from "lucide-react";

const faqs = [
  {
    q: "What kind of projects can I find in your GitHub repositories?",
    a: "My GitHub showcases a range of projects including modern web applications, UI experiments, developer tools, and open-source utilities. Many projects focus on React, TypeScript, animation libraries, and modern frontend architecture."
  },
  {
    q: "Are your repositories open source and available for collab?",
    a: "Yes. Most repositories are open source and available for learning, experimentation, and collaboration. Contributions, issue reports, and discussions are always welcome."
  },
  {
    q: "What technologies do you primarily work with?",
    a: "I mainly work with modern frontend technologies including React, TypeScript, TailwindCSS, Framer Motion, and GSAP, along with Node.js for backend services and developer tooling."
  },
  {
    q: "Can I use your projects as references or starter templates?",
    a: "Absolutely. Many repositories are structured to help developers learn patterns, UI techniques, and architecture decisions."
  },
  {
    q: "Do you accept collaboration or freelance opportunities?",
    a: "Yes. If you have an interesting project, open-source idea, or product concept, feel free to reach out."
  }
];

export default function FAQSection() {
  const faqRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: faqRef,
    offset: ["start start", "end end"]
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const y = useSpring(yTransform, {
    stiffness: 45,
    damping: 25
  });

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 flex justify-center">
      <div
        ref={faqRef}
        className="max-w-6xl w-full grid lg:grid-cols-2 gap-16"
      >

        {/* LEFT FAQ */}
        <div className="space-y-4">

          <h2 className="text-4xl sm:text-5xl font-bold mb-10">
            Your questions <br />
            <span className="text-muted-foreground">answered.</span>
          </h2>

          {faqs.map((faq, i) => {
            const active = open === i;

            return (
              <motion.div
                key={i}
                layout
                transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
                className="border rounded-xl bg-card overflow-hidden"
              >

                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium">{faq.q}</span>

                  <motion.div
                    animate={{ rotate: active ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {active ? <X size={18} /> : <Plus size={18} />}
                  </motion.div>
                </button>

                {active && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pb-5 text-sm text-muted-foreground"
                  >
                    {faq.a}
                  </motion.div>
                )}

              </motion.div>
            );
          })}
        </div>

        {/* RIGHT CARD */}
        <div className="relative hidden lg:block">

          <motion.div
            style={{ y }}
            className="sticky top-28 bg-card border rounded-2xl p-8 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="mb-5">
              <p className="text-muted-foreground">Still not sure?</p>
              <h3 className="text-xl font-semibold">
                Book a free discovery call.
              </h3>
            </div>

            <p className="text-muted-foreground mb-6 text-sm">
              Learn more about how I work and how I can help you take the next step.
            </p>

            <a href="https://gitlab.com">
              <button className="bg-black text-white px-5 py-3 rounded-xl flex items-center gap-2">
                <GitlabIcon className="w-4 h-4" />
                Schedule Now
              </button>
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}