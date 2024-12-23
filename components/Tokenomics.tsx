'use client'

import { motion } from 'framer-motion'
import { PieChart } from 'react-minimal-pie-chart'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const tokenDistribution = [
{ name: 'Fixie', percentage: 40, description: 'Primary token allocation', color: '#3498db' },
{ name: 'Community', percentage: 30, description: 'For community rewards and growth', color: '#e67e22' },
{ name: 'Development', percentage: 20, description: 'Platform development and maintenance', color: '#2980b9' },
{ name: 'Marketing', percentage: 10, description: 'Marketing and partnerships', color: '#1abc9c' },
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
    <section id="tokenomics" className="py-16 bg-gray-900">
        <div className="container mx-auto text-center">
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
                            color: item.color
                        }))}
                        lineWidth={40}
                        paddingAngle={4}
                        rounded
                        animate
                    />
                    <p className="text-lg text-gray-300 mt-6 max-w-xl">
                        Les utilisateurs peuvent participer à la gouvernance de la plateforme en détenant des jetons $Fixie et influencer ainsi l'évolution de l'écosystème FixieRun.
                    </p>
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
    </section>
)
}
