"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Ecosystem() {
  const features = [
    {
      title: 'Marketplace',
      description: 'Achetez, vendez et louez des vélos NFT',
      icon: '🛒',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Staking',
      description: 'Stakez vos FXR pour des récompenses passives',
      icon: '💰',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Gouvernance',
      description: 'Participez aux décisions de l\'écosystème',
      icon: '🏛️',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Communauté',
      description: 'Rejoignez une communauté active de cyclistes',
      icon: '🤝',
      gradient: 'from-cyan-500 to-emerald-500',
    },
    {
      title: 'Récompenses',
      description: 'Gagnez des tokens en pédalant',
      icon: '🎁',
      gradient: 'from-emerald-500 to-yellow-500',
    },
    {
      title: 'Événements',
      description: 'Participez à des compétitions et défis',
      icon: '🎯',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="ecosystem">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Écosystème FixieRun
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un écosystème complet pour les passionnés de vélo et de Web3
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 text-2xl`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#marketplace"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#ff0066] to-[#00ccff] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Explorer le Marketplace
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
