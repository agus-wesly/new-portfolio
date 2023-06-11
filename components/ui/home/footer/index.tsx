import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-lg border-border">
      <div className="py-8 container">
        <p className="text-sm leading-5 text-gray-500">
          © {new Date().getFullYear()} Agus Wesly
        </p>
      </div>
    </footer>
  )
}

export default Footer
