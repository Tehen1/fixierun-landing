'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Qu&apos;est-ce que FixieRun ?',
    answer: 'FixieRun est une plateforme innovante qui combine le fitness, le gaming et la technologie Web3. Elle vous permet de gagner des récompenses en faisant du vélo, de collectionner des NFT uniques et de participer à des courses mondiales tout en restant en forme.',
  },
  {
    question: 'Comment fonctionnent les NFT vélos ?',
    answer: 'Les NFT vélos sont des actifs numériques uniques avec différents attributs (vitesse, accélération, maniabilité, durabilité) et niveaux de rareté. Chaque vélo offre des avantages spécifiques et peut être utilisé dans les courses ou échangé sur notre marketplace.',
  },
  {
    question: 'Quelles sont les récompenses disponibles ?',
    answer: 'Les utilisateurs peuvent gagner des tokens FixieRun, des NFT exclusifs, des badges de réussite et des récompenses spéciales en participant aux courses, en relevant des défis quotidiens et en atteignant des objectifs de fitness.',
  },
  {
    question: 'Comment commencer avec FixieRun ?',
    answer: 'Pour commencer, connectez votre portefeuille crypto, choisissez votre premier NFT vélo et rejoignez notre communauté. Vous pourrez immédiatement participer aux courses et commencer à gagner des récompenses.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Questions Fréquentes</h2>
        <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="pt-6"
              >
                <dt>
                  <motion.button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between text-left text-white"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-6 w-6" aria-hidden="true" />
                      </motion.div>
                    </span>
                  </motion.button>
                </dt>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.dd
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-base leading-7 text-gray-300">{faq.answer}</p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </dl>
        </div>

        {/* Virtual Assistant Section */}
        <div className="mt-16 rounded-2xl bg-gray-900/50 p-8 backdrop-blur ring-1 ring-white/10">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">FixieRun Assistant</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white">Besoin d&apos;aide ?</p>
            <p className="mt-4 text-lg text-gray-300">
            Notre assistant virtuel est disponible 24/7 pour répondre à toutes vos questions sur FixieRun, les NFTs et le système de récompenses.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 rounded-lg bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Démarrer le chat
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}