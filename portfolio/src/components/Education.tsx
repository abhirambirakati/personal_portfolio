import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech – Computer Science and Engineering",
    result: "CGPA: 6.0",
    period: "Aug 2023 – Present",
    location: "Punjab, India",
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate",
    result: "Percentage: 95%",
    period: "Jun 2021 – May 2023",
    location: "Madhurawada, Visakhapatnam",
  },
  {
    institution: "Sri Chaitanya Techno School",
    degree: "Matriculation",
    result: "Percentage: 100%",
    period: "Jun 2019 – Apr 2020",
    location: "Palasa, Srikakulam",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Background</p>
          <h2 className="section-title">ACADEMIC JOURNEY</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-foreground border-4 border-background z-10" />

                <div className="card-dark hover-card p-6">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={18} className="text-foreground" />
                      <h3 className="font-semibold text-foreground">{edu.institution}</h3>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{edu.degree}</p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="badge-tag">{edu.result}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin size={12} /> {edu.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
