import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  level: string;
  percent: number;
}

const skillCategories: { title: string; skills: SkillItem[] }[] = [
  {
    title: "Programming & Scripting",
    skills: [
      { name: "Python", level: "Advanced", percent: 90 },
      { name: "C", level: "Intermediate", percent: 60 },
      { name: "C++", level: "Intermediate", percent: 65 },
      { name: "Java", level: "Intermediate", percent: 60 },
      { name: "JavaScript", level: "Intermediate", percent: 65 },
    ],
  },
  {
    title: "Data Analysis & Machine Learning",
    skills: [
      { name: "NumPy", level: "Advanced", percent: 85 },
      { name: "Pandas", level: "Advanced", percent: 90 },
      { name: "Matplotlib", level: "Advanced", percent: 85 },
      { name: "Seaborn", level: "Advanced", percent: 85 },
      { name: "Scikit-Learn", level: "Intermediate", percent: 65 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML & CSS", level: "Advanced", percent: 85 },
      { name: "JavaScript", level: "Intermediate", percent: 65 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: "Advanced", percent: 85 },
      { name: "Microsoft Excel", level: "Advanced", percent: 90 },
      { name: "Power BI", level: "Intermediate", percent: 70 },
      { name: "MySQL", level: "Advanced", percent: 80 },
      { name: "SQL", level: "Intermediate", percent: 70 },
    ],
  },
  {
    title: "Core Strengths",
    skills: [
      { name: "Problem Solving", level: "Advanced", percent: 90 },
      { name: "Analytical Thinking", level: "Advanced", percent: 90 },
      { name: "Adaptability", level: "Advanced", percent: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p className="section-label">Capabilities</p>
          <h2 className="section-title mb-3">TECH STACK</h2>
          <p className="text-muted-foreground max-w-xl text-sm">
            A focused set of tools and technologies I use to build data-driven solutions and solve real-world problems.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.08 }}
              className="card-dark hover-card p-6"
            >
              <p className="section-label mb-1">Expertise</p>
              <h3 className="text-base font-semibold text-foreground mb-5">
                {cat.title}
              </h3>

              <div className="flex flex-col gap-4">
                {cat.skills.map((skill) => {
                  const isAdvanced = skill.level === "Advanced";
                  const isIntermediate = skill.level === "Intermediate";

                  return (
                    <div key={skill.name}>
                      {/* NAME + LEVEL */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground">
                          {skill.name}
                        </span>

                        <span
                          className={`text-xs font-semibold ${
                            isAdvanced
                              ? "bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                              : isIntermediate
                              ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                              : "text-muted-foreground"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {/* PROGRESS BAR */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className={`h-full rounded-full ${
                            isAdvanced
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_12px_rgba(168,85,247,0.6)]"
                              : isIntermediate
                              ? "bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                              : "bg-white"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;