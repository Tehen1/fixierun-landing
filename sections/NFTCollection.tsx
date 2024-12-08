"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IconGauge, IconRocket, IconSteeringWheel } from '@tabler/icons-react';

const bikes = [
  {
    title: "Fixie Racer",
    description: "Un vélo de course léger et rapide",
    image: "/bikes/nft/collections/premium/pro-racer-black-gold.webp",
    rarity: "Legendary",
    attributes: {
      speed: 90,
      acceleration: 85,
      handling: 80
    }
  },
  {
    title: "Fixie Urban",
    description: "Parfait pour la ville",
    image: "/bikes/nft/categories/urban/fixie-urban-chrome.webp",
    rarity: "Rare",
    attributes: {
      speed: 75,
      acceleration: 80,
      handling: 90
    }
  },
  {
    title: "Chrome Flash Elite",
    description: "L'excellence italienne",
    image: "/bikes/nft/collections/premium/chrome-flash-elite.webp",
    rarity: "Epic",
    attributes: {
      speed: 85,
      acceleration: 85,
      handling: 85
    }
  },
  {
    title: "Carbon Shadow",
    description: "Le roi de la ville",
    image: "/bikes/nft/collections/premium/carbon-shadow-elite.webp",
    rarity: "Legendary",
    attributes: {
      speed: 95,
      acceleration: 90,
      handling: 95
    }
  }
];

const collections = [
  '/bikes/nft/showcase/fixie-showcase-1.webp',
  '/bikes/nft/showcase/fixie-showcase-2.webp',
  '/bikes/nft/showcase/fixie-showcase-3.webp',
  '/bikes/nft/showcase/fixie-showcase-5.webp'
];

const rarityColors: Record<string, string> = {
  Common: 'text-gray-400',
  Rare: 'text-blue-400',
  Epic: 'text-purple-400',
  Legendary: 'text-yellow-400'
};

export default function NFTCollection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900" id="nft-collection">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NFT Bikes Collection
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez notre collection exclusive de vélos numériques. Chaque NFT est unique et offre des attributs et avantages spéciaux.
          </p>
        </motion.div>

        {/* Featured Bikes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bikes.map((bike, index) => (
            <motion.div
              key={bike.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <div className="relative aspect-square">
                <Image
                  src={bike.image}
                  alt={bike.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{bike.title}</h3>
                    <p className="text-sm text-gray-400">{bike.description}</p>
                  </div>
                  <span className={`text-sm font-semibold ${rarityColors[bike.rarity]}`}>
                    {bike.rarity}
                  </span>
                </div>
                
                {bike.attributes && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <IconGauge className="w-4 h-4 text-blue-400" />
                      <div className="flex-1 bg-gray-800 h-2 rounded-full">
                        <div 
                          className="bg-blue-400 h-full rounded-full"
                          style={{ width: `${bike.attributes.speed}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-400">{bike.attributes.speed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconRocket className="w-4 h-4 text-green-400" />
                      <div className="flex-1 bg-gray-800 h-2 rounded-full">
                        <div 
                          className="bg-green-400 h-full rounded-full"
                          style={{ width: `${bike.attributes.acceleration}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-400">{bike.attributes.acceleration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconSteeringWheel className="w-4 h-4 text-purple-400" />
                      <div className="flex-1 bg-gray-800 h-2 rounded-full">
                        <div 
                          className="bg-purple-400 h-full rounded-full"
                          style={{ width: `${bike.attributes.handling}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-400">{bike.attributes.handling}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collection Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Collections Fixiebox
          </h3>
          <p className="text-gray-400">
            Découvrez nos différentes collections de NFTs, chacune avec ses propres caractéristiques uniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {collections.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={image}
                alt={`NFT Collection ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">
                    Collection {index + 1}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
