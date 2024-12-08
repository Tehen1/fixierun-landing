'use client';

import { useRef, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

interface VideoLogoProps {
  className?: string;
}

export const VideoLogo = memo(function VideoLogo({ className }: VideoLogoProps) {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideos = async () => {
      try {
        if (videoRef1.current) {
          await videoRef1.current.play();
        }
        if (videoRef2.current) {
          await videoRef2.current.play();
        }
      } catch (error) {
        console.log("Autoplay prevented:", error);
      }
    };
    playVideos();
  }, []);

  return (
    <motion.div
      className={`flex items-center space-x-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-16 h-16">
        <video
          ref={videoRef1}
          className="w-full h-full object-contain"
          playsInline
          muted
          loop
          autoPlay
          style={{ mixBlendMode: 'screen' }}
        >
          <source src="/videos/FixieRun.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative w-16 h-16">
        <video
          ref={videoRef2}
          className="w-full h-full object-contain"
          playsInline
          muted
          loop
          autoPlay
          style={{ mixBlendMode: 'screen' }}
        >
          <source src="/videos/Fixie.run.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.div>
  );
});
