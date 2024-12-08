'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

declare global {
  interface Window {
    ethereum?: any
  }
}

interface AuthContextType {
  address: string | null
  chainId: string | null
  balance: string | null
  isConnecting: boolean
  isConnected: boolean
  connect: () => Promise<void>
  disconnect: () => void
}

const AuthContext = createContext<AuthContextType>({
  address: null,
  chainId: null,
  balance: null,
  isConnecting: false,
  isConnected: false,
  connect: async () => {},
  disconnect: () => {}
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<string | null>(null)
  const [chainId, setChainId] = useState<string | null>(null)
  const [balance, setBalance] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const connect = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const chainId = await window.ethereum.request({ method: 'eth_chainId' })
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [accounts[0], 'latest']
        })

        setAddress(accounts[0])
        setChainId(chainId)
        setBalance(balance)
        setIsConnected(true)
      } else {
        console.log('Please install MetaMask!')
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error)
    }
  }

  const disconnect = () => {
    setAddress(null)
    setChainId(null)
    setBalance(null)
    setIsConnected(false)
  }

  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' })
          if (accounts.length > 0) {
            const chainId = await window.ethereum.request({ method: 'eth_chainId' })
            const balance = await window.ethereum.request({
              method: 'eth_getBalance',
              params: [accounts[0], 'latest']
            })

            setAddress(accounts[0])
            setChainId(chainId)
            setBalance(balance)
            setIsConnected(true)
          }
        } catch (error) {
          console.error('Error checking connection:', error)
        }
      }
    }

    checkConnection()

    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0])
          setIsConnected(true)
        } else {
          disconnect()
        }
      })

      window.ethereum.on('chainChanged', (chainId: string) => {
        setChainId(chainId)
      })

      window.ethereum.on('disconnect', () => {
        disconnect()
      })
    }

    return () => {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.removeListener('accountsChanged', () => {})
        window.ethereum.removeListener('chainChanged', () => {})
        window.ethereum.removeListener('disconnect', () => {})
      }
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        address,
        chainId,
        balance,
        isConnecting,
        isConnected,
        connect,
        disconnect
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
