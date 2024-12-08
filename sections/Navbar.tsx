'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { VideoLogo } from '../ui/VideoLogo';
import { useTranslations } from '@/hooks/useTranslations';
import { CombinedAuthButton } from '../ui/CombinedAuthButton';

const navLinks = [
  { href: '/', label: 'common.navigation.home' },
  { href: '/marketplace', label: 'common.navigation.marketplace' },
  { href: '/leaderboard', label: 'common.navigation.leaderboard' },
  { href: '/profile', label: 'common.navigation.profile' },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslations();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <VideoLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(link.label)}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
            </button>

            {/* Auth Button */}
            <CombinedAuthButton />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden hover:bg-accent rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(link.label)}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
