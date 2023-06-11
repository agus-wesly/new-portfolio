'use client'

import React from 'react'
import Image from 'next/image'
import useScroll from '@/hooks/useScroll'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navItems = ['home', 'about', 'skill']

function Nav() {
  const scrolled = useScroll(80)
  const active = false
  return (
    <nav
      className={cn('sticky inset-x-0 top-0 z-30 w-full transition-all', {
        'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
      })}
    >
      <div className="container flex justify-between py-1">
        <Link href={'/'}>
          <Image width={48} height={48} src={'/_static/logo.svg'} alt="logo" />
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={'#'}
              className={`rounded-md text-sm font-medium capitalize ${
                active ? 'text-black' : 'text-muted-foreground'
              } transition-colors ease-out hover:text-black`}
            >
              {item}
            </Link>
          ))}
          <Link
            href={'#'}
            className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
