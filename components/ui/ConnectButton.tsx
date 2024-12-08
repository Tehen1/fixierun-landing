'use client'

import { useAuth } from '@/frontend/context/auth'
import { Button } from './button'

export function ConnectButton() {
  const { isConnected, address, connect, disconnect } = useAuth()

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <Button
      variant="primary"
      onClick={isConnected ? disconnect : connect}
    >
      {isConnected ? formatAddress(address!) : 'Connecter le wallet'}
    </Button>
  )
}
