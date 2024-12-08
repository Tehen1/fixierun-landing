"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 bg-black" id="cta">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Prêt à Rejoindre l'Aventure ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Commencez votre voyage dans le fitness Web3 dès aujourd'hui
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Commencer Maintenant
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
