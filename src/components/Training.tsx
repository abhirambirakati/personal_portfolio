import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, ExternalLink } from "lucide-react";

// ✅ IMPORT YOUR CERTIFICATE IMAGE
import trainingCert from "@/assets/training.png";

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
    certificate: trainingCert, // ✅ using training.png
  },
];

const Training = () => {
  return (
    <section id="training" className="py-24">
      <div className="section-container">

        {/* HEADER */}
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

                {/* LEFT */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap size={22} className="text-foreground mt-1" />
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground ml-[34px] mb-3">
                    {item.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 ml-[34px] mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs bg-accent/20 border border-accent/30 rounded-full px-3 py-1">
                      <Award size={12} />
                      Grade: {item.grade}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground ml-[34px] mb-4">
                    {item.description}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 ml-[34px] mb-4">
                    {item.tech.map((t) => (
                      <span key={t} className="badge-tag">{t}</span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="ml-[34px] flex gap-3 mt-4">

                    {/* PROJECT */}
                    <a
                      href={item.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-4 py-2 rounded-full border border-border hover:bg-foreground hover:text-background transition flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      View Project
                    </a>

                    {/* CERTIFICATE */}
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition"
                    >
                      📄 View Certificate
                    </a>

                  </div>
                </div>

                {/* RIGHT */}
                <div className="lg:w-64">
                  <h4 className="text-xs font-semibold mb-3 uppercase">
                    Skills Gained
                  </h4>

                  <ul className="space-y-2">
                    {item.skills.map((s) => (
                      <li key={s} className="text-xs text-muted-foreground flex gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-foreground" />
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