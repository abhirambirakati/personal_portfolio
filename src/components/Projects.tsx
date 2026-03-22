import { motion } from "framer-motion";
import { ExternalLink, Github, BarChart3, LayoutDashboard, HardDrive, Code } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Trendline Predictor",
    description:
      "A data analysis project that predicts future trends using historical datasets. Built with Python and visualization libraries to generate actionable insights.",
    features: [
      "Trend prediction using historical data",
      "Data cleaning and preprocessing",
      "Visualization using Matplotlib",
      "Insight generation for decision making",
    ],
    tech: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/abhirambirakati/summerTrainingProject",
    live: "#",
  },

  {
    icon: BarChart3,
    title: "EDA on Sales & Profit Trends",
    description:
      "Performed exploratory data analysis on multi-year sales data to identify patterns, seasonal trends, and business insights.",
    features: [
      "Seasonal trend analysis",
      "Statistical testing (Z-test, T-test)",
      "Data visualization dashboards",
      "Business insights extraction",
    ],
    tech: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    github: "https://github.com/abhirambirakati",
    live: "#",
  },

  {
    icon: LayoutDashboard,
    title: "Sales Dashboard (Excel)",
    description:
      "Interactive dashboard built in Excel for analyzing sales performance using PivotTables and Power Query.",
    features: [
      "Dynamic filtering with slicers",
      "PivotTable-based insights",
      "Automated data cleaning",
      "Performance tracking dashboards",
    ],
    tech: ["Excel", "Power Query"],
    github: "#",
    live: "#",
  },

  {
    icon: HardDrive,
    title: "Disk Scheduling Simulator",
    description:
      "A Python GUI application to simulate and compare disk scheduling algorithms with real-time visualization.",
    features: [
      "Multiple algorithm comparison",
      "Real-time head movement tracking",
      "Performance metrics visualization",
      "Interactive GUI (Tkinter)",
    ],
    tech: ["Python", "Tkinter", "NumPy", "Matplotlib"],
    github: "https://github.com/abhirambirakati",
    live: "#",
  },

  {
    icon: Code,
    title: "Online Course Management System",
    description:
      "Full-stack web application similar to Udemy with course creation, authentication, and REST APIs.",
    features: [
      "User authentication system",
      "Course creation and enrollment",
      "Video lecture modules",
      "REST API backend integration",
    ],
    tech: ["Django", "Python", "PostgreSQL", "JavaScript"],
    github: "https://github.com/abhirambirakati/djangoFinalProject-PEP-",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        
        {/* HEADER */}
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
            Showcasing my work in Data Analysis, Python Development, and Full Stack Projects.
          </p>
        </motion.div>

        {/* PROJECT LIST */}
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

                {/* LEFT */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-4">
                    <project.icon size={22} className="text-foreground mt-1" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="badge-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 text-xs border px-3 py-1.5 rounded-full hover:text-foreground transition"
                    >
                      <Github size={14} /> GitHub
                    </a>

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="flex items-center gap-1 text-xs border px-3 py-1.5 rounded-full hover:text-foreground transition"
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                  </div>
                </div>

                {/* RIGHT FEATURES */}
                <div className="lg:w-64">
                  <h4 className="text-xs font-semibold mb-3 uppercase">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="text-xs text-muted-foreground flex gap-2">
                        <span className="w-1 h-1 mt-2 rounded-full bg-foreground" />
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