'use client'

const team = [
  {
    name: 'Thomas H.',
    role: 'CEO & Co-fondateur',
    bio: 'Expert en blockchain avec 10 ans d\'expérience dans le développement Web3',
    imageUrl: '/team/thomas.jpg'
  },
  {
    name: 'Marie L.',
    role: 'CTO',
    bio: 'Architecte blockchain, spécialiste en sécurité et smart contracts',
    imageUrl: '/team/marie.jpg'
  },
  {
    name: 'Alex R.',
    role: 'Head of Product',
    bio: 'Passionné de cyclisme et expert en gamification',
    imageUrl: '/team/alex.jpg'
  },
  {
    name: 'Sarah B.',
    role: 'CMO',
    bio: 'Stratège marketing avec une expertise en croissance communautaire',
    imageUrl: '/team/sarah.jpg'
  }
]

export default function Team() {
  return (
    <div className="py-24 sm:py-32" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">L&apos;équipe</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Les visages derrière FixieRun
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Une équipe passionnée combinant expertise technique et amour du cyclisme
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="relative flex flex-col items-center gap-6 rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center backdrop-blur"
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <div className="h-full w-full bg-gradient-to-tr from-blue-600 to-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600">{member.role}</p>
                </div>
                <p className="text-sm leading-6 text-gray-300">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
