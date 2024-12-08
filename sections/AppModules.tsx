"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function AppModules() {
  const modules = [
    {
      title: "NFT Bikes",
      description: "Collectionnez des vélos uniques avec des attributs spéciaux",
      icon: "🚲"
    },
    {
      title: "Rewards",
      description: "Gagnez des tokens en pédalant et en participant aux événements",
      icon: "💎"
    },
    {
      title: "Community",
      description: "Rejoignez une communauté mondiale de cyclistes passionnés",
      icon: "🌍"
    },
    {
      title: "Events",
      description: "Participez à des compétitions et des défis exclusifs",
      icon: "🏆"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="modules">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Fonctionnalités Principales
          </h2>
          <p className="text-xl text-gray-400">
            Découvrez ce qui rend FixieRun unique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{module.icon}</div>
              <h3 className="text-xl font-bold mb-2">{module.title}</h3>
              <p className="text-gray-400">{module.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
