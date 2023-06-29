import NavMobile from '@/components/ui/home/nav-mobile'
import Nav from '@/components/ui/home/nav'
import Footer from '@/components/ui/home/footer'
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
      <Footer />
    </main>
  )
}
