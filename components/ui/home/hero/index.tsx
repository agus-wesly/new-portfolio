import React from 'react'
import Github from '@/components/shared/github'

function Hero() {
  return (
    <div className="container sm:max-w-2xl mb-10 mt-12">
      <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-foreground sm:text-6xl sm:leading-[1.15]">
        Hi, I'm Wesly
        <br />
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Front end developer
        </span>
      </h1>

      <p className="text-foreground font-display mt-5 sm:text-xl">
        I'm interested with the modern web development. I build app using on
        demand technologies such as React.js, Next.js and Tailwind.css. Feel
        free to contact me :)
      </p>

      <div className="flex justify-center gap-5 mt-10">
        <button className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black">
          Download CV
        </button>

        <button className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800">
          <Github className="w-5 h-5 text-foreground" />
          <span>View my github</span>
        </button>
      </div>
    </div>
  )
}

export default Hero
