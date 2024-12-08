import { motion } from 'framer-motion';
import { IconBike, IconTrophy, IconCoin, IconUsers } from '@tabler/icons-react';

const features = [
  {
    icon: IconBike,
    title: 'NFT Bike Collection',
    description: 'Collect unique bikes with different classes, abilities, and rarity levels. Each bike is a unique NFT with its own attributes and history.',
  },
  {
    icon: IconTrophy,
    title: 'Real-time Racing',
    description: 'Compete in dynamic races across various tracks with real-time weather effects and class-specific abilities.',
  },
  {
    icon: IconCoin,
    title: 'Play-to-Earn',
    description: 'Earn rewards by participating in races, training your bikes, and climbing the leaderboards.',
  },
  {
    icon: IconUsers,
    title: 'Community Events',
    description: 'Join special events, tournaments, and challenges with exclusive rewards and community prizes.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
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
            Experience the Future of Fitness Gaming
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            FixieRun combines blockchain technology with fitness gaming to create a unique and rewarding experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
