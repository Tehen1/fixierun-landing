'use client'

const tokenomics = [
  {
    name: 'Récompenses',
    percentage: '40%',
    description: 'Réservé aux récompenses des utilisateurs pour leurs activités physiques'
  },
  {
    name: 'Trésorerie',
    percentage: '20%',
    description: 'Pour le développement continu et les opérations'
  },
  {
    name: 'Équipe',
    percentage: '15%',
    description: 'Allocation pour l\'équipe et les conseillers (verrouillée)'
  },
  {
    name: 'Marketing',
    percentage: '10%',
    description: 'Pour la croissance et l\'acquisition d\'utilisateurs'
  },
  {
    name: 'Liquidité',
    percentage: '10%',
    description: 'Pour assurer la stabilité du marché'
  },
  {
    name: 'Réserve',
    percentage: '5%',
    description: 'Pour les cas imprévus et les opportunités futures'
  }
]

export default function Tokenomics() {
  return (
    <div className="py-24 sm:py-32" id="tokenomics">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Tokenomics</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Distribution des tokens
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Une distribution équitable qui favorise la croissance durable de l&apos;écosystème
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tokenomics.map((item) => (
              <div
                key={item.name}
                className="relative flex flex-col gap-6 rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur"
              >
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-3xl font-bold text-blue-600">
                    {item.percentage}
                  </p>
                </div>
                <p className="text-base leading-7 text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
