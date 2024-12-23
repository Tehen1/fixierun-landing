'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface EarlyAccessPopupProps {
isOpen: boolean
onOpenChange: (open: boolean) => void
}

export function EarlyAccessPopup({ isOpen, onOpenChange }: EarlyAccessPopupProps) {
const [email, setEmail] = useState('')
const [isLoading, setIsLoading] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
    // TODO: Implement your email submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success('Thanks! We\'ll keep you updated about early access.')
    setEmail('')
    onOpenChange(false)
    } catch {
    toast.error('Something went wrong. Please try again.')
    } finally {
    setIsLoading(false)
    }
}

return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
    <AnimatePresence>
        {isOpen && (
        <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            </Dialog.Overlay>
            <Dialog.Content asChild>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed left-[50%] top-[50%] z-50 w-[90vw] max-w-md translate-x-[-50%] translate-y-[-50%] rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-lg"
            >
                <Dialog.Title className="text-xl font-semibold text-white">
                Get Early Access
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm text-gray-400">
                Sign up to be notified when early access becomes available. Be the first to experience our platform!
                </Dialog.Description>

                <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isLoading ? 'Submitting...' : 'Notify Me'}
                </button>
                </form>

                <Dialog.Close asChild>
                <button
                    className="absolute right-4 top-4 rounded-lg p-1 text-gray-400 hover:text-gray-100"
                    aria-label="Close"
                >
                    <X className="h-4 w-4" />
                </button>
                </Dialog.Close>
            </motion.div>
            </Dialog.Content>
        </Dialog.Portal>
        )}
    </AnimatePresence>
    </Dialog.Root>
)
}

