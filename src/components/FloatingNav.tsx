import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showContactBar, setShowContactBar] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [navInteraction, setNavInteraction] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (navInteraction) return;

      setScrolled(window.scrollY > 50);
      setIsScrolling(true);

      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [navInteraction]);

  const handleNavClick = () => {
    setNavInteraction(true);
    setMobileMenu(false);

    setTimeout(() => {
      setNavInteraction(false);
    }, 700);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-2 right-2 sm:left-0 sm:right-0 mx-auto w-auto sm:w-fit max-w-[95%] z-50 flex items-center justify-between px-2 py-2 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 ${
          scrolled
            ? "bg-card/80 backdrop-blur-xl shadow-lg border border-border"
            : "bg-card/60 backdrop-blur-md border border-border/50"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-3">
          <a href="#"><span className="font-semibold text-sm text-foreground">
            ZREX · ARCHIVES
          </span></a>
        </div>

        {/* Animated Nav Area */}
        <motion.div layout className="flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            {isScrolling && !navInteraction ? (
              <motion.div
                key="loading"
                layout
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 40 }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex items-center justify-center gap-1"
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="nav"
                layout
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="flex items-center"
              >
                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={handleNavClick}
                      className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Contact Button */}
                <button
                  onClick={() => {
                    handleNavClick();
                    setShowContactBar(!showContactBar);
                  }}
                  className="hidden md:block ml-1 px-4 py-1.5 text-sm font-medium bg-foreground text-primary-foreground rounded-xl hover:opacity-90 transition-opacity"
                >
                  Connect
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="md:hidden ml-2 p-2 rounded-full hover:bg-muted transition"
                >
                  {mobileMenu ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <Menu className="w-4 h-4" />
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 mx-auto w-[90%] max-w-sm rounded-2xl border border-border bg-card/90 backdrop-blur-xl shadow-lg z-40 p-4 flex flex-col gap-2 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                handleNavClick();
                setShowContactBar(!showContactBar);
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-foreground text-primary-foreground text-sm"
            >
              Connect
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Contact Bar */}
<AnimatePresence>
  {showContactBar && (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 80 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed bottom-14 left-0 right-0 flex justify-center z-40"
    >
      <div
        className="flex items-center gap-4 px-5 py-3 rounded-2xl
        bg-transparent dark:bg-white/5
        backdrop-blur-xl
        border border-white/20 dark:border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        text-foreground"
      >
        {/* Text block (UP | DOWN) */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium">Speak to us</span>
          <span className="text-xs text-muted-foreground">
            Email or book a call
          </span>
        </div>

        {/* Icons (LEFT | RIGHT) */}
        <div className="flex items-center gap-3 ml-2">
          <a
            href="mailto:crew.gunmetal@gmail.com"
            className="w-9 h-9 rounded-xl
            bg-black dark:bg-white/10
            flex items-center justify-center
            hover:scale-105 hover:bg-black/90
            transition-all shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          >
            <Mail className="w-4 h-4 text-white" />
          </a>

          <a
            href="tel:+918925351116"
            className="w-9 h-9 rounded-xl
            bg-white/15 dark:bg-white/10
            flex items-center justify-center
            hover:scale-105 hover:bg-white/25
            transition-all shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};

export default FloatingNav;