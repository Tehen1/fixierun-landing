const features = [
  {
    name: 'Récompenses Web3',
    description: 'Gagnez des tokens en pédalant. Vos efforts sont directement récompensés sur la blockchain.',
  },
  {
    name: 'NFT Bikes',
    description: 'Collectionnez des vélos uniques sous forme de NFTs, chacun avec ses propres caractéristiques.',
  },
  {
    name: 'Compétitions',
    description: 'Participez à des courses et des défis pour gagner des récompenses exclusives.',
  },
  {
    name: 'Communauté',
    description: 'Rejoignez une communauté passionnée de cyclistes et de crypto-enthousiastes.',
  },
]

export default function Features() {
  return (
    <div className="py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Move-to-Earn</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pédalez pour gagner
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            FixieRun révolutionne le cyclisme en combinant exercice physique et récompenses Web3.
            Plus vous pédalez, plus vous gagnez.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
