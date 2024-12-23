'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Server, 
  Globe2,
  Bike,
  Heart,
  Leaf,
  Users,
  Shield
} from 'lucide-react'

const ecosystemComponents = [
  {
    name: 'Infrastructure',
    description: 'Une fondation technologique robuste et évolutive',
    status: '99.9% Uptime',
    icon: Server,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'DeFi Integration',
    description: 'Integration with major DeFi protocols',
    status: '$10M+ TVL',
    icon: Shield,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Global Community',
    description: 'Un réseau mondial d\'enthousiastes',
    status: '50+ Countries',
    icon: Globe2,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'NFT Collection',
    description: 'Collection unique de vélos numériques',
    status: '10K+ NFTs',
    icon: Bike,
    gradient: 'from-green-500 to-emerald-500',
  },
]

const impactMetrics = [
  {
    name: 'Health',
    description: 'Promoting an active and healthy lifestyle',
    status: '50K+ Active Users',
    icon: Heart,
    gradient: 'from-red-500 to-pink-500',
  },
  {
    name: 'Environment',
    description: 'Encouraging sustainable mobility',
    status: '1M+ CO₂ Saved',
    icon: Leaf,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Social',
    description: 'Connecting cycling enthusiasts',
    status: '200K+ Members',
    icon: Users,
    gradient: 'from-blue-500 to-indigo-500',
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

export default function Ecosystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Ecosystem</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Complete Ecosystem
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover FixieRun's interconnected components
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {ecosystemComponents.map((component) => (
            <motion.div
              key={component.name}
              variants={item}
              className="relative overflow-hidden rounded-2xl bg-gray-900/50 p-6 backdrop-blur ring-1 ring-white/10"
            >
              <div className={`inline-flex rounded-lg bg-gradient-to-r ${component.gradient} p-3`}>
                <component.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
            <h3 className="mt-4 text-lg font-semibold bg-gradient-to-r from-accent-pink via-primary to-accent-cyan text-transparent bg-clip-text leading-8">{component.name}</h3>
              <p className="mt-2 text-base text-gray-300">{component.description}</p>
              <p className="mt-4 text-sm font-medium text-indigo-400">{component.status}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-32 max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Our Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Making a Difference
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            How FixieRun contributes to a better future for all
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {impactMetrics.map((metric) => (
            <motion.div
              key={metric.name}
              variants={item}
              className="relative overflow-hidden rounded-2xl bg-gray-900/50 p-6 backdrop-blur ring-1 ring-white/10"
            >
              <div className={`inline-flex rounded-lg bg-gradient-to-r ${metric.gradient} p-3`}>
                <metric.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
            <h3 className="mt-4 text-lg font-semibold bg-gradient-to-r from-accent-pink via-primary to-accent-cyan text-transparent bg-clip-text leading-8">{metric.name}</h3>
              <p className="mt-2 text-base text-gray-300">{metric.description}</p>
              <p className="mt-4 text-sm font-medium text-indigo-400">{metric.status}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700/20 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="ecosystem-pattern"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#ecosystem-pattern)" />
        </svg>
      </div>
    </div>
  )
}