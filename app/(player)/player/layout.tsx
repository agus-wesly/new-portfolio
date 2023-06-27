import NavMobile from '@/components/ui/home/nav-mobile'
import Nav from '@/components/ui/home/nav'
import React from 'react'
export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="font-display">
      <Nav />
      <NavMobile />
      {children}
    </main>
  )
}
