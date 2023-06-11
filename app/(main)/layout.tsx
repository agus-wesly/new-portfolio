import React from 'react'
import Background from '@/components/ui/home/background'
import Nav from '@/components/ui/home/nav'
import NavMobile from '@/components/ui/home/nav-mobile'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <NavMobile />
      {children}
      <Background />
    </div>
  )
}

export default MainLayout
