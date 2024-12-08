"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Tokenomics() {
  const tokenomicsData = [
    {
      category: "Move2Earn",
      percentage: 36,
      description: "Récompenses pour les cyclistes actifs"
    },
    {
      category: "Ecosystem",
      percentage: 21,
      description: "Développement et partenariats"
    },
    {
      category: "Team",
      percentage: 15,
      description: "Équipe fondatrice"
    },
    {
      category: "Marketing",
      percentage: 6,
      description: "Promotion et partenariats"
    },
    {
      category: "Liquidity",
      percentage: 10,
      description: "Pools de liquidité"
    },
    {
      category: "Private Sale",
      percentage: 5,
      description: "Investisseurs privés"
    },
    {
      category: "Public Sale",
      percentage: 4,
      description: "Vente publique"
    },
    {
      category: "Advisor",
      percentage: 3,
      description: "Conseillers stratégiques"
    }
  ];

  const tokenInfo = [
    {
      title: "FXR Token",
      supply: "5 Milliards",
      details: [
        { label: "Minting Fee", value: "10%" },
        { label: "Upgrade Fee", value: "10%" },
        { label: "NFT Sales", value: "1%" }
      ]
    },
    {
      title: "FXM Token",
      supply: "Illimité",
      details: [
        { label: "Utilité", value: "In-game" },
        { label: "Earning", value: "Move2Earn" },
        { label: "Burning", value: "Automatique" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="tokenomics">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Tokenomics</h2>
          <p className="text-xl text-gray-400">
            Distribution et utilisation des tokens FXR & FXM
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Token Distribution */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Distribution FXR</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tokenomicsData.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{item.category}</span>
                      <span className="text-[#00ccff]">{item.percentage}%</span>
                    </div>
                    <p className="text-sm text-gray-400">{item.description}</p>
                    <div className="mt-2 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#ff0066] to-[#00ccff]"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Token Info */}
          <div className="space-y-6">
            {tokenInfo.map((token, index) => (
              <motion.div
                key={token.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold mb-2">{token.title}</h3>
                <div className="text-[#00ccff] font-semibold mb-4">
                  Supply: {token.supply}
                </div>
                <div className="space-y-2">
                  {token.details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-400">{detail.label}</span>
                      <span>{detail.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">10%</div>
              <div className="text-gray-400">Frais de Minting</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">3%</div>
              <div className="text-gray-400">Token Burning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5%</div>
              <div className="text-gray-400">Impact Environnemental</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
