import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
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

        <div className="grid lg:grid-cols-2 gap-10">
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-dark p-5 overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <pre className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed overflow-x-auto">
              <code>{codeSnippet}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
