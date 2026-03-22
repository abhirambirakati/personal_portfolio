import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:abhirambirakati18@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Reach Out</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl">
            Feel free to connect with me for collaboration, project discussions, or opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:abhirambirakati18@gmail.com" className="card-dark hover-card p-4 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-secondary">
                  <Mail size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground">abhirambirakati18@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919063375279" className="card-dark hover-card p-4 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-secondary">
                  <Phone size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm text-foreground">+91-9063375279</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card-dark p-6 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-muted-foreground focus:outline-none transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-muted-foreground focus:outline-none transition-colors"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-muted-foreground focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground border border-border focus:border-muted-foreground focus:outline-none transition-colors resize-none"
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-foreground text-background font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={16} /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
