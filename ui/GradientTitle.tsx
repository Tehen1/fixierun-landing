import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  delay?: number;
}

export function GradientTitle({ 
  children, 
  className, 
  as: Component = 'h2',
  delay = 0 
}: GradientTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <Component
        className={cn(
          "gradient-title text-center font-bold",
          className
        )}
      >
        {children}
      </Component>

      <style jsx global>{`
        .gradient-title {
          background: linear-gradient(
            90deg, 
            #FF3366 0%,
            #FF6B3D 25%,
            #946BDE 50%,
            #6BB5DE 75%,
            #FF3366 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: shine 8s linear infinite;
        }

        @keyframes shine {
          from {
            background-position: 0% center;
          }
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </motion.div>
  );
}
