import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, ExternalLink } from "lucide-react";

const training = [
  {
    title: "Android Developer Pro",
    institution: "Lovely Professional University",
    grade: "O (Outstanding)",
    duration: "June 10, 2025 – July 15, 2025",
    description:
      "Hands-On Projects & Play Store Launch. Focused on building robust Android applications with modern architecture and best practices.",
    skills: [
      "Mobile app architecture",
      "API integration",
      "UI development (XML)",
      "Room DB",
      "Performance optimization",
    ],
    tech: ["Kotlin", "XML", "Android Studio", "Jetpack", "Retrofit", "Git"],
    credentialLink: "https://github.com/abhirambirakati/summerTrainingProject",
  },
];

const Training = () => {
  return (
    <section id="training" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title mb-3">Specialized Training</h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {training.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-dark hover-card p-6 md:p-8"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap size={22} className="text-foreground mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground ml-[34px] mb-3">{item.institution}</p>

                  <div className="flex flex-wrap items-center gap-4 ml-[34px] mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-foreground bg-accent/20 border border-accent/30 rounded-full px-3 py-1">
                      <Award size={12} />
                      Grade: {item.grade}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed ml-[34px] mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 ml-[34px] mb-4">
                    {item.tech.map((t) => (
                      <span key={t} className="badge-tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-64 flex-shrink-0">
                  <h4 className="text-xs font-semibold text-foreground mb-3 tracking-wide uppercase">Skills Gained</h4>
                  <ul className="space-y-2">
                    {item.skills.map((s) => (
                      <li key={s} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                        {s}
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

export default Training;
