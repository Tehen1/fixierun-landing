import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Tutorial from '../components/Tutorial'
import BikeShowcase from '../components/BikeShowcase'
import Marketplace from '../components/Marketplace'
import RaceSystem from '../components/RaceSystem'
import Achievements from '../components/Achievements'
import CommunityHub from '../components/CommunityHub'
import LeaderBoard from '../components/LeaderBoard'
import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import Footer from '../components/Footer'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
    <Navbar />
    <Hero />
    <Features />
    <Tutorial />
    <BikeShowcase />
    <Marketplace />
    <RaceSystem />
    <Achievements />
    <CommunityHub />
    <LeaderBoard />
    <Tokenomics />
    <Roadmap />
    <Team />
    <Footer />
    <Analytics />
    </main>
  )
}
