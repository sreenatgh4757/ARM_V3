import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({ children, className = '', hover = false, glow = false }: GlassCardProps) {
  const baseStyles = 'bg-[rgba(250,250,249,0.03)] border border-[rgba(250,250,249,0.06)] backdrop-blur-[20px] rounded-[20px]';
  const glowStyles = glow ? 'shadow-[0_0_120px_rgba(45,212,191,0.05)] border-[rgba(45,212,191,0.12)]' : '';

  if (hover) {
    return (
      <motion.div
        className={`${baseStyles} ${glowStyles} ${className} transition-all duration-300`}
        whileHover={{
          y: -4,
          borderColor: 'rgba(45, 212, 191, 0.15)',
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyles} ${glowStyles} ${className}`}>
      {children}
    </div>
  );
}
