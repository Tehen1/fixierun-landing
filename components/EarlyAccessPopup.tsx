'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
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
                        <Dialog.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                            />
                        </Dialog.Overlay>
                        {/* Rest of the component remains the same */}
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    )
}