'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const nftBikes = [
  {
    id: 1,
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
    image: '/bikes/nft/fixierun-nft.png',
    bgColor: 'from-blue-500 to-purple-500',
  },
  {
    id: 2,
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
    image: '/bikes/nft/fixierun-nft(1).png',
    bgColor: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
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
    features: ['Ultimate Performance', 'Collector\'s Pride', 'Unmatched Abilities'],
    image: '/bikes/nft/fixierun-nft(2).png',
    bgColor: 'from-pink-500 to-red-500',
  },
  {
    id: 4,
    name: 'Mythic NFT',
    type: 'Mythic',
    description: 'Extraordinary bikes beyond legendary status',
    stats: {
      speed: 98,
      acceleration: 96,
      handling: 95,
      durability: 97,
      rarity: 99,
    },
    features: ['Supreme Performance', 'Absolute Rarity', 'Transcendent Design'],
    image: '/bikes/nft/fixierun-nft(3).png',
    bgColor: 'from-red-500 to-orange-500',

  },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function BikeShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
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
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {nftBikes.map((bike) => (
            <motion.div
              key={bike.id}
              variants={item}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-r ${bike.bgColor} p-6`}
              >
                <Image
                src={bike.image}
                alt={bike.name}
                width={400}
                height={320}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                priority={bike.id === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#ff00b6] leading-8">
                    {bike.name}
                </h3>
                  <p className="text-sm text-indigo-400">{bike.type}</p>
                </div>
                <p className="mt-3 text-sm text-gray-300">{bike.description}</p>
                
                <div className="mt-4 space-y-3">
                  {Object.entries(bike.stats).map(([stat, value]) => (
                    <div key={stat} className="flex items-center justify-between">
                      <span className="text-sm capitalize text-gray-400">{stat}</span>
                      <div className="flex-1 mx-4">
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full bg-gradient-to-r ${bike.bgColor}`}
                          />
                        </div>
                      </div>
                      <span className="text-sm text-white">{value}%</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {bike.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs text-indigo-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 w-full rounded-lg bg-gradient-to-r ${bike.bgColor} px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  Voir la Collection
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
