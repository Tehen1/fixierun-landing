'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Timer,
  Trophy,
  Map,
  Medal,
} from 'lucide-react'

const modules = [
  {
    name: 'Real-Time Racing',
    description: 'Participate in virtual races in real-time',
    features: ['Live Competition', 'Global Matchmaking', 'Performance Tracking'],
    icon: Timer,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Reward System',
    description: 'Earn tokens and NFTs for your performance',
    features: ['Daily Rewards', 'Achievement Badges', 'Token Earnings'],
    icon: Trophy,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Dynamic Routes',
    description: 'Discover new automatically generated circuits',
    features: ['AI Generation', 'Difficulty Levels', 'Community Routes'],
    icon: Map,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Rankings',
    description: 'Global competition with live rankings',
    features: ['Global Leaderboard', 'Season Rankings', 'Team Competition'],
    icon: Medal,
    gradient: 'from-green-500 to-emerald-500',
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

export default function AppModules() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-400">App Modules</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Core Features
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover the features that make FixieRun a unique fitness gaming experience
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {modules.map((module) => (
            <motion.div
              key={module.name}
              variants={item}
              className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${module.gradient}`} />
              
              <div className="p-6">
                <div className={`inline-flex rounded-lg bg-gradient-to-r ${module.gradient} p-3`}>
                  <module.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                
                <h3 className="mt-4 text-lg font-semibold leading-8 text-white">
                  {module.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-300">
                  {module.description}
                </p>
                
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  className="mt-6 space-y-2"
                >
                  {module.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        show: { opacity: 1, x: 0 },
                      }}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <motion.span
                        className={`mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${module.gradient}`}
                        whileHover={{ scale: 1.5 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700/20 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
    </div>
  )
}
