'use client'

import React from 'react'
import { Speaker, SpeakerMuted } from './shared/speaker'
import { Slider } from './ui/slider'

export default function Volume() {
  return (
    <div className="">
      <button>
        <Speaker />
      </button>
    </div>
  )
}
