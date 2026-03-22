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
    const timeout = setTimeout(() => {
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
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="section-container w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* LEFT SIDE */}
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
              <span className="text-foreground font-medium">analytical dashboards</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition"
              >
                EXPLORE WORK <ArrowRight size={16} />
              </motion.a>

              <div className="flex items-center gap-3">
                <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/abhirambirakati" target="_blank" className="p-3 rounded-full border hover:text-foreground transition">
                  <Github size={18} />
                </motion.a>

                <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/birakatiabhiram/" target="_blank" className="p-3 rounded-full border hover:text-foreground transition">
                  <Linkedin size={18} />
                </motion.a>

                <motion.a whileHover={{ scale: 1.1 }} href="mailto:abhirambirakati18@gmail.com" className="p-3 rounded-full border hover:text-foreground transition">
                  <Mail size={18} />
                </motion.a>

                <motion.a whileHover={{ scale: 1.1 }} href="/resume/AbhiramResume.pdf" target="_blank" className="p-3 rounded-full border hover:text-foreground transition">
                  <Download size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative flex items-center justify-center">

              {/* GLOW EFFECT */}
              <div className="absolute w-72 h-72 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>

              {/* IMAGE */}
              <img
                src={profileImg}
                alt="Abhiram"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transition duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* SCROLL ICON */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden lg:flex justify-center mt-16"
        >
          <a href="#about" className="p-2 rounded-full border hover:text-foreground transition">
            <ChevronDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;