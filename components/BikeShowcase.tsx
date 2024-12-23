'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useEarlyAccess } from '@/contexts/EarlyAccessContext'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function BikeShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { openPopup } = useEarlyAccess()

  const nftBikes = [
    {
      id: 0,
      name: 'Rare NFT',
      type: 'Rare',
      description: 'Limited edition bikes with unique attributes',
      stats: {
        speed: 85,
        acceleration: 80,
        handling: 75,
        durability: 90,
        rarity: 70,
      },
      features: ['Unique Design', 'Special Abilities', 'Rare Traits'],
      buttonText: 'Voir la Collection',
      image: '/bikes/nft/city-glider-blue.webp',
      bgColor: 'from-blue-500 to-purple-500',
    },
    {
      id: 1,
      name: 'Epic NFT',
      type: 'Epic',
      description: 'Exceptional bikes with enhanced performance',
      stats: {
        speed: 90,
        acceleration: 88,
        handling: 85,
        durability: 92,
        rarity: 85,
      },
      features: ['Enhanced Stats', 'Exclusive Skins', 'Bonus Rewards'],
      buttonText: 'Voir la Collection',
      image: '/bikes/nft/city-phantom-black.webp',
      bgColor: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      name: 'Legendary NFT',
      type: 'Legendary',
      description: 'The most prestigious and powerful bikes',
      stats: {
        speed: 95,
        acceleration: 93,
        handling: 90,
        durability: 94,
        rarity: 95,
      },
      features: ['Maximum Performance', 'Unique Effects', 'Special Access'],
      buttonText: 'Voir la Collection',
      image: '/bikes/nft/night-rider-stealth.webp',
      bgColor: 'from-pink-500 to-red-500',
    },
    {
      id: 3,
      name: 'Mythic NFT',
      type: 'Mythic',
      description: 'Ancient legendary bikes with mystical powers',
      stats: {
        speed: 100,
        acceleration: 98,
        handling: 95,
        durability: 97,
        rarity: 100,
      },
      features: ['Mythical Powers', 'Time-Limited Edition', 'Exclusive Quests'],
      buttonText: 'Voir la Collection',
      image: '/bikes/nft/speed-demon-silver.webp',
      bgColor: 'from-red-500 to-orange-500',
    }
  ]
  return (
    <div ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-400">NFT Collection</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Exclusive Digital Bikes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover our collection of unique NFT bikes with special attributes and exclusive benefits.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-4"
        >
          {nftBikes.map((bike) => (
            <motion.div
              key={bike.id}
              variants={item}
              className="group relative flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur"
            >
              <div className="relative w-full h-80 mb-6 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center">
                <Image
                  src={bike.image}
                  alt={bike.name}
                  fill
                  className="object-contain max-w-full max-h-full w-auto h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{bike.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{bike.type}</p>
                <p className="text-gray-300 mb-6">{bike.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(bike.stats).map(([statName, statValue]) => (
                    <div key={statName} className="flex justify-between">
                      <span className="text-gray-400 capitalize">{statName}</span>
                      <span className="text-white font-semibold">{statValue}%</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Features</h4>
                  <ul className="space-y-2">
                    {bike.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  onClick={() => openPopup()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full rounded-lg bg-gradient-to-r ${bike.bgColor} px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90`}
                >
                  {bike.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}