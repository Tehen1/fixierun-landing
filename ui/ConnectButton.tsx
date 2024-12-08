'use client'

import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit'
import { Button } from '@/components/ui/button'

export default function ConnectButton() {
  return (
    <RainbowConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted

        if (!ready) {
          return null
        }

        if (!account) {
          return (
            <Button
              onClick={openConnectModal}
              className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Connect Wallet
            </Button>
          )
        }

        if (chain?.unsupported) {
          return (
            <Button
              onClick={openChainModal}
              className="px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Wrong network
            </Button>
          )
        }

        return (
          <div className="flex flex-row gap-4">
            <Button
              onClick={openChainModal}
              className="px-4 py-2 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              {chain?.name || 'Unknown'}
            </Button>
            <Button
              onClick={openAccountModal}
              className="px-4 py-2 text-sm text-white bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              {account.displayName}
            </Button>
          </div>
        )
      }}
    </RainbowConnectButton.Custom>
  )
}
