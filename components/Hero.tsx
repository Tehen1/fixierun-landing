'use client'

import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useEarlyAccessPopup } from '../app/hooks/useEarlyAccessPopup'

const stats = [
  { id: 1, name: 'Active Riders', value: '10K+' },
  { id: 2, name: 'NFTs Minted', value: '50K+' },
  { id: 3, name: 'Races Completed', value: '100K+' },
]

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30 -z-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/fixierun-preview.webm" type="video/webm" />
      </video>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-indigo-400 mb-4">Early Access Available</span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Transform Your Fitness Journey with Web3 Gaming
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join the revolution of fitness gaming. Earn rewards, collect unique NFT bikes, and compete in global races while staying fit.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
            variant="primary"
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
            onClick={() => useEarlyAccessPopup.getState().open()}
            >
            Get Early Access
            </Button>
            <Button
            variant="secondary"
            size="lg"
            className="backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
            onClick={() => useEarlyAccessPopup.getState().open()}
            >
            Connect Wallet
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-3xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated gradient effects */}
      <motion.div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </motion.div>
    </div>
  )
}