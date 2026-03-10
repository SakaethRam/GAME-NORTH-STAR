import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuoteHighlight() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const lines = [
    "Success seems to be connected with action.",
    "Successful people keep moving.",
    "They make mistakes, but they don't quit.",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const quoteLines = gsap.utils.toArray<HTMLElement>(".quote-line");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%", // controls scroll distance before next section
          scrub: true,
          pin: true, // locks section
        },
      });

      quoteLines.forEach((line) => {
        tl.to(line, {
          opacity: 1,
          color: "#000",
          duration: 1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-4xl text-center px-6">

          {/* Quote */}
          <div className="space-y-4 mb-16">
            {lines.map((line, i) => (
              <p
                key={i}
                className="quote-line text-3xl sm:text-4xl font-medium leading-relaxed text-neutral-400 opacity-30"
              >
                {i === 0 ? `"${line}` : line}
                {i === lines.length - 1 ? `"` : ""}
              </p>
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://i.pravatar.cc/100?img=3"
              alt="Thomas Weber"
              className="w-12 h-12 rounded-xl"
            />

            <div className="text-left">
              <p className="font-semibold">Conrad Hilton</p>
              <p className="text-sm text-neutral-500">
                Co-founder of ZREX
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}