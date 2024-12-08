import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from './card';

interface NFTCardProps {
  name: string;
  image: string;
  description: string;
}

export const NFTCard: React.FC<NFTCardProps> = ({ name, image, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};
