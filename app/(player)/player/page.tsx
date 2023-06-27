import React from 'react'
import Image from 'next/image'
import PlayerList from '@/components/player-list'

export default function Player() {
  return (
    <div className="container sm:max-w-2xl mb-36 mt-12 ">
      <div className="absolute top-0 bg-gradient-to-b from-[#1d7fa7] w-full h-72 left-0" />
      <div className="relative w-60 h-60 mx-auto">
        <Image
          src={'/twc2.jpeg'}
          alt="twice-cover"
          fill
          className="inset-0 object-cover"
        />
      </div>

      <div className="space-y-2 mt-2">
        <h1 className="text-3xl font-extrabold">Top song</h1>{' '}
        <p className="text-sm text-muted-foreground">
          List of my favorite song. Including twice, avenged sevenfold and
          others. Hope you guys enjoy ^^
        </p>
        <p className="text-sm text-muted-foreground">
          Made by <span className="font-bold text-foreground">Isaac</span>
        </p>
      </div>

      <PlayerList />
    </div>
  )
}
