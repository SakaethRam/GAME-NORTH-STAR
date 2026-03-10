import { motion } from "framer-motion";
import {
  Instagram,
  Dribbble,
  Linkedin,
  Github,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-footer-bg text-footer-foreground pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6 section-padding flex justify-center relative"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold leading-[1.05] mb-12 sm:mb-16"
        >
          Let's{" "}
          <span className="inline-block h-[1.1em] overflow-hidden align-bottom">
            <motion.span
              className="flex flex-col"
              animate={{
                y: [
                  "0%", "0%",
                  "-25%", "-25%",
                  "-50%", "-50%",
                  "-75%"
                ]
              }}
              transition={{
                duration: 9,
                ease: "easeInOut",
                repeat: Infinity
              }}
            >
              <span>Create</span>
              <span>Build</span>
              <span>Connect</span>
              <span>Create</span>
            </motion.span>
          </span>

          <br />

          <span className="text-footer-foreground/50">
            incredible work together.
          </span>
        </motion.h2>

        {/* Contact Row */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12">

          {/* Email */}
          <div>
            <p className="text-sm text-footer-foreground/50 mb-2">Email</p>
            <a
              href="mailto:crew.gunmetal@gmail.com"
              className="font-semibold text-sm sm:text-base hover:opacity-70 transition-opacity"
            >
              crew@gunmetal.dev
            </a>
          </div>

          {/* Call */}
          <div>
            <p className="text-sm text-footer-foreground/50 mb-2">Call Me</p>
            <a
              href="#"
              className="font-semibold text-sm sm:text-base hover:opacity-70 transition-opacity"
            >
              Book Now
            </a>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm text-footer-foreground/50 mb-2">Social</p>

            <div className="flex flex-wrap gap-2">

              <a href="https://x.com" target="_blank" rel="noopener noreferrer"><div className="flex items-center gap-2 px-3 h-9 rounded-full bg-white hover:-translate-y-2 transition-transform cursor-pointer text-sm">
                <TwitterIcon size={16} color="black" />
                <span className="text-xs text-black font-bold opacity-70">
                  1,214
                </span>
              </div></a>

              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><div className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer">
                <Instagram size={16} color="black" />
              </div></a>

              <a href="https://dribbble.com/crew-gunmetal" target="_blank" rel="noopener noreferrer"><div className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer">
                <Dribbble size={16} color="black" />
              </div></a>

              <a href="https://github.com/SakaethRam" target="_blank" rel="noopener noreferrer"><div className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer">
                <Github size={16} color="black" />
              </div></a>

              <a href="https://www.linkedin.com/in/sakaethram" target="_blank" rel="noopener noreferrer"><div className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:-translate-y-2 transition-transform cursor-pointer">
                <Linkedin size={16} color="black" />
              </div></a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-footer-foreground/10 pt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-10">

          {/* Menu */}
          <div>
            <p className="text-xs text-footer-foreground/40 mb-3">Menu</p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <a href="#projects" className="hover:opacity-70 transition-opacity">
                Work
              </a>
              <a href="#services" className="hover:opacity-70 transition-opacity">
                Services
              </a>
              <a href="#pricing" className="hover:opacity-70 transition-opacity">
                Pricing
              </a>
              <a href="#blog" className="hover:opacity-70 transition-opacity">
                Blog
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs text-footer-foreground/40 mb-3">Legal</p>

            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="hover:opacity-70 transition-opacity">
                Terms of service
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-footer-foreground/40 md:text-right">
            © 2026 GUN | METAL. All Rights Reserved.
          </div>
        </div>

        {/* Big Background Branding */}
        <div className="flex justify-center mt-12 overflow-hidden pointer-events-none h-[4rem] sm:h-[6rem] md:h-[8rem] lg:h-[9rem]">
          <p className="text-[6rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem] font-bold leading-none text-white tracking-tighter select-none text-center">
            Z R E X
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;