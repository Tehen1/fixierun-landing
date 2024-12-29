import React from 'react'

interface NftCardProps {
title: string
type: string
stats: {
    speed: number
    acceleration: number
    handling: number
    durability: number
    rarity: number
}
features: string[]
}

const NftCard: React.FC<NftCardProps> = ({ title, type, imageUrl, stats, features }) => (
<div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-xl">
    <h3 className="text-2xl font-bold mb-4 text-gradient">{title}</h3>
    <div className="text-blue-400 font-semibold mb-4">{type}</div>
    <div className="mb-6 h-48 bg-gray-700 rounded-lg"></div>
    
    <div className="space-y-3 mb-6">
    {Object.entries(stats).map(([stat, value]) => (
        <div key={stat}>
        <div className="flex justify-between text-sm mb-1">
            <span className="capitalize">{stat}</span>
            <span>{value}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
            <div
            className="bg-blue-500 rounded-full h-2"
            style={{ width: `${value}%` }}
            ></div>
        </div>
        </div>
    ))}
    </div>
    
    <div className="space-y-2">
    {features.map((feature, index) => (
        <div key={index} className="flex items-center">
        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
        <span className="text-sm">{feature}</span>
        </div>
    ))}
    </div>
    
    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
    Voir la Collection
    </button>
</div>
)

const NftCollection = () => {
const nfts = [
    {
    title: "Rare NFT",
    type: "Rare",
    imageUrl: "/rare-nft.jpg",
    stats: {
        speed: 85,
        acceleration: 80,
        handling: 75,
        durability: 90,
        rarity: 70
    },
    features: ["Unique Design", "Special Abilities", "Rare Traits"]
    },
    {
    title: "Epic NFT",
    type: "Epic",
    imageUrl: "/epic-nft.jpg",
    stats: {
        speed: 90,
        acceleration: 88,
        handling: 85,
        durability: 92,
        rarity: 85
    },
    features: ["Enhanced Stats", "Exclusive Skins", "Bonus Rewards"]
    },
    {
    title: "Legendary NFT",
    type: "Legendary",
    imageUrl: "/legendary-nft.jpg",
    stats: {
        speed: 95,
        acceleration: 93,
        handling: 90,
        durability: 94,
        rarity: 95
    },
    features: ["Ultimate Performance", "Collector's Pride", "Unmatched Abilities"]
    },
    {
    title: "Mythic NFT",
    type: "Mythic",
    imageUrl: "/mythic-nft.jpg",
    stats: {
        speed: 98,
        acceleration: 96,
        handling: 95,
        durability: 97,
        rarity: 99
    },
    features: ["Supreme Performance", "Absolute Rarity", "Transcendent Design"]
    }
]

return (
    <section className="py-20 bg-black">
    <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gradient">Exclusive Digital Bikes</h2>
        <p className="text-gray-400 text-xl">
            Discover our collection of unique NFT bikes with special attributes and exclusive benefits.
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {nfts.map((nft, index) => (
            <NftCard key={index} {...nft} />
        ))}
        </div>
    </div>
    </section>
)
}

export default NftCollection

