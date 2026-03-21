import React from 'react';
import { motion } from 'framer-motion';
import { Network, Cloud, Cpu, Settings, Brain } from 'lucide-react';
import { ClayCard } from '../components/ClayCard';

const skillsData = [
  {
    category: "Networking",
    icon: <Network className="text-accent" />,
    skills: ["Cisco Routers", "Cisco Networking", "LAN/WAN Setup"]
  },
  {
    category: "Cloud",
    icon: <Cloud className="text-accent" />,
    skills: ["AWS", "Cloud Computing"]
  },
  {
    category: "Hardware",
    icon: <Cpu className="text-accent" />,
    skills: ["Computer Hardware", "Hardware Troubleshooting"]
  },
  {
    category: "Tools",
    icon: <Settings className="text-accent" />,
    skills: ["Microsoft Outlook", "System Maintenance"]
  },
  {
    category: "AI Tools",
    icon: <Brain className="text-accent" />,
    skills: ["Google Gemini", "Claude.ai", "Antigravity", "Firebase"]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group, idx) => (
            <ClayCard key={idx} delay={idx * 0.1} className="group hover:bg-accent/5">
              <div className="mb-6 p-4 rounded-2xl bg-white/5 group-hover:bg-accent/20 transition-colors">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-white">{group.category}</h3>
              <ul className="space-y-3 text-left w-full">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-white/60 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </ClayCard>
          ))}
        </div>
      </div>
    </section>
  );
};
