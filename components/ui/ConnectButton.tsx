'use client'

import { useAuth } from '@/frontend/context/auth'
import { Button } from './button'

export function ConnectButton() {
const { isConnected, address, balance, connect, disconnect } = useAuth()

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const formatBalance = (balance: string) => {
    const ethBalance = parseInt(balance) / 1e18
    return `${ethBalance.toFixed(4)} ETH`
  }

  return (
    <Button
      variant="primary"
      onClick={isConnected ? disconnect : connect}
      className="flex items-center gap-2"
    >
      {isConnected ? (
        <div className="flex items-center gap-2">
          <span>{formatAddress(address!)}</span>
          {balance && <span>({formatBalance(balance)})</span>}
        </div>
      ) : (
        'Connecter le wallet'
      )}
    </Button>
  )
}