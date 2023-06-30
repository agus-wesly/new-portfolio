'use client'

import { cn } from '@/lib/utils'
import Play from '../shared/play'
import { Button } from './button'
import React from 'react'

type Props = {
  className?: string
  onClick: () => void
  children: React.ReactNode
}

export default function PlayButton({ className, onClick, children }: Props) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        'rounded-full bg-foreground w-8 h-8 flex items-center justify-center',
        className
      )}
    >
      {children}
    </Button>
  )
}
