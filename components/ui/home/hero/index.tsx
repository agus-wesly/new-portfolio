import Link from 'next/link'
import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('./modal'), {
  loading: () => (
    <button className="animate-pulse rounded-full bg-muted border-2 w-[128px] h-[38px]" />
  ),
  ssr: false,
})

function Hero() {
  return (
    <div className="container sm:max-w-2xl mb-36 mt-12">
      <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-foreground sm:text-6xl sm:leading-[1.15]">
        Hi, I'm Wesly
        <br />
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Front-end Developer
        </span>
      </h1>

      <p className="text-foreground font-display mt-5 sm:text-base lg:text-xl font-medium">
        I'm interested in modern web development. I build app using on-demand
        technologies such as React, Next.js, and Tailwind CSS. Feel
        free to contact me :)
      </p>

      <div className="flex justify-center gap-5 mt-10">
        <Link
          href="/blog"
          className="rounded-full flex items-center justify-center border border-background bg-foreground px-4 sm:px-5 sm:py-2 text-sm text-background shadow-lg transition-all hover:bg-background hover:text-foreground"
        >
          Read my blog
        </Link>

        <Modal />
      </div>
    </div>
  )
}

export default Hero
