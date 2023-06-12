import Image from 'next/image'
import React from 'react'
import ToggleTheme from '@/components/toggle-theme'

function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-lg border-border font-display">
      <div className="py-4 container flex flex-col items-center gap-4 md:flex-row justify-between">
        <p className="text-sm leading-5 text-gray-500">
          © {new Date().getFullYear()} Agus Wesly
        </p>

        <ToggleTheme />
      </div>
    </footer>
  )
}

export default Footer
