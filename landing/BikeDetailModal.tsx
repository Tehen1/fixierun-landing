import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { IconX } from '@tabler/icons-react';
import type { Bike } from './BikeShowcase';

interface BikeDetailModalProps {
  bike: Bike | null;
  isOpen: boolean;
  onClose: () => void;
}

const BikeDetailModal: React.FC<BikeDetailModalProps> = ({ bike, isOpen, onClose }) => {
  if (!bike) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-gray-900 rounded-2xl overflow-hidden z-50 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors"
            >
              <IconX className="w-5 h-5 text-gray-400" />
            </button>

            <div className="relative aspect-video">
              <Image
                src={bike.image}
                alt={bike.altText}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 right-4">
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
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{bike.name}</h3>
                  <p className="text-gray-400">{bike.class} Class</p>
                </div>
                <p className="text-xl font-bold text-purple-400">{bike.price}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                  <p className="text-gray-400">{bike.altText}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Attributes</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Speed</span>
                        <span className="text-white">{bike.attributes.speed}/100</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${bike.attributes.speed}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-green-500 rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Stamina</span>
                        <span className="text-white">{bike.attributes.stamina}/100</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${bike.attributes.stamina}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Handling</span>
                        <span className="text-white">{bike.attributes.handling}/100</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${bike.attributes.handling}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                  Mint NFT
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BikeDetailModal;
