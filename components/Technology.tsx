'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Cpu,
  FileCode2,
  Brain,
  Database,
} from 'lucide-react'

const technologies = [
  {
    name: 'Blockchain Ethereum',
    description: 'Infrastructure sécurisée pour les NFTs et les récompenses avec smart contracts audités',
    icon: Cpu,
    color: 'text-blue-500',
    stats: '100K+ Transactions',
    features: ['Smart Contracts', 'NFT Minting', 'Token Management']
  },
  {
    name: 'Smart Contracts',
    description: 'Contrats intelligents audités garantissant la sécurité et la transparence des transactions',
    icon: FileCode2,
    color: 'text-purple-500',
    stats: '50K+ Deployments',
    features: ['Automated Rewards', 'Secure Trading', 'Event Management']
  },
  {
    name: 'IA Avancée',
    description: 'Algorithmes d\'apprentissage sophistiqués pour une expérience personnalisée',
    icon: Brain,
    color: 'text-green-500',
    stats: '1M+ Predictions',
    features: ['Route Optimization', 'Performance Analysis', 'Personalized Training']
  },
  {
    name: 'Base de Données Décentralisée',
    description: 'Stockage sécurisé et transparent des données avec haute disponibilité',
    icon: Database,
    color: 'text-pink-500',
    stats: '10TB+ Managed',
    features: ['Real-time Sync', 'Data Encryption', 'High Availability']
  },
]

const stats = [
  { id: 1, name: 'Active Users', value: '10K+' },
  { id: 2, name: 'NFTs Minted', value: '50K+' },
  { id: 3, name: 'Rewards Distributed', value: '$2M+' },
  { id: 4, name: 'Races Completed', value: '100K+' },
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

export default function Technology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-24 sm:py-32 relative overflow-hidden">
      {/* Enhanced animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/40 to-gray-900 animate-gradient" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Notre Infrastructure</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies de Pointe
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Notre plateforme s'appuie sur des technologies Web3 de pointe pour offrir une expérience de fitness gaming révolutionnaire.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="group relative flex flex-col items-start bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-800 hover:border-indigo-500 transition-colors duration-300"
              >
                <div className="mb-6">
                  <div className={`rounded-lg p-3 ring-1 ring-gray-900/10 shadow-sm ${tech.color}`}>
                    <tech.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <dt className="text-lg font-semibold leading-7 text-white">
                  {tech.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{tech.description}</p>
                  <p className="mt-4 text-sm font-medium text-indigo-400">{tech.stats}</p>
                  <ul className="mt-4 space-y-2">
                    {tech.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800"
              >
                <dt className="text-sm font-medium leading-6 text-gray-400">{stat.name}</dt>
                <dd className="mt-2 flex items-baseline justify-between md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-white">
                    {stat.value}
                  </div>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
}
