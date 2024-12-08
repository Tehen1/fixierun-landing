"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function HowToPlay() {
  const steps = [
    {
      title: "Connectez votre Wallet",
      description: "Connectez votre portefeuille crypto pour commencer l'aventure",
      icon: "🔗"
    },
    {
      title: "Choisissez votre Fixie NFT",
      description: "Sélectionnez et achetez votre vélo NFT unique",
      icon: "🚲"
    },
    {
      title: "Commencez à Pédaler",
      description: "Connectez votre vélo et commencez à gagner des récompenses",
      icon: "💪"
    },
    {
      title: "Gagnez des Récompenses",
      description: "Collectez des tokens et des NFTs en roulant",
      icon: "🏆"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="how-to-play">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Comment Jouer</h2>
          <p className="text-xl text-gray-400">
            Suivez ces étapes simples pour commencer votre aventure FixieRun
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
