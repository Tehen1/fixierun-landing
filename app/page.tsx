import { Analytics } from "@vercel/analytics/react"

import Achievements from '../components/Achievements'
import BikeShowcase from '../components/BikeShowcase'
import CommunityHub from '../components/CommunityHub'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import LeaderBoard from '../components/LeaderBoard'
import Marketplace from '../components/Marketplace'
import Navbar from '../components/Navbar'
import NftCollection from '../components/NftCollection'
import RaceSystem from '../components/RaceSystem'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import Tokenomics from '../components/Tokenomics'
import Tutorial from '../components/Tutorial'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
    <Navbar />
    <Hero />
    <Features />
    <CommunityHub />
    <Tutorial />
    <BikeShowcase />
    <NftCollection />
    <Marketplace />
    <RaceSystem />
    <Achievements />
    <LeaderBoard />
    <Tokenomics />
    <Roadmap />
    <Team />
    <Footer />
    <Analytics />
    </main>
  )
}
