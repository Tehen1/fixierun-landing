'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Bike, 
  Coins, 
  Users, 
  Wallet,
} from 'lucide-react'

const features = [
  {
    name: 'NFT Bikes',
    description: 'Collectionnez des vélos numériques uniques avec différents attributs et capacités',
    icon: Bike,
    benefits: [
      'Bikes with unique attributes',
      'Customizable components',
      'Rarity levels',
      'Trading marketplace'
    ],
    stats: '1000+ Unique Models'
  },
  {
    name: 'Earn Rewards',
    description: 'Complétez des défis et gagnez des tokens pour vos réalisations',
    icon: Coins,
    benefits: [
      'Daily challenges',
      'Achievement rewards',
      'Tournament prizes',
      'Staking rewards'
    ],
    stats: '$100K+ Distributed'
  },
  {
    name: 'Community',
    description: 'Rejoignez une communauté mondiale d\'enthousiastes de fitness et de gaming',
    icon: Users,
    benefits: [
      'Global leaderboards',
      'Team competitions',
      'Social features',
      'Community events'
    ],
    stats: '50K+ Active Users'
  },
  {
    name: 'Web3 Integration',
    description: 'Connectez votre wallet et gérez vos actifs en toute simplicité',
    icon: Wallet,
    benefits: [
      'Secure transactions',
      'Cross-chain support',
      'NFT marketplace',
      'DeFi features'
    ],
    stats: '1M+ Transactions'
  },
]

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

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-24 sm:py-32 relative overflow-hidden" id="features">
      {/* Enhanced animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 animate-gradient" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Caractéristiques</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Fonctionnalités Révolutionnaires
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Découvrez le mélange parfait entre fitness, gaming et technologie blockchain
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="group relative flex flex-col bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-800 hover:border-indigo-500 transition-colors duration-300"
              >
                <dt className="flex items-center text-lg font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-500/30 group-hover:bg-indigo-500/20 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" aria-hidden="true" />
                  </div>
                </dt>
                <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-4 text-sm font-medium text-indigo-400">{feature.stats}</p>
                  <ul className="mt-4 space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
}
