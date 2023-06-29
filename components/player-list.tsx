'use client'

import usePlayer from '@/hooks/usePlayer'
import PlayerCard from './player-card'
import PlayButton from './ui/play-button'

export default function PlayerList() {
  const { setPlay, songs } = usePlayer()

  return (
    <div className="w-full">
      <PlayButton
        onClick={() => setPlay(0)}
        className="bg-[#1fdf64] w-11 h-11 ml-auto hover:bg-[#1fdf64] hover:scale-105 transition"
      />

      <div className="flex flex-col gap-4 mt-3 md:mt-6">
        <div className="hidden md:flex gap-4 border-b md:p-2 lg:px-4 text-sm text-muted-foreground font-semibold">
          <div className="">#</div>
          <div className="flex-[2]">Title</div>
          <div className="flex-[1.5] text-center mr-2 lg:mr-4">Date added</div>
          <div className="flex-[0.5] text-end">Time</div>
        </div>
        {songs.map((song, i) => (
          <PlayerCard {...song} isActive={i === 0} idx={i + 1} />
        ))}
      </div>
    </div>
  )
}
