"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CombinedAuthButton } from '@/ui/CombinedAuthButton';
import { GlowButton } from '@/ui/GlowButton';
import { NFTCard } from '@/ui/NFTCard';
import { VideoPlayer } from '@/ui/VideoPlayer';
import { LineChart } from '@/ui/LineChart';
import { Map } from '@/ui/Map';
import { StatsSection } from '@/sections/StatsSection';
import { HowToPlay } from '@/sections/HowToPlay';
import { AppModules } from '@/sections/AppModules';
import { Technology } from '@/sections/Technology';
import { Ecosystem } from '@/sections/Ecosystem';
import { CommunityStats } from '@/sections/CommunityStats';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const mockStats = {
  totalDistance: "10,500 km",
  energyBurned: "520,000 kcal",
  caloriesBurned: "480,000 cal",
  communityMembers: "2,500"
};

const mockChartData = [
  { date: '2024-01', distance: 150, tokens: 300 },
  { date: '2024-02', distance: 280, tokens: 560 },
  { date: '2024-03', distance: 420, tokens: 840 },
  { date: '2024-04', distance: 650, tokens: 1300 },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <VideoPlayer />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF3366] to-[#00ccff]"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            FixieRun
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Pédalez, Gagnez, Évoluez - Le Futur du Cyclisme Web3
          </motion.p>
          
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <GlowButton 
              variant="gradient" 
              size="lg"
              className="min-w-[200px]"
            >
              Commencer l'Aventure
            </GlowButton>
            <CombinedAuthButton className="min-w-[200px]" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={mockStats} />

      {/* NFT Showcase */}
      <section className="py-20 container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 gradient-text"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Collection NFT
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NFTCard
            name="Fixie Legendary"
            image="/nft/legendary.png"
            description="Vélo NFT de rareté légendaire avec bonus de vitesse"
          />
          <NFTCard
            name="Fixie Epic"
            image="/nft/epic.png"
            description="Vélo NFT de rareté épique avec bonus d'endurance"
          />
          <NFTCard
            name="Fixie Rare"
            image="/nft/rare.png"
            description="Vélo NFT de rareté rare avec bonus de tokens"
          />
        </div>
      </section>

      {/* Activity Tracking */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="h-[400px]">
              <Map isTracking={false} />
            </div>
            <div className="h-[400px]">
              <LineChart data={mockChartData} />
            </div>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <HowToPlay />

      {/* Technology Stack */}
      <Technology />

      {/* App Modules */}
      <AppModules />

      {/* Ecosystem */}
      <Ecosystem />

      {/* Community Stats */}
      <CommunityStats />

      {/* Footer CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8 gradient-text"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Prêt à Rejoindre la Révolution ?
          </motion.h2>
          
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GlowButton 
              variant="gradient" 
              size="lg"
              className="min-w-[250px]"
            >
              Lancer l'Application
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
