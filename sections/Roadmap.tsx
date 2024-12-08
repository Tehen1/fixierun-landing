"use client";

import { motion } from "framer-motion";

const roadmapItems = [
  {
    phase: "Phase 1: Foundation",
    title: "Launch & Core Features",
    items: [
      "Launch FixieRun platform",
      "Release NFT bike collection",
      "Implement basic rewards system",
      "Mobile app beta release",
    ],
    status: "completed",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    phase: "Phase 2: Expansion",
    title: "Community & Marketplace",
    items: [
      "Launch NFT marketplace",
      "Introduce community events",
      "Release gem enhancement system",
      "Implement social features",
    ],
    status: "in-progress",
    gradient: "from-red-500 to-orange-500",
  },
  {
    phase: "Phase 3: Innovation",
    title: "Advanced Features",
    items: [
      "AI-powered training plans",
      "Virtual racing system",
      "Cross-chain integration",
      "Advanced bike customization",
    ],
    status: "upcoming",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    phase: "Phase 4: Evolution",
    title: "Ecosystem Growth",
    items: [
      "DAO governance launch",
      "Partnerships expansion",
      "Real-world events integration",
      "Mobile app v2.0",
    ],
    status: "upcoming",
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function Roadmap() {
  return (
    <section className="py-20 bg-black" id="roadmap">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Project Roadmap
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline line */}
              {index !== roadmapItems.length - 1 && (
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gray-800" />
              )}

              <div className="flex items-start">
                {/* Timeline dot */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${item.gradient} mr-6`}
                >
                  <span className="text-2xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <motion.div
                  className="flex-1 bg-gray-900 rounded-xl p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-white mr-4">
                      {item.phase}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "completed"
                          ? "bg-green-500 bg-opacity-20 text-green-400"
                          : item.status === "in-progress"
                            ? "bg-blue-500 bg-opacity-20 text-blue-400"
                            : "bg-gray-500 bg-opacity-20 text-gray-400"
                      }`}
                    >
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-300 mb-4">
                    {item.title}
                  </h4>

                  <ul className="space-y-2">
                    {item.items.map((listItem, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-center text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                      >
                        <svg
                          className={`w-5 h-5 mr-2 ${
                            item.status === "completed"
                              ? "text-green-500"
                              : item.status === "in-progress"
                                ? "text-blue-500"
                                : "text-gray-500"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {item.status === "completed" ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          )}
                        </svg>
                        {listItem}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
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
            className="btn border-2 border-[#00ccff] text-[#00ccff] px-8 py-3 rounded-lg font-semibold"
          >
            View Full Roadmap
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
