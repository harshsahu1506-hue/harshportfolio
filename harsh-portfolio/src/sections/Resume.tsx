import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="clay-card p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <FileText size={120} />
          </div>

          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Download my resume to learn more about my experience and qualifications.
          </p>

          <motion.a
            href="/resume.pdf"
            download="Harsh_Kumar_Resume.pdf"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 clay-button px-8 py-4 text-lg"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};