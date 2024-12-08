"use client";

import React, { memo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils';

interface Stat {
  value: string
  label: string
  link?: string
  description?: string
}

const stats: Stat[] = [
  { 
    value: "10,500 km", 
    label: "Distance Covered", 
    link: "/stats/distance",
    description: "Total distance covered by the community"
  },
  { 
    value: "520,000 kcal", 
    label: "Energy Burned", 
    link: "/stats/energy",
    description: "Total energy spent during sessions"
  },
  { 
    value: "480,000 cal", 
    label: "Calories Burned", 
    link: "/stats/calories",
    description: "Calories burned by all users"
  },
  { 
    value: "2,500", 
    label: "Community Members", 
    link: "/community",
    description: "Total number of active members"
  },
  { 
    value: "85%", 
    label: "Average Health Rate", 
    link: "/health-stats",
    description: "Average community health score"
  },
  { 
    value: "1,200+", 
    label: "Active Fixies", 
    link: "/fixies",
    description: "Number of Fixies in circulation"
  }
]

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

function CommunityStats() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Growing Community
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join thousands of cyclists earning rewards through Web3 technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <Link href={stat.link || '#'} className="block">
                <div className={cn(
                  "p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg",
                  "transform transition-all duration-300",
                  "hover:scale-105 hover:shadow-xl",
                  "dark:shadow-gray-700/30"
                )}>
                  <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.description}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(CommunityStats)
