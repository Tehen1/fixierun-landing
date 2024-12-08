"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Bike, Coins, Users, Shield, Activity, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Bike className="w-6 h-6 text-indigo-500" />,
    title: "Move-to-Earn",
    description: "Earn $FIXIE tokens for your daily cycling activities. Transform your fitness routine into valuable rewards."
  },
  {
    icon: <Coins className="w-6 h-6 text-purple-500" />,
    title: "NFT Marketplace",
    description: "Trade and collect unique NFT bikes with special attributes. Build your digital cycling portfolio."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "Social Fitness",
    description: "Connect with the global cycling community. Participate in challenges and compete on leaderboards."
  },
  {
    icon: <Shield className="w-6 h-6 text-green-500" />,
    title: "Secure & Transparent",
    description: "Built on zkEVM blockchain for maximum security and transparency in all transactions."
  },
  {
    icon: <Activity className="w-6 h-6 text-red-500" />,
    title: "Advanced Tracking",
    description: "Integrate with popular fitness apps. Monitor your performance metrics in real-time."
  },
  {
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    title: "Global Challenges",
    description: "Join weekly challenges and virtual races. Earn bonus rewards and showcase your skills."
  }
]

const steps = [
  {
    number: "01",
    title: "Download & Connect",
    description: "Get started with our app and connect your preferred fitness tracking platform."
  },
  {
    number: "02",
    title: "Start Cycling",
    description: "Hit the road with your bike and let our app track your activities automatically."
  },
  {
    number: "03",
    title: "Earn Rewards",
    description: "Earn $FIXIE tokens for every kilometer cycled and complete challenges for bonuses."
  },
  {
    number: "04",
    title: "Collect NFTs",
    description: "Use your earnings to acquire unique NFT bikes and boost your earning potential."
  }
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-black" id="about">
      <div className="container mx-auto px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Revolutionizing Fitness</h2>
          <p className="text-xl text-center text-gray-400 mb-12">Combining Blockchain Technology with Your Daily Fitness Routine</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 mb-6">Get started with FixieRun in four simple steps</p>
          <div className="flex justify-center">
            <Button variant="default">Get Started</Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
