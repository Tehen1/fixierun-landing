'use client'

import Link from 'next/link'
import { ConnectButton } from './ui/ConnectButton'

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-white">FixieRun</span>
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#features" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Fonctionnalités
          </Link>
          <Link href="#bikes" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            NFT Bikes
          </Link>
          <Link href="#races" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Courses
          </Link>
          <Link href="#leaderboard" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Classement
          </Link>
          <Link href="#roadmap" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Roadmap
          </Link>
          <Link href="#tokenomics" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Tokenomics
          </Link>
          <Link href="#team" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Équipe
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-6">
          <ConnectButton />
        </div>
      </div>
    </nav>
  )
}
