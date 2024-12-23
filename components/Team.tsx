'use client'

const team = [
{
    name: 'Antony Lambi',
    role: 'AI - Blockchain Dev - SEO Editor',
    bio: 'Fixie lovers AI & blockchain enthusiast',
    imageUrl: '/team/antony.jpg'
},
{
    name: 'AIFTW Blockchain',
    role: 'Blockchain Expert',
    bio: 'ZK & Web3 Solutions Architect',
    imageUrl: '/team/aiftw.jpg'
},
{
    name: 'Crypto Market Pro',
    role: 'Market Analyst',
    bio: 'Crypto & DeFi specialist',
    imageUrl: '/team/crypto.jpg'
},
{
    name: 'AIFTW Blockchain Dev',
    role: 'Senior Developer',
    bio: 'Full-stack blockchain developer',
    imageUrl: '/team/dev.jpg'
},
{
    name: 'Senior BC Dev Front',
    role: 'Frontend Lead',
    bio: 'Web3 UI/UX specialist',
    imageUrl: '/team/frontend.jpg'
}
]

export default function Team() {
  return (
    <div className="py-24 sm:py-32" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-600">Our Team</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Meet the Experts
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
        The talented individuals behind FixieRun
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
                <h3 className="text-lg font-semibold text-[#ff00b6] leading-8">
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
