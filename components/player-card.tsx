'use client'

import Image from 'next/image'
import React from 'react'
import Elipsis from './shared/elipsis'

export default function PlayerCard() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14">
          <Image
            src={'/song/song-1.jpeg'}
            alt="song-1"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold">Ready to be</h3>
          <p className="text-muted-foreground text-sm">Twice</p>
        </div>
      </div>

      <button>
        <Elipsis />
      </button>
    </div>
  )
}
