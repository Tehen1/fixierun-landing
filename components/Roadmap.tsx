'use client'

const timeline = [
  {
    name: 'Phase 1',
    description: 'Lancement de la plateforme',
    items: [
      'Application mobile beta',
      'Intégration Web3',
      'Système de récompenses de base',
      'Marketplace NFT'
    ]
  },
  {
    name: 'Phase 2',
    description: 'Expansion communautaire',
    items: [
      'Système de guildes',
      'Événements communautaires',
      'Staking de NFTs',
      'Gouvernance DAO'
    ]
  },
  {
    name: 'Phase 3',
    description: 'Écosystème complet',
    items: [
      'Partenariats stratégiques',
      'Intégration DeFi',
      'Événements IRL',
      'Expansion internationale'
    ]
  }
]

export default function Roadmap() {
  return (
    <div className="py-24 sm:py-32" id="roadmap">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Roadmap</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Notre vision pour l&apos;avenir
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Un plan ambitieux pour révolutionner l&apos;industrie du fitness et du Web3
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {timeline.map((phase, index) => (
              <div
                key={phase.name}
                className="relative flex flex-col gap-6 rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                    <span className="text-sm font-semibold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-white">
                    {phase.name}
                  </h3>
                </div>
                <p className="text-base leading-7 text-gray-300">{phase.description}</p>
                <ul className="list-disc space-y-2 pl-5">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
