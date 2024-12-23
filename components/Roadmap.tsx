'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const roadmapPhases = [
  { phase: 'Phase 1', description: 'Lancement, Développement MVP, Test communautaire, Première collection NFT', status: 'Completed' },
  { phase: 'Phase 2', description: 'Croissance, Lancement du token, Nouvelles fonctionnalités, Partenariats stratégiques', status: 'In-progress' },
  { phase: 'Phase 3', description: 'Expansion, Expansion mondiale, Événements exclusifs, Récompenses améliorées', status: 'Upcoming' },
  { phase: 'Phase 4', description: 'Évolution, DAO communautaire, Écosystème étendu, Innovations technologiques', status: 'Upcoming' },
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

export default function Roadmap() {
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
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Roadmap</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Notre Voyage
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-16 space-y-8"
        >
          {roadmapPhases.map((phase) => (
            <motion.div
              key={phase.phase}
              variants={item}
              className="relative overflow-hidden rounded-2xl bg-gray-900 p-6 shadow-lg"
            >
            <h3 className="text-lg font-semibold bg-gradient-to-r from-accent-pink via-primary to-accent-cyan text-transparent bg-clip-text">{phase.phase}</h3>
              <p className="mt-2 text-sm text-gray-400">{phase.description}</p>
              <p className="mt-2 text-sm text-indigo-400">{phase.status}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}