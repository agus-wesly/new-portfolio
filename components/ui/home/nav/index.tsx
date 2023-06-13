'use client'

import React from 'react'
import Image from 'next/image'
import useScroll from '@/hooks/useScroll'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Logo from '@/components/shared/logo'

const navItems = ['home', 'blog', 'project']

function Nav() {
  const scrolled = useScroll(80)
  const active = false
  return (
    <nav
      className={cn('sticky inset-x-0 top-0 z-30 w-full transition-all', {
        'border-b border-border bg-background/75 backdrop-blur-lg': scrolled,
      })}
    >
      <div className="container flex justify-between py-1">
        <Link href={'/'}>
          <Logo />
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={'#'}
              className={`rounded-md text-sm font-medium capitalize ${
                active ? 'text-black' : 'text-muted-foreground'
              } transition-colors ease-out hover:text-foreground`}
            >
              {item}
            </Link>
          ))}
          <Link
            href={'#'}
            className="rounded-full border border-foreground bg-foreground px-4 py-1.5 text-sm text-background transition-all hover:bg-background hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
