import { motion } from "framer-motion";

// MAKE SURE THESE FILE NAMES EXACTLY MATCH YOUR assets FOLDER
import cert1 from "@/assets/courseradigital.png";
import cert2 from "@/assets/courserasoftware.png";
import cert3 from "@/assets/forage.png";
import cert4 from "@/assets/udemyenglish.png";

const certifications = [
  {
    title: "Digital Systems: Logic Gates to Processors",
    issuer: "Coursera",
    date: "Dec 2024",
    image: cert1,
  },
  {
    title: "Software Engineering: Implementation & Testing",
    issuer: "Coursera",
    date: "May 2024",
    image: cert2,
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "Nov 2025",
    image: cert3,
  },
  {
    title: "English Grammar Pro (A1–C1)",
    issuer: "Udemy",
    date: "Nov 2023",
    image: cert4,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="section-container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-title">CERTIFICATIONS</h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl">
            Professional certifications showcasing my skills and learning journey.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-dark p-4 rounded-xl overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-lg mb-3">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {cert.title}
              </h3>

              <p className="text-xs text-muted-foreground">
                {cert.issuer}
              </p>

              <p className="text-xs text-muted-foreground mt-1">
                {cert.date}
              </p>

              {/* BADGE */}
              <span className="inline-block mt-3 text-[10px] px-2 py-1 rounded-full bg-secondary text-foreground">
                Verified
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;