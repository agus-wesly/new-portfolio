'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown'
import Moon from './shared/moon'
import Sun from './shared/sun.'
import { useTheme } from 'next-themes'

import { useState, useEffect } from 'react'

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  console.log({ theme })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {theme === 'dark' ? <Moon /> : <Sun />}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <span>
            <Sun className="w-5 h-5 mr-5" />
          </span>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <span>
            <Moon className="w-5 h-5 mr-5" />
          </span>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
