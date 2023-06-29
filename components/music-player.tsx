'use client'

import React from 'react'
import { Speaker, SpeakerMuted } from './shared/speaker'
import { Forward, Backward } from './shared/control'
import Play from './shared/play'
import Pause from './shared/pause'
import Image from 'next/image'
import Volume from './volume'
import Loading from './shared/loading'
import { Slider } from './ui/slider'
import usePlayer from '@/hooks/usePlayer'
import useSound from 'use-sound'
import useActiveSong from '@/hooks/useActiveSong'

function Player() {
  const [volume, setVolume] = React.useState(0.6)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const { activeSong, setNextActive, setPrevActive } = useActiveSong()

  const [play, { pause, sound }] = useSound(activeSong.songUrl, {
    onplay: () => {
      setIsLoading(false)
      setIsPlaying(true)
    },
    volume,
    onend: () => {
      setIsPlaying(false)
    },
    onpause: () => setIsPlaying(false),
    format: ['mp3'],
  })

  React.useEffect(() => {
    sound?.play()
    if (isPlaying) {
    }

    return () => {
      sound?.unload()
    }
  }, [sound])

  function handlePlayPause() {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }
  return (
    <div className="fixed bottom-0 h-16 left-0 w-full bg-slate-900 flex justify-between items-center font-display md:px-6 z-5">
      {isLoading ? (
        <div className="absolute inset-0 w-full h-full bg-black/80 z-[99] flex items-center justify-center">
          <Loading className="animate-spin" />
        </div>
      ) : null}
      <div className="flex gap-4 items-center h-full">
        <div className="relative flex-none aspect-square h-full ">
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
        <button onClick={() => setPrevActive()}>
          <Backward />
        </button>

        <button onClick={() => handlePlayPause()}>
          {isPlaying ? <Pause /> : <Play />}
        </button>

        <button onClick={() => setNextActive()}>
          <Forward />
        </button>
      </div>

      <div className="flex gap-4 mr-4 items-center">
        <Volume />
        <div className="w-20 h-3">
          <Slider
            defaultValue={[volume * 100]}
            max={100}
            step={1}
            onValueChange={(e) => {
              setVolume(e[0] / 100)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function MusicPlayer() {
  const { activeSongIndex } = usePlayer()
  if (activeSongIndex === undefined) {
    return null
  }
  console.log(activeSongIndex)

  return <Player key={activeSongIndex} />
}
