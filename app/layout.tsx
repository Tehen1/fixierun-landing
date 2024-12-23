import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/frontend/context/auth'
import { Toaster } from 'react-hot-toast'
import { Analytics } from "@vercel/analytics/react"
import '../styles/globals.css'

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
          {children}
          <Toaster />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
