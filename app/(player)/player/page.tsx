import React from 'react'
import Image from 'next/image'
import PlayerList from '@/components/player-list'

export default function Player() {
  return (
    <div className="container mb-20 mt-10 md:mt-5">
      <div className="flex">
        <div className="relative w-60 h-60 mx-auto md:mx-0 shrink-0">
          <Image
            src={'/twc2.jpeg'}
            alt="twice-cover"
            fill
            className="inset-0 object-cover"
          />
        </div>

        <div className="ml-6 hidden md:flex flex-col justify-between">
          <h5 className="text-sm font-bold">Playlist</h5>
          <h1 className="text-5xl font-[900]">My Favorite Songs</h1>
          <p className="text-sm text-muted-foreground font-medium max-w-lg lg:text-base">
            List of my favorite songs. Including Twice, Avenged Sevenfold, and
            others. Hope you guys enjoy ^^
          </p>
          <p className="text-sm text-muted-foreground">
            Made by <span className="font-bold text-foreground">Isaac</span>
          </p>
        </div>
      </div>

      <div className="space-y-2 mt-2 block md:hidden">
        <h1 className="text-3xl font-extrabold">Top song</h1>{' '}
        <p className="text-sm text-muted-foreground font-medium">
          List of my favorite song. Including twice, avenged sevenfold and
          others. Hope you guys enjoy ^^
        </p>
        <p className="text-sm text-muted-foreground">
          Made by <span className="font-bold text-foreground">Isaac</span>
        </p>
      </div>

      <PlayerList />
      <div className="absolute top-0 bg-gradient-to-b from-[#1d7fa7] w-full h-72 left-0 z-[-1]" />
    </div>
  )
}
