"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Section {
  id: string;
  title: string;
  content: string | React.ReactNode;
  icon?: string;
}

export default function WhitePaper() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections: Section[] = [
    {
      id: 'overview',
      title: 'Vue d\'ensemble',
      icon: '🚀',
      content: (
        <div className="space-y-4">
          <p>
            FixieRun est une application Web3 lifestyle combinant Social-Fi et Game-Fi. Les utilisateurs équipés de vélos NFT peuvent faire du vélo en extérieur pour gagner des FXM, utilisables pour améliorer et créer de nouveaux vélos NFT.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl mb-4">🎮</div>
              <h4 className="text-xl font-bold mb-2">Game-Fi</h4>
              <p className="text-gray-400">Gagnez des récompenses en pédalant et en participant à des événements</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl mb-4">🌐</div>
              <h4 className="text-xl font-bold mb-2">Social-Fi</h4>
              <p className="text-gray-400">Connectez-vous avec d'autres cyclistes et participez à des défis communautaires</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl mb-4">💰</div>
              <h4 className="text-xl font-bold mb-2">Move2Earn</h4>
              <p className="text-gray-400">Transformez votre activité physique en récompenses numériques</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tokenomics',
      title: 'Tokenomics',
      icon: '💎',
      content: (
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Distribution des Tokens</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-700 rounded-lg text-center">
                <div className="font-bold">5%</div>
                <div className="text-sm text-gray-400">Private</div>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg text-center">
                <div className="font-bold">36%</div>
                <div className="text-sm text-gray-400">Move2Earn</div>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg text-center">
                <div className="font-bold">21%</div>
                <div className="text-sm text-gray-400">Ecosystem</div>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg text-center">
                <div className="font-bold">15%</div>
                <div className="text-sm text-gray-400">Team</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">FXR Token</h4>
              <p className="text-gray-400">Supply Total: 5 Milliards</p>
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span>Minting Fee</span>
                  <span>10%</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Upgrade Fee</span>
                  <span>10%</span>
                </div>
                <div className="flex justify-between">
                  <span>NFT Sales</span>
                  <span>1%</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">FXM Token</h4>
              <p className="text-gray-400">Supply: Illimité</p>
              <p className="mt-4">Le FXM est le token utilitaire de l'écosystème FixieRun, gagné en pédalant et utilisable pour les améliorations.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'gameplay',
      title: 'Gameplay',
      icon: '🎮',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Types de Vélos NFT</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🚲</span>
                  <div>
                    <div className="font-bold">Fixie Racer</div>
                    <div className="text-sm text-gray-400">Parfait pour la vitesse</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🚲</span>
                  <div>
                    <div className="font-bold">Fixie Urban</div>
                    <div className="text-sm text-gray-400">Idéal pour la ville</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Modes de Jeu</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🏃</span>
                  <div>
                    <div className="font-bold">Solo Ride</div>
                    <div className="text-sm text-gray-400">Gagnez des FXM en pédalant</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">🏁</span>
                  <div>
                    <div className="font-bold">Courses</div>
                    <div className="text-sm text-gray-400">Compétitions PvE et PvP</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ecosystem',
      title: 'Écosystème',
      icon: '🌍',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Marketplace</h4>
              <p className="text-gray-400">Achetez, vendez et louez des vélos NFT</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Staking</h4>
              <p className="text-gray-400">Stakez vos FXR pour des récompenses passives</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Gouvernance</h4>
              <p className="text-gray-400">Participez aux décisions de l'écosystème</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="whitepaper">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Lite Paper
          </h2>
          <p className="text-xl text-gray-400">
            Découvrez l'écosystème FixieRun
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Navigation */}
          <div className="md:w-1/4">
            <div className="sticky top-24">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeSection === section.id
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800/50'
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-3/4">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/50 p-6 rounded-xl"
            >
              {sections.find(s => s.id === activeSection)?.content}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
