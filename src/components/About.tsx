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
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label tracking-wider">About Me</p>

          <h2 className="section-title mt-3 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              TURNING DATA INTO INSIGHTS
            </span>
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I am a Computer Science and Engineering student at Lovely Professional University, 
              specializing in <span className="text-foreground font-medium">Data Analysis</span> and{" "}
              <span className="text-foreground font-medium">Python Development</span>. 
              I am passionate about working with data, uncovering patterns, and building solutions 
              that support smarter decision-making.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in tools like <span className="text-foreground font-medium">Python, Excel, and Data Visualization</span>, 
              I focus on transforming complex datasets into clear and meaningful insights. 
              I continuously explore new technologies and techniques to improve my analytical 
              and problem-solving skills.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My goal is to create impactful, data-driven solutions that bridge the gap between 
              raw data and real-world applications.
            </p>
          </motion.div>

          {/* RIGHT DASHBOARD UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-6 rounded-2xl shadow-2xl border border-border w-full max-w-md"
          >
            <h3 className="text-sm text-muted-foreground mb-5 tracking-wide">
              Analytics Overview
            </h3>

            <div className="space-y-4">

              {/* CARD 1 */}
              <div className="bg-background p-4 rounded-xl border border-border hover:scale-[1.02] transition">
                <p className="text-xs text-muted-foreground">Projects Built</p>
                <h2 className="text-xl font-bold text-foreground mt-1">4+</h2>
              </div>

              {/* CARD 2 */}
              <div className="bg-background p-4 rounded-xl border border-border hover:scale-[1.02] transition">
                <p className="text-xs text-muted-foreground">Core Skills</p>
                <h2 className="text-green-500 font-semibold mt-1">
                  Python • Excel • ML 📊
                </h2>
              </div>

              {/* CARD 3 */}
              <div className="bg-background p-4 rounded-xl border border-border hover:scale-[1.02] transition">
                <p className="text-xs text-muted-foreground">Focus</p>
                <p className="text-sm text-foreground mt-1">
                  Transforming raw data into meaningful insights 🚀
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