import { motion } from "framer-motion";
import { ExternalLink, Github, BarChart3, LayoutDashboard, HardDrive } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "EDA on Sales & Profits Trends (2021–2024)",
    description: "Conducted exploratory data analysis on four years of sales and profit data to identify key business trends, seasonal patterns, and underperforming segments.",
    features: [
      "Seasonal sales pattern analysis",
      "Statistical inference tests (Z-test, t-test, Chi-square)",
      "Detailed data visualizations",
      "Profit distribution insights",
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/abhirambirakati",
  },
  {
    icon: LayoutDashboard,
    title: "Sales & Profit Dashboard",
    description: "Designed a dynamic, multi-year sales and profit dashboard using Microsoft Excel to support business performance monitoring.",
    features: [
      "PivotTables and Slicers",
      "Power Query data transformation",
      "Conditional formatting insights",
      "Automated data cleaning workflows",
    ],
    tech: ["Microsoft Excel", "Power Query"],
    github: "https://github.com/abhirambirakati",
  },
  {
    icon: HardDrive,
    title: "Advanced Disk Scheduling Simulator",
    description: "Interactive Python/Tkinter application to simulate and compare six disk scheduling algorithms used in operating systems.",
    features: [
      "Six algorithm comparison",
      "Real-time head movement visualization",
      "Seek time and throughput benchmarking",
      "Interactive GUI interface",
    ],
    tech: ["Python", "NumPy", "Tkinter", "Matplotlib"],
    github: "https://github.com/abhirambirakati",
  },
  {
    icon: LayoutDashboard,
    title: "Online Course Management System",
    description: "A full-stack learning management platform similar to Udemy/Coursera built with Django, featuring comprehensive course creation, video lectures, and REST API integration.",
    features: [
      "Student and instructor login system",
      "Course creation and management",
      "Video lectures and learning modules",
      "REST APIs for backend communication",
    ],
    tech: ["Django", "Python", "PostgreSQL", "REST APIs", "JavaScript"],
    github: "https://github.com/abhirambirakati",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title mb-3">Featured Projects</h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Showcasing my work in Data Analysis and Python Development.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-dark hover-card p-6 md:p-8"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <project.icon size={22} className="text-foreground mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="badge-tag">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors border border-border rounded-full px-3 py-1.5">
                      <Github size={14} /> View GitHub
                    </a>
                  </div>
                </div>

                <div className="lg:w-64 flex-shrink-0">
                  <h4 className="text-xs font-semibold text-foreground mb-3 tracking-wide uppercase">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
