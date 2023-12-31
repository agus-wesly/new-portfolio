'use client'

import Image from 'next/image'
import React from 'react'
import Play from './shared/play'
import type { Song } from '@/data'
import { cn } from '@/lib/utils'
import Pause from './shared/pause'

type Props = Song & {
  isActive?: boolean
  idx: number
  onClick: () => void
}

export default function PlayerCard({
  imageUrl,
  title,
  artist,
  isActive,
  idx,
  duration,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center justify-between p-2 lg:px-4 hover:bg-muted/80 cursor-pointer',
        {
          'bg-muted': isActive,
        }
      )}
    >
      <div
        className={`flex items-center gap-4 flex-[2] font-medium ${
          isActive ? 'text-green-600' : ''
        }`}
      >
        <span className="w-[2ch]">{idx}.</span>
        <div className="relative w-14 h-14 md:w-11 md:h-11">
          <Image src={imageUrl} alt="song-1" fill className="object-cover" />
        </div>
        <div>
          <h3
            className={cn('text-lg font-bold hover:underline', {
              'text-green-600': isActive,
            })}
          >
            {title}
          </h3>
          <p className="text-muted-foreground text-sm hover:underline">
            {artist}
          </p>
        </div>
      </div>
      <p className="hidden md:flex flex-[1] text-center text-sm font-semibold text-muted-foreground">
        5 days ago
      </p>
      <div className="text-sm font-semibold text-muted-foreground hidden md:flex items-end">
        {duration}
      </div>
      <button className="block md:hidden">
        {isActive ? <Pause /> : <Play />}
      </button>
    </div>
  )
}
