import { motion } from 'framer-motion';
import { IconMap2, IconCloud, IconBolt, IconTrophy } from '@tabler/icons-react';

const tracks = [
  {
    name: 'City Sprint',
    type: 'Urban',
    distance: '5km',
    difficulty: 'Easy',
    weather: 'Sunny',
    rewards: '0.02 ETH',
    icon: IconMap2,
  },
  {
    name: 'Endurance Challenge',
    type: 'Mixed',
    distance: '20km',
    difficulty: 'Hard',
    weather: 'Perfect',
    rewards: '0.1 ETH',
    icon: IconBolt,
  },
  {
    name: 'Pro Circuit',
    type: 'Track',
    distance: '10km',
    difficulty: 'Expert',
    weather: 'Windy',
    rewards: '0.3 ETH',
    icon: IconTrophy,
  },
];

const weatherEffects = [
  {
    condition: 'Sunny',
    effect: 'Standard racing conditions',
    speedMod: '+0%',
    staminaMod: '-10%',
    icon: IconCloud,
  },
  {
    condition: 'Perfect',
    effect: 'Ideal conditions for all classes',
    speedMod: '+10%',
    staminaMod: '+5%',
    icon: IconCloud,
  },
  {
    condition: 'Windy',
    effect: 'Increased stamina drain',
    speedMod: '-5%',
    staminaMod: '-15%',
    icon: IconCloud,
  },
];

export default function RaceSystem() {
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
            Dynamic Race System
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Compete in various tracks with real-time weather effects and earn rewards based on your performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Race Tracks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Available Tracks</h3>
            <div className="space-y-4">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-6 border border-purple-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <track.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">{track.name}</h4>
                        <span className="text-purple-400">{track.rewards}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-400">Type: </span>
                          <span className="text-white">{track.type}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Distance: </span>
                          <span className="text-white">{track.distance}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Difficulty: </span>
                          <span className="text-white">{track.difficulty}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Weather: </span>
                          <span className="text-white">{track.weather}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Weather System */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Weather Effects</h3>
            <div className="space-y-4">
              {weatherEffects.map((weather, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-6 border border-purple-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <weather.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">{weather.condition}</h4>
                      </div>
                      <p className="text-gray-400 mb-2">{weather.effect}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-400">Speed: </span>
                          <span className="text-white">{weather.speedMod}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Stamina: </span>
                          <span className="text-white">{weather.staminaMod}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
