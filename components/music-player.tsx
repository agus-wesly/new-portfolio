'use client'

import React from 'react'
import { Speaker, SpeakerMuted } from './shared/speaker'
import { Forward, Backward } from './shared/control'
import Play from './shared/play'
import Image from 'next/image'
import Volume from './volume'
import { Slider } from './ui/slider'

export default function MusicPlayer() {
  return (
    <div className="fixed bottom-0 h-16 left-0 w-full bg-slate-900 flex justify-between items-center font-display md:px-6">
      <div className="flex gap-4 items-center h-full">
        <div className="relative flex-none aspect-square h-full">
          <Image
            src={'/song/song-1.jpeg'}
            alt="song-1"
            fill
            className="object-cover inset-0"
          />
        </div>

        <div>
          <p className="text-sm font-semibold">Ready to be</p>
          <p className="text-xs text-muted-foreground">Twice</p>
        </div>
      </div>

      <div className="flex gap-4 mr-4 items-start">
        <button>
          <Backward />
        </button>

        <button>
          <Play />
        </button>

        <button>
          <Forward />
        </button>
      </div>

      <div className="flex gap-4 mr-4 items-center">
        <Volume />
        <div className="w-20 h-3">
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </div>
    </div>
  )
}
