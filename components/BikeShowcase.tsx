'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useEarlyAccess } from '@/contexts/EarlyAccessContext'

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
  // ... (rest of the nftBikes array remains the same)
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
  const { openPopup } = useEarlyAccess()

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
              {/* ... (previous code remains the same) */}
              <div className="mt-8">
                {/* ... (previous code remains the same) */}
                <motion.button
                  onClick={openPopup}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 w-full rounded-lg bg-gradient-to-r ${bike.bgColor} px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}