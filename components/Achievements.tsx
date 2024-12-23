'use client';

import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiTrendingUp } from 'react-icons/fi';

const achievements = [
    {
        id: 1,
        title: 'Speed Demon',
        description: 'Win 10 races with a speed over 45km/h',
        progress: 70,
        reward: '50 $FIXIE',
        icon: FiTrendingUp
    },
    {
        id: 2,
        title: 'Elite Rider',
        description: 'Complete 100 races',
        progress: 45,
        reward: '100 $FIXIE',
        icon: FiAward
    },
    {
        id: 3,
        title: 'Bike Collector',
        description: 'Own 5 different NFT bikes',
        progress: 60,
        reward: 'Legendary Bike Part',
        icon: FiTarget
    }
];

const levels = [
    { level: 1, xp: 1000, rewards: ['Starter Bike', '100 $FIXIE'] },
    { level: 2, xp: 2500, rewards: ['Rare Bike Part', '250 $FIXIE'] },
    { level: 3, xp: 5000, rewards: ['Epic Bike', '500 $FIXIE'] }
];

export default function Achievements() {
    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
                    <p className="text-gray-400">Track your progress and earn rewards</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {achievements.map((achievement) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-xl p-6"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <achievement.icon className="text-2xl text-indigo-500" />
                                <h3 className="text-xl font-bold bg-gradient-to-r from-accent-pink via-primary to-accent-cyan text-transparent bg-clip-text">{achievement.title}</h3>
                            </div>
                            <p className="text-gray-400 mb-4">{achievement.description}</p>
                            <div className="mb-4">
                                <div className="flex justify-between text-sm text-gray-400 mb-1">
                                    <span>Progress</span>
                                    <span>{achievement.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${achievement.progress}%` }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-400">Reward:</span>
                                <span className="text-indigo-400 font-semibold">{achievement.reward}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-gray-800 rounded-xl p-8">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-pink via-primary to-accent-cyan text-transparent bg-clip-text mb-6">Level Progression</h3>
                    <div className="space-y-6">
                        {levels.map((level) => (
                            <div key={level.level} className="relative">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-lg font-semibold text-white">Level {level.level}</span>
                                    <span className="text-indigo-400">{level.xp} XP</span>
                                </div>
                                <div className="space-y-2">
                                    {level.rewards.map((reward, index) => (
                                        <div key={index} className="flex items-center text-gray-400">
                                            <FiAward className="mr-2 text-indigo-500" />
                                            <span>{reward}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
