'use client';

import { useAuth } from '@/frontend/context';
import { Button } from './button';
import { useTranslations } from '@/frontend/hooks/useTranslations';

interface CombinedAuthButtonProps {
  className?: string;
}

export function CombinedAuthButton({ className }: CombinedAuthButtonProps) {
  const { isAuthenticated, isLoading, login, logout, isWalletConnected, connectWallet, disconnectWallet } = useAuth();
  const { t } = useTranslations();

  if (isLoading) {
    return (
      <Button className={className} disabled>
        Loading...
      </Button>
    );
  }

  if (!isAuthenticated) {
    return (
      <Button className={className} onClick={() => login()}>
        {t('common.buttons.signInConnect')}
      </Button>
    );
  }

  if (!isWalletConnected) {
    return (
      <Button className={className} onClick={() => connectWallet()}>
        {t('common.buttons.connectWallet')}
      </Button>
    );
  }

  return (
    <Button className={className} onClick={() => logout()}>
      Disconnect
    </Button>
  );
}
