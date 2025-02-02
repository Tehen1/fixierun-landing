import '../styles/globals.css'

import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { EarlyAccessProvider } from '@/contexts/EarlyAccessContext'
import { AuthProvider } from '@/frontend/context/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FixieRun | Web3 Fitness Gaming Platform',
  description: 'Join FixieRun - The ultimate Web3 fitness gaming platform combining virtual cycling, blockchain rewards, and social competition. Earn while you exercise in our immersive gaming environment.',
  keywords: ['web3 gaming', 'fitness platform', 'blockchain fitness', 'virtual cycling', 'crypto rewards', 'exercise gaming', 'play to earn', 'move to earn'],
  openGraph: {
    title: 'FixieRun | Web3 Fitness Gaming Platform',
    description: 'Join FixieRun - The ultimate Web3 fitness gaming platform combining virtual cycling, blockchain rewards, and social competition.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'FixieRun',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FixieRun | Web3 Fitness Gaming Platform',
    description: 'Join FixieRun - The ultimate Web3 fitness gaming platform combining virtual cycling, blockchain rewards, and social competition.',
    creator: '@FixieRun'
  },
  verification: {
    google: 'verification_token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>
          <EarlyAccessProvider>
            {children}
            <Toaster />
            <Analytics />
          </EarlyAccessProvider>
        </AuthProvider>
      </body>
    </html>
  )
}