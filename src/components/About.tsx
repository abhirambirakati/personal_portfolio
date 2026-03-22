import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            THE ARCHITECT<br />
            <span className="text-dim">OF DATA</span>
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a Computer Science and Engineering student at Lovely Professional University with strong interests in 
              Data Analysis, Python Development, and Data Visualization. I have experience building analytical tools 
              and dashboards using Python, Excel, and modern data analysis libraries.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My academic journey has helped me gain strong foundations in Data Structures and Algorithms, 
              Statistical Analysis, and Data-Driven Decision Making. I enjoy working on projects that transform 
              raw data into actionable insights and visual stories.
            </p>
          </motion.div>

          {/* RIGHT DASHBOARD UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card p-6 rounded-2xl shadow-xl border border-border w-full max-w-md"
          >

            <h3 className="text-sm text-muted-foreground mb-4">
              Analytics Overview
            </h3>

            <div className="space-y-4">

              {/* CARD 1 */}
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground">Projects Built</p>
                <h2 className="text-xl font-bold text-foreground">10+</h2>
              </div>

              {/* CARD 2 */}
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground">Core Skills</p>
                <h2 className="text-green-500 font-bold">
                  Python, Excel, ML 📊
                </h2>
              </div>

              {/* CARD 3 */}
              <div className="bg-background p-4 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground">Focus</p>
                <p className="text-sm text-foreground">
                  Transforming raw data into meaningful insights.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;