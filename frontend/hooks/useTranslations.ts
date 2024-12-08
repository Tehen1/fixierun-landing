import { useState, useEffect } from 'react'

type Translations = {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    welcome: 'Welcome to FixieRun',
    connect: 'Connect Wallet',
    disconnect: 'Disconnect',
    features: 'Features',
    roadmap: 'Roadmap',
    team: 'Team',
  },
  fr: {
    welcome: 'Bienvenue sur FixieRun',
    connect: 'Connecter le Wallet',
    disconnect: 'Déconnecter',
    features: 'Fonctionnalités',
    roadmap: 'Roadmap',
    team: 'Équipe',
  },
}

export function useTranslations(locale: string = 'fr') {
  const [currentLocale, setCurrentLocale] = useState(locale)

  useEffect(() => {
    // Could add logic here to detect user's preferred language
    const userLocale = navigator.language.split('-')[0]
    if (translations[userLocale]) {
      setCurrentLocale(userLocale)
    }
  }, [])

  const t = (key: string): string => {
    return translations[currentLocale]?.[key] || translations.en[key] || key
  }

  return { t, currentLocale, setCurrentLocale }
}
