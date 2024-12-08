'use client';

import { useRef, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from "@/hooks/useTranslations";
import { GradientTitle } from '../ui/GradientTitle';
import { CombinedAuthButton } from '../ui/CombinedAuthButton';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleVideoRef = useCallback(
    (node: HTMLVideoElement | null) => {
      videoRef.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    if (videoRef.current && inView) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [inView]);

  return (
    <motion.div
      variants={videoVariants}
      className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
    >
      <video
        ref={handleVideoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
        poster="/images/video-poster.jpg"
      >
        <source src="/videos/fixierun1.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
}

export default function HeroSection() {
  const { t } = useTranslations();
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, 
    [0, 400, 800],
    [1, 1, 0]
  );
  
  const scale = useTransform(scrollY,
    [0, 400, 800],
    [1, 0.95, 0.9]
  );
  
  const y = useTransform(scrollY,
    [0, 400, 800],
    [0, 20, 40]
  );

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-12 lg:py-24">
      <motion.div 
        className="container mx-auto px-4 relative z-10 mt-16 lg:mt-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col gap-8 items-center">
          <div className="text-center max-w-4xl mx-auto">
            <GradientTitle 
              as="h1"
              className="text-4xl md:text-5xl lg:text-7xl mb-8"
            >
              {String(t('hero.title'))}
            </GradientTitle>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-6"
              variants={itemVariants}
            >
              {String(t('hero.description'))}
            </motion.p>
            
            <motion.p
              className="text-sm md:text-base text-foreground/60 mb-10"
              variants={itemVariants}
            >
              {String(t('hero.powered'))}
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <CombinedAuthButton />
            </motion.div>
          </div>

          <motion.div
            style={{ opacity, scale, y }}
            className="w-full max-w-5xl mx-auto"
          >
            <VideoPlayer />
          </motion.div>
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08)_0%,transparent_60%)]" />
      </div>
    </section>
  );
}
