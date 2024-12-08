'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import BikeDetailModal from './BikeDetailModal'

interface Bike {
  id: number
  name: string
  description: string
  rarity: string
  stats: {
    speed: number
    acceleration: number
    handling: number
    battery: number
  }
  price: string
}

const bikes: Bike[] = [
  {
    id: 1,
    name: 'FixieRun Pro',
    description: 'Le vélo ultime pour les champions. Performances exceptionnelles et design futuriste.',
    rarity: 'Légendaire',
    stats: {
      speed: 95,
      acceleration: 90,
      handling: 85,
      battery: 80
    },
    price: '2.5'
  },
  {
    id: 2,
    name: 'Urban Rider',
    description: 'Parfait pour la ville. Maniable et efficace.',
    rarity: 'Rare',
    stats: {
      speed: 80,
      acceleration: 85,
      handling: 90,
      battery: 85
    },
    price: '1.2'
  },
  {
    id: 3,
    name: 'Street Runner',
    description: 'Le choix des débutants. Fiable et abordable.',
    rarity: 'Commun',
    stats: {
      speed: 75,
      acceleration: 75,
      handling: 80,
      battery: 90
    },
    price: '0.5'
  }
]

export default function BikeShowcase() {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="py-24 sm:py-32" id="bikes">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">NFT Bikes</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Collection de vélos NFT
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Découvrez notre collection exclusive de vélos NFT. Chaque vélo est unique et offre des performances différentes.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bikes.map((bike) => (
            <motion.div
              key={bike.id}
              className="relative flex cursor-pointer flex-col gap-6 rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => {
                setSelectedBike(bike)
                setIsModalOpen(true)
              }}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{bike.name}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-8 text-white">
                  {bike.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {bike.description}
                </p>
              </div>
              <div className="mt-auto flex justify-between">
                <span className="text-sm text-gray-400">Rareté: {bike.rarity}</span>
                <span className="text-sm font-medium text-white">{bike.price} ETH</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedBike && (
        <BikeDetailModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedBike(null)
          }}
          bike={selectedBike}
        />
      )}
    </div>
  )
}
