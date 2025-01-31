'use client'

import { motion } from 'framer-motion'
import { BiMessageRoundedDetail,BiNews, BiTrophy } from 'react-icons/bi'

const events = [
{
    title: "Grand Prix Fixie",
    date: "2024-02-01",
    description: "Course hebdomadaire avec récompenses exclusives",
    participants: 128
},
{
    title: "Community Challenge",
    date: "2024-02-15", 
    description: "Défi mensuel : 1000km en équipe",
    participants: 256
},
{
    title: "NFT Show & Trade",
    date: "2024-03-01",
    description: "Échangez vos NFTs avec la communauté",
    participants: 84
}
]

const topPlayers = [
{
    rank: 1,
    name: "CryptoRider",
    wins: 142,
    distance: "2,450 km",
    points: 12500
},
{
    rank: 2,
    name: "FixieMaster",
    wins: 128,
    distance: "2,280 km",
    points: 11200
},
{
    rank: 3,
    name: "VeloChamp",
    wins: 115,
    distance: "2,150 km",
    points: 10800
}
]

const news = [
{
    title: "Nouvelle Collection NFT",
    date: "2024-01-28",
    content: "Découvrez notre nouvelle collection de vélos légendaires"
},
{
    title: "Mise à jour du système de course",
    date: "2024-01-25",
    content: "Améliorations majeures du système de matchmaking"
},
{
    title: "Partenariat Web3",
    date: "2024-01-20",
    content: "Nouveau partenariat avec une blockchain majeure"
}
]

const discussions = [
{
    title: "Stratégies pour les courses urbaines",
    author: "UrbanRider",
    replies: 45,
    views: 1200
},
{
    title: "Guide des NFTs rares",
    author: "NFTHunter",
    replies: 32,
    views: 980
},
{
    title: "Astuces pour gagner des tokens",
    author: "TokenMaster",
    replies: 28,
    views: 850
}
]

export default function CommunityHub() {
return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-black py-24">
    <div className="container mx-auto px-4">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
        >
        <h2 className="text-4xl font-bold text-white mb-4">Community Hub</h2>
        <p className="text-gray-400">Rejoignez une communauté passionnée de cyclistes virtuels</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Events Section */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 rounded-xl p-6"
        >
            <div className="flex items-center mb-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-accent-pink via-primary to-accent-cyan text-transparent bg-clip-text">Événements</h3>
            </div>
            <div className="space-y-4">
            {events.map((event, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-white font-semibold">{event.title}</h4>
                <p className="text-gray-400 text-sm">{event.date}</p>
                <p className="text-gray-300 mt-2">{event.description}</p>
                <p className="text-indigo-400 text-sm mt-2">{event.participants} participants</p>
                </div>
            ))}
            </div>
        </motion.div>
        
        {/* Top Players Section */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/50 rounded-xl p-6"
        >
            <div className="flex items-center mb-6">
            <BiTrophy className="text-yellow-500 text-2xl mr-2" />
            <h3 className="text-2xl font-semibold text-[#ff00b6]">Top Players</h3>
            </div>
            <div className="space-y-4">
            {topPlayers.map((player, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-4 flex items-center justify-between">
                <div>
                    <div className="flex items-center">
                    <span className="text-2xl font-bold text-yellow-500 mr-3">#{player.rank}</span>
                    <span className="text-white font-semibold">{player.name}</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{player.distance} parcourus</p>
                </div>
                <div className="text-right">
                    <p className="text-indigo-400">{player.wins} victoires</p>
                    <p className="text-yellow-400">{player.points} pts</p>
                </div>
                </div>
            ))}
            </div>
        </motion.div>
        
        {/* News Feed Section */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 rounded-xl p-6"
        >
            <div className="flex items-center mb-6">
            <BiNews className="text-green-500 text-2xl mr-2" />
            <h3 className="text-2xl font-semibold text-[#ff00b6]">Actualités</h3>
            </div>
            <div className="space-y-4">
            {news.map((item, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-white font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.date}</p>
                <p className="text-gray-300 mt-2">{item.content}</p>
                </div>
            ))}
            </div>
        </motion.div>
        
        {/* Forum Section */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-800/50 rounded-xl p-6"
        >
            <div className="flex items-center mb-6">
            <BiMessageRoundedDetail className="text-purple-500 text-2xl mr-2" />
            <h3 className="text-2xl font-semibold text-[#ff00b6]">Forum</h3>
            </div>
            <div className="space-y-4">
            {discussions.map((discussion, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-white font-semibold">{discussion.title}</h4>
                <div className="flex justify-between text-sm mt-2">
                    <span className="text-purple-400">par {discussion.author}</span>
                    <div className="text-gray-400">
                    <span className="mr-4">{discussion.replies} réponses</span>
                    <span>{discussion.views} vues</span>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </motion.div>
        </div>
    </div>
    </section>
)
}

