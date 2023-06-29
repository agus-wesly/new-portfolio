'use client'

import React from 'react'
import usePlayer from './usePlayer'

export default function useActiveSong() {
  const { activeSongIndex, songs, setPlay } = usePlayer()

  const activeSong = songs[activeSongIndex!]

  function setActiveSong(idx: number) {
    setPlay(idx)
  }

  function setPrevActive() {
    if (activeSongIndex === 0) {
      setActiveSong(songs.length - 1)
    } else {
      setPlay(activeSongIndex! - 1)
    }
  }

  function setNextActive() {
    console.log('next')
    setPlay((activeSongIndex! + 1) % songs.length)
  }

  return { activeSong, setActiveSong, setPrevActive, setNextActive }
}
