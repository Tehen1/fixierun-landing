'use client'

import { useAuth } from '@/frontend/context/auth'
import { Button } from './button'

export function ConnectButton() {
  const { isAuthenticated, address, connect, disconnect, formatAddress } = useAuth()

  return (
    <Button
      variant="primary"
      onClick={isAuthenticated ? disconnect : connect}
    >
      {isAuthenticated ? formatAddress(address!) : 'Connecter le Wallet'}
    </Button>
  )
}
