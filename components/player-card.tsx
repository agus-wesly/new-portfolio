'use client'

import Image from 'next/image'
import React from 'react'
import Elipsis from './shared/elipsis'

export default function PlayerCard() {
  return (
    <div className="flex items-center justify-between p-2 lg:px-4 hover:bg-muted cursor-pointer">
      <div className="flex items-center gap-4 flex-[2]">
        1.
        <div className="relative w-14 h-14 md:w-11 md:h-11">
          <Image
            src={'/song/song-1.jpeg'}
            alt="song-1"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold hover:underline">Ready to be</h3>
          <p className="text-muted-foreground text-sm hover:underline">Twice</p>
        </div>
      </div>
      <p className="hidden md:flex flex-[1] text-center text-sm font-semibold text-muted-foreground">
        5 days ago
      </p>
      <div className="text-sm font-semibold text-muted-foreground hidden md:flex items-end">
        03:28
      </div>
      <button className="block md:hidden">
        <Elipsis />
      </button>
    </div>
  )
}
