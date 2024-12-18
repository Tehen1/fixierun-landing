import { create } from 'zustand'

interface EarlyAccessPopupStore {
isOpen: boolean
open: () => void
close: () => void
}

export const useEarlyAccessPopup = create<EarlyAccessPopupStore>((set) => ({
isOpen: false,
open: () => set({ isOpen: true }),
close: () => set({ isOpen: false }),
}))

