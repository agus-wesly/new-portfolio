import PlayerCard from './player-card'
import PlayButton from './ui/play-button'

export default function PlayerList() {
  return (
    <div className="w-full">
      <PlayButton className="bg-[#1fdf64] w-11 h-11 ml-auto hover:bg-[#1fdf64] hover:scale-105 transition" />

      <div className="flex flex-col gap-3 mt-3">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
    </div>
  )
}
