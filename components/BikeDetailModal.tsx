'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface BikeDetailModalProps {
  isOpen: boolean
  onClose: () => void
  bike: {
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
}

export default function BikeDetailModal({ isOpen, onClose, bike }: BikeDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{bike.name}</DialogTitle>
          <DialogDescription>
            {bike.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Vitesse</span>
                <span className="text-sm font-medium text-white">{bike.stats.speed}/100</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: `${bike.stats.speed}%` }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Accélération</span>
                <span className="text-sm font-medium text-white">{bike.stats.acceleration}/100</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: `${bike.stats.acceleration}%` }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Maniabilité</span>
                <span className="text-sm font-medium text-white">{bike.stats.handling}/100</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: `${bike.stats.handling}%` }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Batterie</span>
                <span className="text-sm font-medium text-white">{bike.stats.battery}/100</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-700">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: `${bike.stats.battery}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-400">Rareté</p>
            <p className="text-lg font-semibold text-white">{bike.rarity}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Prix</p>
            <p className="text-lg font-semibold text-white">{bike.price} ETH</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="secondary" onClick={onClose}>
            Fermer
          </Button>
          <Button variant="primary">
            Acheter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
