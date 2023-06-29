import { create } from 'zustand'
import type { Song } from '@/data'
import { allSong } from '@/data'

interface PlayerState {
  songs: Song[]
  activeSongIndex?: number
  setPlay: (idx: number | undefined) => void
}

const usePlayer = create<PlayerState>()((set) => ({
  songs: allSong,
  activeSongIndex: undefined,
  setPlay: (id) => set(() => ({ activeSongIndex: id })),
}))

export default usePlayer
