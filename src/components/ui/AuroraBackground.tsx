import { motion } from 'framer-motion';

interface AuroraBackgroundProps {
  intensity?: 'subtle' | 'medium' | 'strong';
}

export default function AuroraBackground({ intensity = 'subtle' }: AuroraBackgroundProps) {
  const opacities = {
    subtle: 0.06,
    medium: 0.05,
    strong: 0.07,
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/2 left-[30%] w-[50%] h-[50%] rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle, rgba(13,148,136,${opacities[intensity]}) 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {intensity === 'strong' && (
        <motion.div
          className="absolute top-1/3 right-[30%] w-[40%] h-[40%] rounded-full blur-[100px]"
          style={{
            background: `radial-gradient(circle, rgba(45,212,191,0.04) 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </div>
  );
}
