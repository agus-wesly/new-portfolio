'use client'

import usePlayer from '@/hooks/usePlayer'
import PlayerCard from './player-card'
import PlayButton from './ui/play-button'
import Play from './shared/play'
import Stop from './shared/stop'

export default function PlayerList() {
  const { setPlay, songs, activeSongIndex } = usePlayer()
  const isPlaying = activeSongIndex !== undefined

  function handleTogglePlay() {
    if (isPlaying) {
      setPlay(undefined)
    } else {
      setPlay(0)
    }
  }

  const activeTitle =
    activeSongIndex !== undefined ? songs[activeSongIndex].title : ''

  return (
    <div className="w-full">
      <PlayButton
        onClick={() => handleTogglePlay()}
        className="bg-[#1fdf64] w-11 h-11 ml-auto hover:bg-[#1fdf64] hover:scale-105 transition"
      >
        {isPlaying ? <Stop /> : <Play />}
      </PlayButton>

      <div className="flex flex-col gap-4 mt-3 md:mt-6">
        <div className="hidden md:flex gap-4 border-b md:p-2 lg:px-4 text-sm text-muted-foreground font-semibold">
          <div className="">#</div>
          <div className="flex-[2]">Title</div>
          <div className="flex-[1.5] text-center mr-2 lg:mr-4">Date added</div>
          <div className="flex-[0.5] text-end">Time</div>
        </div>
        {songs.map((song, i) => (
          <PlayerCard
            onClick={() => setPlay(i)}
            {...song}
            isActive={activeTitle === song.title}
            idx={i + 1}
          />
        ))}
      </div>
    </div>
  )
}
