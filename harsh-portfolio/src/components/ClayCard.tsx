import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ClayCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ClayCard: React.FC<ClayCardProps> = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "clay-card p-6 flex flex-col items-center text-center",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
