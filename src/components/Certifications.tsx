import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  { title: "Solutions Architecture Job Simulation", issuer: "Forge", date: "Nov 2025" },
  { title: "English Grammar Pro (A1–C1)", issuer: "Udemy", date: "Nov 2023" },
  { title: "Software Engineering: Implementation & Testing", issuer: "Coursera", date: "May 2024" },
  { title: "Digital Systems: Logic Gates to Processors", issuer: "Coursera", date: "Dec 2024" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-title">CREDENTIALS & BADGES</h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl">
            Professional certifications and specialized courses I've completed.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="card-dark hover-card p-5 flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-secondary flex-shrink-0">
                <Award size={18} className="text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground mb-1 leading-snug">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
              </div>
              <span className="badge-tag text-[10px] flex-shrink-0">Verified</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
