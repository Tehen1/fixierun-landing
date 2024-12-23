'use client'

import { motion } from 'framer-motion'
import { PieChart } from 'react-minimal-pie-chart'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const tokenDistribution = [
  { name: 'Distribution', percentage: 40, description: 'Équitable distribution entre utilisateurs et développeurs' },
  { name: 'Mécanisme', percentage: 30, description: 'Staking et récompenses pour participation active' },
  { name: 'Gouvernance', percentage: 20, description: 'Système de vote décentralisé pour décisions importantes' },
  { name: 'Sécurité', percentage: 10, description: 'Mécanismes de verrouillage et de vesting pour la stabilité' },
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

export default function Tokenomics() {
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
        <h2 className="text-base font-semibold leading-7 text-indigo-400">Tokenomics</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Distribution des Tokens
        </p>
        </motion.div>

        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-12">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64"
        >
            <PieChart
            data={tokenDistribution.map((item) => ({
                title: item.name,
                value: item.percentage,
                color: item.name === 'Distribution' ? '#818cf8' :
                item.name === 'Mécanisme' ? '#6366f1' :
                item.name === 'Gouvernance' ? '#4f46e5' :
                '#4338ca'
            }))}
            lineWidth={40}
            paddingAngle={2}
            rounded
            animate
            />
        </motion.div>
        <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-4 lg:grid-cols-4"
        >
            {tokenDistribution.map((token) => (
            <motion.div
                key={token.name}
                variants={item}
                className="relative overflow-hidden rounded-2xl bg-gray-900 p-6 shadow-lg"
            >
                <h3 className="text-lg font-semibold bg-gradient-to-r from-accent-pink via-primary to-accent-cyan text-transparent bg-clip-text">{token.name}</h3>
                <p className="mt-2 text-5xl font-bold text-indigo-400">{token.percentage}%</p>
                <p className="mt-2 text-sm text-gray-400">{token.description}</p>
            </motion.div>
            ))}
        </motion.div>
        </div>
    </div>
    </div>
)
}
