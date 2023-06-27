'use client'

import { cn } from '@/lib/utils'
import Play from '../shared/play'
import { Button } from './button'

type Props = {
  className?: string
}

export default function PlayButton({ className }: Props) {
  return (
    <Button
      className={cn(
        'rounded-full bg-foreground w-8 h-8 flex items-center justify-center',
        className
      )}
    >
      <Play />
    </Button>
  )
}
