'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { formatAddress } from '@/lib/utils'

interface AuthContextType {
  isAuthenticated: boolean
  address: string | null
  balance: string
  chainId: number | null
  connect: () => Promise<void>
  disconnect: () => Promise<void>
  formatAddress: (address: string) => string
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  address: null,
  balance: '0',
  chainId: null,
  connect: async () => {},
  disconnect: async () => {},
  formatAddress: () => '',
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState('0')
  const [chainId, setChainId] = useState<number | null>(null)

  // Temporarily simplified wallet connection
  const connect = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const chainId = await window.ethereum.request({ method: 'eth_chainId' })
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [accounts[0], 'latest'],
        })

        setAddress(accounts[0])
        setChainId(parseInt(chainId, 16))
        setBalance(balance)
        setIsAuthenticated(true)
      } else {
        console.log('Please install MetaMask!')
      }
    } catch (error) {
      console.error('Error connecting wallet:', error)
    }
  }

  const disconnect = async () => {
    setAddress(null)
    setChainId(null)
    setBalance('0')
    setIsAuthenticated(false)
  }

  useEffect(() => {
    // Check if user was previously connected
    const checkConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        if (accounts.length > 0) {
          await connect()
        }
      }
    }

    checkConnection()

    // Setup event listeners
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          connect()
        } else {
          disconnect()
        }
      })

      window.ethereum.on('chainChanged', () => {
        window.location.reload()
      })
    }

    return () => {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.removeAllListeners()
      }
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        address,
        balance,
        chainId,
        connect,
        disconnect,
        formatAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
