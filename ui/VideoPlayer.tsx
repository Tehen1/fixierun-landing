'use client';

import { useRef, useCallback, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const VideoPlayer = memo(function VideoPlayer() {
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
});

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
