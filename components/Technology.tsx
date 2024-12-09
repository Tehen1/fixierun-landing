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
    description: 'Infrastructure sécurisée pour les NFTs et les récompenses',
    icon: Cpu,
    color: 'text-blue-500',
  },
  {
    name: 'Smart Contracts',
    description: 'Contrats intelligents audités pour la sécurité des transactions',
    icon: FileCode2,
    color: 'text-purple-500',
  },
  {
    name: 'IA Avancée',
    description: 'Algorithmes d\'apprentissage pour personnaliser l\'expérience',
    icon: Brain,
    color: 'text-green-500',
  },
  {
    name: 'Base de Données Décentralisée',
    description: 'Stockage sécurisé et transparent des données',
    icon: Database,
    color: 'text-pink-500',
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
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/40 to-gray-900" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Technology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies Innovantes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Notre plateforme utilise les dernières technologies pour offrir une expérience unique et sécurisée.
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
                className="flex flex-col items-start"
              >
                <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
                  <tech.icon className={`h-6 w-6 ${tech.color}`} aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">{tech.name}</dt>
                <dd className="mt-2 leading-7 text-gray-400">{tech.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={item}
              className="flex flex-col-reverse gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
              <dd className="text-5xl font-semibold tracking-tight text-white">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated circles background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="absolute -top-40 -right-40 h-80 w-80 border border-indigo-500/20 bg-indigo-500/10 opacity-20"
          />
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [270, 270, 0, 0, 270],
              borderRadius: ["50%", "50%", "20%", "20%", "50%"],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 2,
            }}
            className="absolute -bottom-40 -left-40 h-80 w-80 border border-purple-500/20 bg-purple-500/10 opacity-20"
          />
        </div>
      </div>
    </div>
  )
}
