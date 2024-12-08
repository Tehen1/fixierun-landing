import { motion } from 'framer-motion';

const roadmapItems = [
  {
    quarter: 'Q1 2024',
    title: 'Platform Launch',
    items: [
      'Initial NFT bike collection release',
      'Basic race mechanics implementation',
      'Wallet integration and marketplace',
      'Community building and social presence',
    ],
    status: 'completed',
  },
  {
    quarter: 'Q2 2024',
    title: 'Game Mechanics Enhancement',
    items: [
      'Advanced race system with weather effects',
      'Training and evolution mechanics',
      'Energy system implementation',
      'Additional bike collections',
    ],
    status: 'in-progress',
  },
  {
    quarter: 'Q3 2024',
    title: 'Social Features',
    items: [
      'Team racing and guilds',
      'Tournament system',
      'Social features and chat',
      'Achievement system',
    ],
    status: 'upcoming',
  },
  {
    quarter: 'Q4 2024',
    title: 'Mobile & Expansion',
    items: [
      'Mobile app release',
      'Cross-platform integration',
      'New game modes',
      'International expansion',
    ],
    status: 'upcoming',
  },
];

const statusColors = {
  completed: 'bg-green-500',
  'in-progress': 'bg-yellow-500',
  upcoming: 'bg-purple-500',
};

export default function Roadmap() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Roadmap
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our vision for the future of FixieRun and the milestones we're working towards.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-purple-500/20" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full ${
                    statusColors[item.status as keyof typeof statusColors]
                  } transform -translate-x-1/2 mt-2`}
                />

                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0">
                  <div
                    className={`bg-gray-900 rounded-xl p-6 border border-purple-500/20 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{item.quarter}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          statusColors[item.status as keyof typeof statusColors]
                        } bg-opacity-20 text-${
                          item.status === 'completed'
                            ? 'green'
                            : item.status === 'in-progress'
                            ? 'yellow'
                            : 'purple'
                        }-400 capitalize`}
                      >
                        {item.status.replace('-', ' ')}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-4">{item.title}</h4>
                    <ul className="space-y-2">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
