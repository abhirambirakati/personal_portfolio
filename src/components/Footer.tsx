import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2025 Birakati Abhiram. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/abhirambirakati" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/birakatiabhiram/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href="mailto:abhirambirakati18@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
