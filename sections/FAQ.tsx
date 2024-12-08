'use client';

import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Qu'est-ce que FixieRun ?",
    answer: "FixieRun est une plateforme Web3 innovante qui récompense les cyclistes pour leurs activités physiques. Elle combine fitness, blockchain et gamification."
  },
  {
    question: "Comment fonctionne la récompense ?",
    answer: "Les utilisateurs gagnent des tokens FIXIE en participant à des activités cyclistes. Les récompenses sont basées sur la distance parcourue et les défis relevés."
  },
  {
    question: "De quoi ai-je besoin pour commencer ?",
    answer: "Vous avez besoin d'un vélo, d'un smartphone pour l'application FixieRun, et d'un wallet crypto pour recevoir vos récompenses."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-gray-400">
            Tout ce que vous devez savoir sur FixieRun
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-gray-800/90 transition-colors duration-300">
                <Disclosure>
                  {({ open }) => (
                    <div>
                      <Disclosure.Button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500">
                        <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {faq.question}
                        </span>
                        <ChevronDownIcon
                          className={`w-5 h-5 text-purple-400 transform transition-transform duration-300 ${
                            open ? 'rotate-180' : ''
                          }`}
                        />
                      </Disclosure.Button>

                      <AnimatePresence mode="wait">
                        {open && (
                          <Disclosure.Panel
                            static
                            as={motion.div}
                            initial={false}
                            animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="px-6 pb-4">
                              <motion.p 
                                className="text-gray-300"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ delay: 0.1 }}
                              >
                                {faq.answer}
                              </motion.p>
                            </div>
                          </Disclosure.Panel>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </Disclosure>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
