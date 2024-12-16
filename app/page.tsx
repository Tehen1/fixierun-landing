import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Roadmap from '@/components/Roadmap'
import Tokenomics from '@/components/Tokenomics'
import Team from '@/components/Team'
import Footer from '@/components/Footer'
import BikeShowcase from '@/components/BikeShowcase'
import RaceSystem from '@/components/RaceSystem'
import LeaderBoard from '@/components/LeaderBoard'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Features />
      <BikeShowcase />
      <RaceSystem />
      <LeaderBoard />
      <Roadmap />
      <Tokenomics />
      <Team />
      <Footer />
      <Analytics />
    </main>
  )
}
