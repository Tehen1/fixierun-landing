import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Roadmap from '@/components/Roadmap'
import Tokenomics from '@/components/Tokenomics'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Roadmap />
      <Tokenomics />
      <Team />
      <Footer />
    </main>
  )
}
