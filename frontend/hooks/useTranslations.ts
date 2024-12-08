import { useCallback } from 'react';

const translations = {
  fr: {
    common: {
      buttons: {
        signInConnect: 'Se connecter',
        connectWallet: 'Connecter le wallet',
        disconnect: 'Déconnexion',
        startRiding: 'Commencer à pédaler',
        learnMore: 'En savoir plus',
        joinCommunity: 'Rejoindre la communauté',
      },
      labels: {
        distance: 'Distance',
        energy: 'Énergie',
        calories: 'Calories',
        members: 'Membres',
        bikes: 'Vélos',
        rewards: 'Récompenses',
      },
    },
    sections: {
      hero: {
        title: 'FixieRun',
        subtitle: 'Pédalez, Gagnez, Évoluez - Le Futur du Cyclisme Web3',
      },
      nft: {
        title: 'Collection NFT',
        description: 'Découvrez nos vélos uniques',
      },
      howToPlay: {
        title: 'Comment Jouer',
        description: 'Commencez votre aventure en quelques étapes',
      },
      technology: {
        title: 'Notre Technologie',
        description: 'Propulsé par Scroll zkEVM',
      },
      ecosystem: {
        title: 'Écosystème',
        description: 'Un environnement complet pour les cyclistes',
      },
    },
  },
};

export function useTranslations() {
  const locale = 'fr'; // You can make this dynamic

  const t = useCallback((key: string) => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value || key;
  }, [locale]);

  return { t };
}
