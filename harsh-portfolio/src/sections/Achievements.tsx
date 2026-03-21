import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';
import { ClayCard } from '../components/ClayCard';

const achievementsData = [
  {
    title: "Smart India Hackathon",
    description: "Participated in the prestigious Smart India Hackathon, showcasing innovative problem-solving skills in technology and development.",
    icon: <Trophy className="text-accent" />,
    date: "2024"
  },
  {
    title: "College Leadership - Cyber Security Program",
    description: "Organized and led the Cyber Security program at college, demonstrating leadership skills and commitment to cybersecurity education.",
    icon: <Award className="text-accent" />,
    date: "2023"
  }
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, idx) => (
            <ClayCard key={idx} delay={idx * 0.1} className="group hover:bg-accent/5">
              <div className="mb-6 p-4 rounded-2xl bg-white/5 group-hover:bg-accent/20 transition-colors">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{achievement.title}</h3>
              <p className="text-white/80 mb-4">{achievement.description}</p>
              <span className="text-accent font-semibold">{achievement.date}</span>
            </ClayCard>
          ))}
        </div>
      </div>
    </section>
  );
};