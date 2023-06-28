import { create } from 'zustand'

type Song = {
  name: string
  url: string
  duration: number
}

interface PlayerState {
  songs: Song[]
  activeSongIndex: number
  isPlaying: boolean
  setPlay: (idx: number) => void
}

const usePlayer = create<PlayerState>()((set) => ({
  songs: [],
  activeSongIndex: 0,
  isPlaying: false,
  setPlay: (id) => set(() => ({ activeSongIndex: id })),
}))
