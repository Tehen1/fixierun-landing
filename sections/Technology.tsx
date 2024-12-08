'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEthereum, FaBicycle, FaMobile, FaShieldAlt } from 'react-icons/fa';
import { SiScrollreveal } from 'react-icons/si';

const Technology = () => {
  const features = [
    {
      icon: <SiScrollreveal className="w-8 h-8" />,
      title: 'Scroll zkEVM',
      description: 'Built on Scroll\'s zkEVM Layer 2 solution for fast, secure, and low-cost transactions.',
    },
    {
      icon: <FaEthereum className="w-8 h-8" />,
      title: 'Ethereum Compatible',
      description: 'Fully compatible with Ethereum ecosystem while maintaining lower gas fees and higher throughput.',
    },
    {
      icon: <FaBicycle className="w-8 h-8" />,
      title: 'Proof-of-Ride',
      description: 'Innovative consensus mechanism that verifies and rewards cycling activities on the blockchain.',
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: 'Mobile Integration',
      description: 'Seamless integration with popular fitness tracking apps for a smooth user experience.',
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Secure Rewards',
      description: 'Smart contracts automatically distribute rewards based on verified cycling activity.',
    },
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powered by Scroll zkEVM</h2>
          <p className="text-xl text-gray-400">
            Leveraging cutting-edge blockchain technology for secure, scalable, and sustainable fitness rewards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-purple-500 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://scroll.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold transition-colors duration-300"
          >
            Learn More About Scroll zkEVM
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
