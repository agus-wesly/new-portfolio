import React from 'react'
import Next from '@/components/shared/next'
import ReactIcon from '@/components/shared/react'
import Remix from '@/components/shared/remix'
import Tailwind from '@/components/shared/tailwind'
import Vue from '@/components/shared/vue'
import Nuxt from '@/components/shared/nuxt'

const SKILL_LIST = [
  {
    icon: ReactIcon,
    title: 'React.js',
    info: 'Experienced in building responsive web interfaces with React.',
  },
  {
    icon: Next,
    title: 'Next.js 13',
    info: "Proficient in building modern web using Next.js's app directory feature.",
  },
  {
    icon: Remix,
    title: 'Remix.run',
    info: 'Already familiar with remix including the concept of loader and action',
  },
  {
    icon: Tailwind,
    title: 'Tailwind.css',
    info: 'Using Tailwind.css, leveraging its utility-first approach to build modern web app .',
  },
  {
    icon: Vue,
    title: 'Vue.js',
    info: 'Experienced in building responsive web interfaces with Vue.js.',
  },
  {
    icon: Nuxt,
    title: 'Nuxt.js',
    info: 'Skilled in developing server-side rendered and static websites using Nuxt.js.',
  },
]

function Skill() {
  return (
    <div className="border-y border-border bg-background/10 py-8 backdrop-blur text-center shadow-[inset_10px_-50px_94px_0_foreground]">
      <h1 className="font-display text-4xl font-extrabold leading-[1.15] text-foreground sm:text-6xl sm:leading-[1.15]">
        Skill
      </h1>

      <p className="mt-3 text-foreground font-display sm:text-xl">
        List of the technologies that I've use
      </p>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 container md:grid-cols-3 mt-5">
        {SKILL_LIST.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div className="flex h-[160px] flex-col justify-between rounded-md p-6">
              <item.icon />
              <div className="space-y-2 text-left">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill
