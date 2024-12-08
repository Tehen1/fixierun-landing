"use client";

import { motion } from "framer-motion";

interface StatsProps {
  stats: {
    totalDistance: string;
    energyBurned: string;
    caloriesBurned: string;
    communityMembers: string;
  };
}

export function StatsSection({ stats }: StatsProps) {
  const statItems = [
    { label: "Distance Covered", value: stats.totalDistance },
    { label: "Energy Burned", value: stats.energyBurned },
    { label: "Calories Burned", value: stats.caloriesBurned },
    { label: "Community Members", value: stats.communityMembers },
  ];

  return (
    <section className="py-20 bg-black" id="community-stats">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          FixieRun Community Stats
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-[#00ccff]">
                {item.value}
              </h3>
              <p className="text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-gradient-to-r from-[#ff0066] to-[#00ccff] text-white px-8 py-3 rounded-lg font-semibold"
          >
            Join the FixieRun Revolution
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
