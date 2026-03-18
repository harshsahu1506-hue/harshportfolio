import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Instagram, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2ff', '#0a192f', '#ffffff']
    });
    alert("Message sent! (Simulation)");
  };
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Let's connect</h3>
            <p className="text-white/60 mb-12 text-lg">
              Open for collaborations in Cloud Computing, Networking optimization, or IT infrastructure projects.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail />, label: "Email", value: "harshsahu1506@gmail.com", link: "mailto:harshsahu1506@gmail.com" },
                { icon: <MapPin />, label: "Location", value: "Raipur, Chhattisgarh, India", link: "#" },
                { icon: <Linkedin />, label: "LinkedIn", value: "Harsh Sahu", link: "https://www.linkedin.com/in/harsh-sahu11/" },
                { icon: <Github />, label: "GitHub", value: "harshsahu1506-hue", link: "https://github.com/harshsahu1506-hue" },
                { icon: <Instagram />, label: "Instagram", value: "_.harsh.sahu_", link: "https://www.instagram.com/_.harsh.sahu_/" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 clay-card bg-white/5 backdrop-blur-xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Name</label>
                <input type="text" className="clay-input" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Email</label>
                <input type="email" className="clay-input" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Message</label>
                <textarea rows={4} className="clay-input resize-none" placeholder="What's on your mind?"></textarea>
              </div>
              <button className="clay-button w-full flex items-center justify-center gap-2">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
