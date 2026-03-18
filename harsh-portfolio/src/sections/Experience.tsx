import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { ClayCard } from '../components/ClayCard';

const experience = [
  {
    title: "Branch Engineer",
    company: "STJ Electronics Private Limited",
    period: "Sep 2024 – Present",
    location: "Raipur, India",
    points: [
      "Managing IT infrastructure and networking systems",
      "Handling hardware troubleshooting and system maintenance",
      "Supporting cloud-based operations using AWS"
    ]
  }
];

const education = [
  {
    degree: "MCA",
    school: "Amity University Raipur",
    period: "2025 – 2027",
    icon: <GraduationCap />
  },
  {
    degree: "Bachelor’s",
    school: "Kalinga University",
    period: "2021 – 2024",
    icon: <GraduationCap />
  }
];

const certifications = [
  {
    title: "Diploma in Cloud Computing",
    issuer: "Online Training",
    icon: <Award className="text-accent" />,
    image: "/certificate.jpeg"
  },
  {
    title: "Google DevFest Participation",
    issuer: "GDG Raipur",
    icon: <Award className="text-accent" />
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Experience */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold mb-12 flex items-center gap-4"
            >
              <Briefcase className="text-accent" /> Professional Experience
            </motion.h2>

            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <ClayCard key={idx} className="!text-left !items-start p-8">
                  <span className="text-accent text-sm font-mono mb-2">{exp.period}</span>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-white/60 mb-6">{exp.company} • {exp.location}</p>
                  <ul className="space-y-3">
                    {exp.points.map((p, pIdx) => (
                      <li key={pIdx} className="text-white/70 flex gap-3 text-sm">
                        <span className="text-accent mt-1">▹</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </ClayCard>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-16">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold mb-12 flex items-center gap-4"
              >
                <GraduationCap className="text-accent" /> Education
              </motion.h2>
              <div className="grid grid-cols-1 gap-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 items-center">
                    <div className="p-4 rounded-xl bg-accent/10 text-accent">
                      <GraduationCap />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{edu.degree}</h3>
                      <p className="text-white/60">{edu.school}</p>
                      <p className="text-xs text-accent/60 mt-1 uppercase tracking-wider">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold mb-12 flex items-center gap-4"
              >
                <Award className="text-accent" /> Certifications
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certifications.map((cert, idx) => (
                  <ClayCard key={idx} className="!p-6 group cursor-pointer hover:border-accent/40 overflow-hidden relative">
                    <div className="relative z-10">
                      <div className="mb-4 text-accent transition-transform group-hover:scale-110">
                        {cert.icon}
                      </div>
                      <h3 className="font-bold text-sm mb-1">{cert.title}</h3>
                      <p className="text-xs text-white/40">{cert.issuer}</p>
                    </div>
                    {cert.image && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center">
                          <span className="text-accent text-xs font-bold uppercase tracking-widest">Click to View</span>
                        </div>
                      </div>
                    )}
                    {cert.image && (
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-20"
                      />
                    )}
                  </ClayCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
