import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Background } from './Background';
import { CustomCursor } from './CustomCursor';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />
      <Background />
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-primary/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
            Harsh Sahu
          </div>
          <div className="hidden md:flex gap-8 text-white/70">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="clay-button py-2 text-sm text-center">Resume</a>
        </div>
      </nav>
      <main className="pt-20">
        {children}
      </main>
      <footer className="py-12 px-6 text-center text-white/40 border-t border-white/5 bg-primary/50 backdrop-blur-xl">
        <p>© 2026 Harsh Sahu | IT Professional</p>
      </footer>
    </div>
  );
};
