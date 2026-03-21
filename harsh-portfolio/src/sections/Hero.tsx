import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Network, Cloud, Shield, Server } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-5">
            Welcome to my space
          </span>

          <h1 className="text-6xl md:text-7xl xl:text-8xl font-extrabold leading-none mb-6">
            Harsh <br />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Sahu
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-white/70 font-medium mb-8 h-9 flex items-center">
            <Typewriter
              options={{
                strings: ['IT Professional', 'Networking Enthusiast', 'Cloud Expert', 'Hardware Specialist'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'text-accent',
                cursorClassName: 'text-accent',
              }}
            />
          </div>

          <p className="text-base md:text-lg text-white/50 max-w-md mb-12 leading-relaxed">
            Building reliable IT infrastructure and scalable cloud solutions at{' '}
            <span className="text-white/80"></span> — Raipur, Chhattisgarh.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="clay-button px-8 py-3.5 text-base"
            >
              View Skills
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all text-base"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-2xl bg-accent/10 border border-accent/20 text-accent font-bold hover:bg-accent/20 transition-all text-base"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Profile Picture + Floating Icons */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex items-center justify-center relative"
        >
          {/* Glowing ring behind */}
          <div className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full bg-accent/10 blur-3xl" />

          {/* Profile image */}
          <div className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full border-4 border-accent/30 overflow-hidden shadow-clay-lg animate-bounce-slow z-10">
            <img
              src="/profile.png"
              alt="Harsh Sahu"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating skill badges */}
          {[
            { icon: <Network size={20} />, label: 'Cisco', top: '5%', right: '0%' },
            { icon: <Cloud size={20} />, label: 'AWS', bottom: '10%', right: '0%' },
            { icon: <Shield size={20} />, label: 'Security', top: '5%', left: '0%' },
            { icon: <Server size={20} />, label: 'Hardware', bottom: '10%', left: '0%' },
          ].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              whileHover={{ scale: 1.15 }}
              style={{ top: badge.top, right: badge.right, bottom: badge.bottom, left: badge.left }}
              className="absolute flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-accent text-sm font-semibold shadow-clay-sm"
            >
              {badge.icon}
              <span>{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
