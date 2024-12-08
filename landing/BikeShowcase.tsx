import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import BikeDetailModal from './BikeDetailModal';
import { IconSearch, IconAdjustmentsHorizontal } from '@tabler/icons-react';

export interface Bike {
  name: string;
  class: string;
  rarity: string;
  image: string;
  altText: string;
  price: string;
  attributes: {
    speed: number;
    stamina: number;
    handling: number;
  };
}

interface BikeShowcaseProps {
  setSelectedBike: React.Dispatch<React.SetStateAction<Bike | null>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const bikes: Bike[] = [
  // Urban Collection
  {
    name: 'Urban Chrome',
    class: 'Urban',
    rarity: 'Common',
    image: '/bikes/nft/categories/urban/fixie-urban-chrome.webp',
    altText: 'Black fixie bike with sleek chrome details, perfect for urban commuting',
    price: '0.1 ETH',
    attributes: {
      speed: 75,
      stamina: 80,
      handling: 85,
    },
  },
  {
    name: 'Pro Racer Elite',
    class: 'Racer',
    rarity: 'Rare',
    image: '/bikes/nft/collections/premium/pro-racer-black-gold.webp',
    altText: 'Premium racing fixie with black and gold finish',
    price: '0.3 ETH',
    attributes: {
      speed: 85,
      stamina: 85,
      handling: 90,
    },
  },
  {
    name: 'Chrome Flash',
    class: 'Premium',
    rarity: 'Epic',
    image: '/bikes/nft/collections/premium/chrome-flash-elite.webp',
    altText: 'Elite chrome fixie with premium components',
    price: '0.5 ETH',
    attributes: {
      speed: 90,
      stamina: 90,
      handling: 85,
    },
  },
  {
    name: 'Carbon Shadow',
    class: 'Limited',
    rarity: 'Legendary',
    image: '/bikes/nft/collections/premium/carbon-shadow-elite.webp',
    altText: 'Limited edition carbon fiber fixie with premium finish',
    price: '1.0 ETH',
    attributes: {
      speed: 95,
      stamina: 95,
      handling: 95,
    },
  }
];

type SortOption = 'price-asc' | 'price-desc' | 'speed' | 'rarity';

const BikeShowcase: React.FC<BikeShowcaseProps> = ({ setSelectedBike, setModalOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedRarity, setSelectedRarity] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('price-asc');

  const classes = useMemo(() => 
    Array.from(new Set(bikes.map(bike => bike.class))).sort(),
    []
  );

  const rarities = useMemo(() => 
    Array.from(new Set(bikes.map(bike => bike.rarity))).sort(),
    []
  );

  const filteredAndSortedBikes = useMemo(() => {
    const filtered = bikes.filter(bike => {
      const matchesSearch = bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          bike.class.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesClass = !selectedClass || bike.class === selectedClass;
      const matchesRarity = !selectedRarity || bike.rarity === selectedRarity;
      return matchesSearch && matchesClass && matchesRarity;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'price-desc':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'speed':
          return b.attributes.speed - a.attributes.speed;
        case 'rarity': {
          const rarityOrder = { Legendary: 4, Epic: 3, Rare: 2, Common: 1 };
          return (rarityOrder[b.rarity as keyof typeof rarityOrder] || 0) - 
                 (rarityOrder[a.rarity as keyof typeof rarityOrder] || 0);
        }
        default:
          return 0;
      }
    });
  }, [searchQuery, selectedClass, selectedRarity, sortBy]);

  const handleBikeClick = (bike: Bike) => {
    setSelectedBike(bike);
    setModalOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Bikes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our exclusive collection of high-performance fixie bikes, each with unique attributes and stunning designs.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search bikes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="">All Classes</option>
                {classes.map(className => (
                  <option key={className} value={className}>{className}</option>
                ))}
              </select>
              <select
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="">All Rarities</option>
                {rarities.map(rarity => (
                  <option key={rarity} value={rarity}>{rarity}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="speed">Fastest First</option>
                <option value="rarity">Rarity</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedBikes.map((bike, index) => (
            <motion.div
              key={bike.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-800 border border-gray-700 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleBikeClick(bike)}
            >
              <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={bike.image}
                    alt={bike.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={
                      bike.rarity === 'Legendary' ? 'bg-yellow-500/90 text-black' :
                      bike.rarity === 'Epic' ? 'bg-purple-500/90' :
                      bike.rarity === 'Rare' ? 'bg-blue-500/90' :
                      'bg-gray-500/90'
                    }>
                      {bike.rarity}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{bike.name}</h3>
                      <p className="text-sm text-gray-400">{bike.class}</p>
                    </div>
                    <p className="text-purple-400 font-semibold">{bike.price}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Speed</span>
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${bike.attributes.speed}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Stamina</span>
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${bike.attributes.stamina}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Handling</span>
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-500 rounded-full"
                          style={{ width: `${bike.attributes.handling}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredAndSortedBikes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No bikes found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BikeShowcase;
