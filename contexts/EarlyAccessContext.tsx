// components/EarlyAccessContext.tsx
'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'
import { EarlyAccessPopup } from '@/components/EarlyAccessPopup'

type EarlyAccessContextType = {
  isPopupOpen: boolean
  openPopup: () => void
  closePopup: () => void
}

export const EarlyAccessContext = createContext<EarlyAccessContextType | undefined>(undefined)

export const EarlyAccessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  return (
    <EarlyAccessContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
      <EarlyAccessPopup 
        isOpen={isPopupOpen} 
        onOpenChangeAction={closePopup}
      />
    </EarlyAccessContext.Provider>
  )
}

export const useEarlyAccess = () => {
  const context = useContext(EarlyAccessContext)
  if (context === undefined) {
    throw new Error('useEarlyAccess must be used within an EarlyAccessProvider')
  }
  return context
}