'use client'

import { motion } from 'framer-motion'

const leaderboard = [
  {
    rank: 1,
    name: 'CryptoRider',
    distance: '1,245 km',
    earnings: '2,500 FIX',
    races: 42,
    winRate: '76%'
  },
  {
    rank: 2,
    name: 'SpeedMaster',
    distance: '1,120 km',
    earnings: '2,200 FIX',
    races: 38,
    winRate: '71%'
  },
  {
    rank: 3,
    name: 'UrbanLegend',
    distance: '980 km',
    earnings: '1,900 FIX',
    races: 35,
    winRate: '69%'
  },
  {
    rank: 4,
    name: 'NightRider',
    distance: '850 km',
    earnings: '1,600 FIX',
    races: 30,
    winRate: '65%'
  },
  {
    rank: 5,
    name: 'ElectricDreams',
    distance: '720 km',
    earnings: '1,400 FIX',
    races: 28,
    winRate: '61%'
  }
]

export default function LeaderBoard() {
  return (
    <div className="py-24 sm:py-32" id="leaderboard">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Classement</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Top 5 des coureurs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Découvrez les meilleurs coureurs de la semaine et leurs performances exceptionnelles.
          </p>
        </div>

        <div className="mt-16 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead className="bg-gray-900">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">
                        Rang
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        Coureur
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        Distance
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        Gains
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        Courses
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        Taux de victoire
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 bg-gray-900/50">
                    {leaderboard.map((player, playerIdx) => (
                      <motion.tr
                        key={player.rank}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: playerIdx * 0.1 }}
                        className="hover:bg-gray-800/50"
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className={`
                              flex h-8 w-8 items-center justify-center rounded-full
                              ${player.rank === 1 ? 'bg-yellow-500' :
                                player.rank === 2 ? 'bg-gray-400' :
                                player.rank === 3 ? 'bg-amber-600' :
                                'bg-gray-700'}
                            `}>
                              <span className="text-sm font-medium text-white">{player.rank}</span>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                          {player.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                          {player.distance}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-blue-400">
                          {player.earnings}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                          {player.races}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                          {player.winRate}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
