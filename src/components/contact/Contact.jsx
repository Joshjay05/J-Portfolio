import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "../../constants";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono dark:text-dark-accent-primary text-light-accent-primary text-sm mb-2">
            05. What&#39;s Next?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-dark-text-primary text-light-text-primary mb-6">
            Get In Touch
          </h2>
          <p className="dark:text-dark-text-secondary text-light-text-secondary max-w-2xl mx-auto text-lg">
            I&#39;m currently open to new opportunities and exciting projects.
            Whether you have a question, want to collaborate, or just say hi,
            feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact Info - Fully Responsive */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold dark:text-dark-text-primary text-light-text-primary mb-6">
              Contact Information
            </h3>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-4 group"
            >
              <div className="p-4 glass-card group-hover:scale-110 transition-transform">
                <Mail
                  size={24}
                  className="dark:text-dark-accent-primary text-light-accent-primary"
                />
              </div>
              <div>
                <p className="text-xs dark:text-dark-text-tertiary text-light-text-tertiary font-mono mb-1">
                  Email
                </p>
                <p className="dark:text-dark-text-secondary text-light-text-secondary group-hover:dark:text-dark-accent-primary group-hover:text-light-accent-primary transition-colors break-all">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-4 group"
            >
              <div className="p-4 glass-card group-hover:scale-110 transition-transform">
                <Phone
                  size={24}
                  className="dark:text-dark-accent-primary text-light-accent-primary"
                />
              </div>
              <div>
                <p className="text-xs dark:text-dark-text-tertiary text-light-text-tertiary font-mono mb-1">
                  Phone
                </p>
                <p className="dark:text-dark-text-secondary text-light-text-secondary group-hover:dark:text-dark-accent-primary group-hover:text-light-accent-primary transition-colors">
                  {PERSONAL_INFO.phone}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="p-4 glass-card">
                <MapPin
                  size={24}
                  className="dark:text-dark-accent-primary text-light-accent-primary"
                />
              </div>
              <div>
                <p className="text-xs dark:text-dark-text-tertiary text-light-text-tertiary font-mono mb-1">
                  Location
                </p>
                <p className="dark:text-dark-text-secondary text-light-text-secondary">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-sm dark:text-dark-text-tertiary text-light-text-tertiary font-mono mb-4">
                Connect with me
              </p>
              <div className="flex gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card hover:scale-110 transition-all dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary"
                >
                  <Github size={24} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card hover:scale-110 transition-all dark:text-dark-text-secondary text-light-text-secondary hover:dark:text-dark-accent-primary hover:text-light-accent-primary"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Fully Responsive */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8"
          >
            {/* Success Message */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg dark:bg-green-500/20 bg-green-500/20 border dark:border-green-500/50 border-green-500/50 flex items-center gap-3"
              >
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-green-500 text-sm">
                  Message sent successfully!
                </span>
              </motion.div>
            )}

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mono dark:text-dark-text-primary text-light-text-primary mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-mono dark:text-dark-text-primary text-light-text-primary mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-mono dark:text-dark-text-primary text-light-text-primary mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="textarea-field w-full"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
