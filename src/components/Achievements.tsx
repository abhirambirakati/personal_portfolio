import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
  { title: "3rd Place", description: "RC Extreme 2.0 Competition" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Recognition</p>
          <h2 className="section-title">PROUD MOMENTS</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="card-dark hover-card p-6 text-center"
            >
              <div className="inline-flex p-3 rounded-full bg-secondary mb-4">
                <Trophy size={24} className="text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
