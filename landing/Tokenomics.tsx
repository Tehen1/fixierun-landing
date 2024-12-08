import { motion } from 'framer-motion';
import { IconCoin, IconUsers, IconLock, IconChartBar } from '@tabler/icons-react';

const tokenomics = [
  {
    title: 'Community Rewards',
    percentage: '40%',
    description: 'Allocated for race rewards, staking benefits, and community events',
    icon: IconUsers,
  },
  {
    title: 'Development',
    percentage: '20%',
    description: 'Platform development, new features, and technical improvements',
    icon: IconChartBar,
  },
  {
    title: 'Team & Advisors',
    percentage: '15%',
    description: 'Core team members and strategic advisors (vested over 2 years)',
    icon: IconUsers,
  },
  {
    title: 'Treasury',
    percentage: '25%',
    description: 'Platform sustainability, partnerships, and future initiatives',
    icon: IconLock,
  },
];

const metrics = [
  {
    label: 'Total Supply',
    value: '100,000,000 FIXIE',
  },
  {
    label: 'Initial Market Cap',
    value: '$5,000,000',
  },
  {
    label: 'Initial Token Price',
    value: '$0.05',
  },
  {
    label: 'Vesting Period',
    value: '24 months',
  },
];

export default function Tokenomics() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tokenomics
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The FIXIE token powers our ecosystem, providing utility and rewards for our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Token Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Token Distribution</h3>
            <div className="space-y-4">
              {tokenomics.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-6 border border-purple-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <span className="text-purple-400">{item.percentage}</span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Token Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Token Metrics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-xl p-6 border border-purple-500/20"
                  >
                    <h4 className="text-gray-400 mb-2">{metric.label}</h4>
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gray-900 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Token Utility</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <IconCoin className="w-5 h-5 text-purple-400" />
                  Race entry fees and rewards
                </li>
                <li className="flex items-center gap-2">
                  <IconCoin className="w-5 h-5 text-purple-400" />
                  NFT bike minting and trading
                </li>
                <li className="flex items-center gap-2">
                  <IconCoin className="w-5 h-5 text-purple-400" />
                  Staking rewards and governance
                </li>
                <li className="flex items-center gap-2">
                  <IconCoin className="w-5 h-5 text-purple-400" />
                  Platform fee discounts
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
