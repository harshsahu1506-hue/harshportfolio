import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="clay-card p-10 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <User size={120} />
          </div>
          
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Harsh Sahu is an IT professional with hands-on experience in networking, cloud computing, and hardware troubleshooting. Currently working as a Branch Engineer at STJ Electronics, he specializes in maintaining IT infrastructure, configuring network devices, and ensuring system reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              { icon: <MapPin className="text-accent" />, text: "Raipur, Chhattisgarh, India" },
              { icon: <Briefcase className="text-accent" />, text: "Branch Engineer @ STJ Electronics" },
              { icon: <GraduationCap className="text-accent" />, text: "MCA Candidate @ Amity University" },
              { icon: <User className="text-accent" />, text: "Networking & Cloud Enthusiast" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-white/60"
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
