import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-8 flex justify-center lg:justify-start">
              <Image 
                src="/bikes/nft/logos/white-FixieRun.webp"
                alt="FixieRun Logo"
                width={120}
                height={120}
                className="hover:scale-105 transition-transform duration-200"
              />
            </div>

            {/* Video Preview */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0 mb-8 rounded-xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              >
                <source src="http://localhost:3001/videos/fixierun-preview.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              Ride. Race. Earn.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join the revolution of fitness gaming with NFT bikes, real-time races, and blockchain rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                Start Racing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
              >
                Explore NFTs
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">10K+</p>
                <p className="text-gray-400">Active Riders</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">50K+</p>
                <p className="text-gray-400">NFT Bikes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">100K+</p>
                <p className="text-gray-400">Races Complete</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/bikes/nft/showcase/hero-bike.webp"
                alt="FixieRun NFT Bike"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 right-4 p-4 bg-black/50 backdrop-blur-lg rounded-xl border border-purple-500/20">
              <p className="text-sm text-gray-400">Latest Drop</p>
              <p className="text-lg font-bold text-purple-400">Legendary Racer</p>
            </div>
            <div className="absolute -bottom-4 left-4 p-4 bg-black/50 backdrop-blur-lg rounded-xl border border-purple-500/20">
              <p className="text-sm text-gray-400">Floor Price</p>
              <p className="text-lg font-bold text-purple-400">0.5 ETH</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
