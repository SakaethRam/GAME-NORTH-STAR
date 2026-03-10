const brands = [
  { name: "Luminary", icon: "◑" },
  { name: "45 Degrees°", icon: "↗" },
  { name: "Codecraft_", icon: "⬤" },
  { name: "Frequencii", icon: "◆" },
  { name: "Kintsugi", icon: "◈" },
  { name: "CoreOS", icon: "⬡" },
];

const TrustedByMarquee = () => {
  return (
    <div className="py-4 sm:py-6 border-t border-b border-border/40 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
        <div className="overflow-hidden marquee-mask">
          <div
            className="flex items-center gap-8 sm:gap-10 md:gap-12 whitespace-nowrap"
            style={{
              animation: "marquee-scroll 20s linear infinite",
              width: "max-content",
            }}
          >
            {[...Array(3)].flatMap((_, setIdx) => [
              <span
                key={`${setIdx}-label`}
                className="text-xs sm:text-sm text-muted-foreground/50 font-medium"
              >
                <span className="font-bold text-foreground/60">ZREX</span>
              </span>,

              ...brands.map((brand, i) => (
                <span
                  key={`${setIdx}-${i}`}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-muted-foreground/50"
                >
                  <span className="text-sm sm:text-base">{brand.icon}</span>
                  {brand.name}
                </span>
              )),
            ])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedByMarquee;