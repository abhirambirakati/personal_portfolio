import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.png";

const roles = ["Data Analyst", "Python Developer", "Problem Solver"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text.length + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="section-container w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="badge-tag mb-6 inline-block">
              DATA ANALYST & PYTHON DEVELOPER
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.95] tracking-tight mb-1">
              BIRAKATI
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-dim leading-[0.95] tracking-tight mb-6">
              ABHIRAM
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-3">
              {text}
              <span className="animate-blink text-foreground">|</span>
            </p>

            <p className="text-sm md:text-base text-muted-foreground max-w-lg mb-8 leading-relaxed">
              I specialize in building <span className="text-foreground font-medium">data-driven solutions</span> and{" "}
              <span className="text-foreground font-medium">analytical dashboards</span>. Transforming raw data into actionable insights.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
              >
                EXPLORE WORK <ArrowRight size={16} />
              </motion.a>

              <div className="flex items-center gap-3">
                <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/abhirambirakati" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all" aria-label="GitHub">
                  <Github size={18} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/birakatiabhiram/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="mailto:abhirambirakati18@gmail.com" className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all" aria-label="Email">
                  <Mail size={18} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="/resume/AbhiramResume.pdf" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all" aria-label="Download CV">
                  <Download size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-border glow-circle">
                <img src={profileImg} alt="Birakati Abhiram" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden lg:flex justify-center mt-16"
        >
          <a href="#about" className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors">
            <ChevronDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
