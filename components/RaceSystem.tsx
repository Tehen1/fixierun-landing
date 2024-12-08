'use client'

import { motion } from 'framer-motion'

const races = [
  {
    id: 1,
    name: 'Sprint Urbain',
    distance: '5 km',
    reward: '50 FIX',
    difficulty: 'Facile',
    participants: '32/50',
    startTime: '10:00'
  },
  {
    id: 2,
    name: 'Marathon Électrique',
    distance: '42 km',
    reward: '500 FIX',
    difficulty: 'Difficile',
    participants: '18/30',
    startTime: '14:00'
  },
  {
    id: 3,
    name: 'Course Nocturne',
    distance: '15 km',
    reward: '150 FIX',
    difficulty: 'Moyen',
    participants: '25/40',
    startTime: '20:00'
  }
]

export default function RaceSystem() {
  return (
    <div className="py-24 sm:py-32" id="races">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Courses</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Système de courses
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Participez à des courses quotidiennes et gagnez des récompenses en tokens FIX.
            Plus vous pédalez, plus vous gagnez !
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {races.map((race) => (
            <motion.div
              key={race.id}
              className="relative flex flex-col gap-6 rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div>
                <h3 className="text-lg font-semibold leading-8 text-white">
                  {race.name}
                </h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Distance</span>
                    <span className="text-sm font-medium text-white">{race.distance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Récompense</span>
                    <span className="text-sm font-medium text-blue-400">{race.reward}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Difficulté</span>
                    <span className="text-sm font-medium text-white">{race.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Participants</span>
                    <span className="text-sm font-medium text-white">{race.participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Départ</span>
                    <span className="text-sm font-medium text-white">{race.startTime}</span>
                  </div>
                </div>
              </div>
              <motion.button
                className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Rejoindre la course
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
