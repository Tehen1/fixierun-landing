'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef, useEffect, useRef } from 'react';
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        outline: "border-2 border-primary text-primary hover:bg-primary/10",
        gradient: "bg-gradient-to-r from-[#FF3366] to-[#FF6B3D] text-white hover:brightness-110",
        secondary: "bg-secondary text-white hover:bg-secondary/90",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-8 px-4 py-1.5 text-xs",
        lg: "h-12 px-8 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface SparkleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  glowColor?: string;
}

const SparkleButton = forwardRef<HTMLButtonElement, SparkleButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    glowColor = 'rgba(255, 51, 102, 0.5)',
    children,
    ...props 
  }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const sparkleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const button = buttonRef.current;
      const sparkle = sparkleRef.current;
      if (!button || !sparkle) return;

      const updateSparklePosition = () => {
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        sparkle.style.width = size * 1.5 + 'px';
        sparkle.style.height = size * 1.5 + 'px';
      };

      updateSparklePosition();
      window.addEventListener('resize', updateSparklePosition);

      return () => window.removeEventListener('resize', updateSparklePosition);
    }, []);

    return (
      <motion.div
        className="relative group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={buttonRef}
          {...props}
        >
          {children}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 transform-gpu transition-all duration-500 opacity-0 group-hover:opacity-70 blur-xl group-hover:blur-2xl bg-glow" />
          </div>
        </button>

        {/* Sparkle Effect */}
        <div
          ref={sparkleRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 100%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.8) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <style jsx>{`
          .bg-glow {
            background: radial-gradient(
              circle at center,
              ${glowColor} 0%,
              transparent 70%
            );
            transform: scale(0.9);
          }
          .group:hover .bg-glow {
            transform: scale(1.1);
          }
        `}</style>
      </motion.div>
    );
  }
);

SparkleButton.displayName = "SparkleButton";

export { SparkleButton, type SparkleButtonProps };
