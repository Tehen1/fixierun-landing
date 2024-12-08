import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAddress(address: string) {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function formatBalance(balance: string | number, decimals = 18) {
  if (!balance) return '0'
  const num = typeof balance === 'string' ? parseFloat(balance) : balance
  return (num / Math.pow(10, decimals)).toFixed(4)
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
