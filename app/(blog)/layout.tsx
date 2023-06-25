import React from 'react'
import Nav from '@/components/ui/home/nav'
import NavMobile from '@/components/ui/home/nav-mobile'
import Footer from '@/components/ui/home/footer'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-default">
      <Nav />
      <NavMobile />
      {children}
      <Footer />
    </div>
  )
}
