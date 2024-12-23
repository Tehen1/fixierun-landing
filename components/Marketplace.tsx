'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';

const bikes = [
{
    id: 1,
    name: 'City Glider Blue',
    price: '0.5 ETH',
    rarity: 'Rare',
    image: '/bikes/nft/city-glider-blue.webp',
    stats: { speed: 85, handling: 75, acceleration: 80 }
},
{
    id: 2,
    name: 'Track Star Pro',
    price: '0.8 ETH',
    rarity: 'Epic',
    image: '/bikes/nft/track-star-pro.webp',
    stats: { speed: 90, handling: 85, acceleration: 88 }
},
{
    id: 3,
    name: 'Velocity Master Red',
    price: '1.2 ETH',
    rarity: 'Legendary',
    image: '/bikes/nft/velocity-master-red.webp',
    stats: { speed: 95, handling: 92, acceleration: 93 }
}
];

export default function Marketplace() {
const [searchTerm, setSearchTerm] = useState('');
const [selectedRarity, setSelectedRarity] = useState('All');
const [priceRange] = useState([0, 2]);

const filteredBikes = bikes.filter(bike => {
    const matchesSearch = bike.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = selectedRarity === 'All' || bike.rarity === selectedRarity;
    const priceInEth = parseFloat(bike.price.split(' ')[0]);
    const matchesPrice = priceInEth >= priceRange[0] && priceInEth <= priceRange[1];
    return matchesSearch && matchesRarity && matchesPrice;
});

return (
    <section className="relative py-20 bg-gray-900">
    <div className="container mx-auto px-4">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
        >
        <h2 className="text-4xl font-bold text-white mb-4">NFT Marketplace</h2>
        <p className="text-gray-400">Discover and collect unique digital bikes</p>
        </motion.div>

        <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex-1 min-w-[300px]">
            <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                type="text"
                placeholder="Search bikes..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
        </div>

        <div className="flex gap-4">
            <select
            className="px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-indigo-500"
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            >
            <option value="All">All Rarities</option>
            <option value="Rare">Rare</option>
            <option value="Epic">Epic</option>
            <option value="Legendary">Legendary</option>
            </select>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBikes.map((bike) => (
            <motion.div
            key={bike.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
            >
            <div className="relative h-48">
                <Image
                    src={bike.image}
                    alt={bike.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#ff00b6]">{bike.name}</h3>
                <span className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full">
                    {bike.rarity}
                </span>
                </div>
                <div className="space-y-2">
                {Object.entries(bike.stats).map(([stat, value]) => (
                    <div key={stat} className="flex items-center justify-between">
                    <span className="text-gray-400 capitalize">{stat}</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full">
                        <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${value}%` }}
                        />
                    </div>
                    </div>
                ))}
                </div>
                <div className="mt-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white">{bike.price}</span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
                    Buy Now
                </button>
                </div>
            </div>
            </motion.div>
        ))}
        </div>
    </div>
    </section>
);
}

