import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Training", href: "#training" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-md" : "py-4"
      }`}
    >
      <div className="section-container flex items-center justify-between">

        {/* BRAND NAME (REPLACED LOGO) */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-foreground hover:opacity-80 transition"
        >
          Abhiram
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              {item.label}

              {/* UNDERLINE HOVER EFFECT */}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* RESUME BUTTON */}
        <div className="hidden lg:block">
          <a
            href="/resume/AbhiramResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] px-5 py-2 rounded-full border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-1"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/resume/AbhiramResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-full border border-border text-foreground text-center mt-2 hover:bg-foreground hover:text-background transition-all"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;