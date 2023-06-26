import React from 'react'
import Github from '@/components/shared/github'
import Link from 'next/link'

function Hero() {
  return (
    <div className="container sm:max-w-2xl mb-36 mt-12">
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
        <Link
          href="/blog"
          className="rounded-full border border-background bg-foreground px-4 sm:px-5 sm:py-2 text-sm text-background shadow-lg transition-all hover:bg-background hover:text-foreground"
        >
          Read my blog
        </Link>

        <button className="flex items-center justify-center space-x-1 sm:space-x-2 rounded-full border border-border bg-background px-5 py-2 shadow-lg transition-all hover:border-foreground">
          <Github className="w-5 h-5 text-foreground" />
          <span>View github</span>
        </button>
      </div>
    </div>
  )
}

export default Hero
