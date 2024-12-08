'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  isWalletConnected: boolean;
  address: string | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    checkWalletConnection();
    checkAuthStatus();
  }, []);

  const checkWalletConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setIsWalletConnected(true);
          setAddress(accounts[0].address);
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
      }
    }
    setIsLoading(false);
  };

  const checkAuthStatus = () => {
    const token = localStorage.getItem('auth_token');
    setIsAuthenticated(!!token);
    setIsLoading(false);
  };

  const login = async () => {
    setIsLoading(true);
    try {
      // Implement your login logic here
      const token = 'dummy_token'; // Replace with actual token
      localStorage.setItem('auth_token', token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      localStorage.removeItem('auth_token');
      setIsAuthenticated(false);
      await disconnectWallet();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        if (accounts.length > 0) {
          setIsWalletConnected(true);
          setAddress(accounts[0]);
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      console.error('Metamask is not installed');
    }
  };

  const disconnectWallet = async () => {
    setIsWalletConnected(false);
    setAddress(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        isWalletConnected,
        address,
        login,
        logout,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
