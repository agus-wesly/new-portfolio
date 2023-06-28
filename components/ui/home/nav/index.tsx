'use client'

import React from 'react'
import Image from 'next/image'
import useScroll from '@/hooks/useScroll'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Logo from '@/components/shared/logo'

const navItems = ['home', 'player', 'blog']

function Nav() {
  const scrolled = useScroll(20)
  const active = false
  return (
    <nav
      className={cn('sticky inset-x-0 top-0 z-30 w-full transition-all py-2', {
        'border-b border-border bg-background/75 backdrop-blur-lg': scrolled,
      })}
    >
      <div className="container flex justify-between py-1">
        <Link href={'/'}>
          <Logo />
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item, i) => (
            <Link
              key={item}
              href={i === 0 ? '/' : `/${item}`}
              className={`text-sm font-bold capitalize ${
                active ? 'text-black' : ''
              } transition-colors ease-out hover:text-foreground bg-background/80 rounded-full px-6 py-2 hover:scale-105`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
