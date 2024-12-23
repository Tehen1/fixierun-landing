'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface EarlyAccessPopupProps {
    isOpen: boolean
    onOpenChangeAction: (open: boolean) => void
}

export function EarlyAccessPopup({ isOpen, onOpenChangeAction }: EarlyAccessPopupProps): React.ReactElement {
    const [email, setEmail] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
        setIsLoading(true)

        try {
            // TODO: Implement your email submission logic here
            await new Promise(resolve => setTimeout(resolve, 1000))
            toast.success('Thanks! We\'ll keep you updated about early access.')
            setEmail('')
            onOpenChangeAction(false)
        } catch {
            toast.error('Something went wrong. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={onOpenChangeAction}>
            <AnimatePresence>
                {isOpen && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl">
                            <div className="flex items-center justify-between">
                                <Dialog.Title className="text-lg font-semibold">
                                    Get Early Access
                                </Dialog.Title>
                                <Dialog.Close className="hover:bg-accent-2 rounded-full p-1.5 transition-colors">
                                    <X className="h-5 w-5 text-gray-500" />
                                </Dialog.Close>
                            </div>
                            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    {isLoading ? 'Submitting...' : 'Get Early Access'}
                                </button>
                            </form>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    )
}