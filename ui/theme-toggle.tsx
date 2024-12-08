"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="w-10 h-10 p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
        <div className="w-full h-full bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-gray-200 to-white dark:from-gray-700 dark:to-gray-800 hover:from-gray-300 hover:to-gray-100 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Sun className="absolute h-5 w-5 text-yellow-500 transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 text-blue-500 transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
