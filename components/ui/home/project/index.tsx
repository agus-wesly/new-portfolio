import React from 'react'
import Image from 'next/image'

function Project() {
  return (
    <div className="mx-auto text-center w-full mb-10 mt-12 container">
      <h1 className="font-display text-4xl font-extrabold leading-[1.15] text-foreground sm:text-6xl sm:leading-[1.15]">
        Project
      </h1>

      <p className="mt-3 text-foreground font-display sm:text-xl">
        What i build
      </p>

      <div className="mt-10">
        <div className="mx-auto grid sm:justify-between gap-6 sm:grid-cols-2 md:grid-cols-3">
          <a
            target="_blank"
            href="https://movieflix-web.vercel.app/"
            className="space-y-2 text-left w-full  inline-block"
          >
            <div className="relative w-full h-[236px]">
              <Image
                src={'/movieflix2.png'}
                fill
                className="object-left inset-0 object-cover w-full rounded-xl"
                alt="movieflix"
              />
            </div>

            <h3 className="text-lg font-bold">Movieflix</h3>

            <p className="text-foreground/80 text-sm">
              Movie web built using next 13 app directory
            </p>
          </a>
          <a
            href="https://ch-store-tawny.vercel.app/"
            target="_blank"
            className="space-y-2 text-left"
          >
            <div className="relative w-full h-[236px]">
              <Image
                src={'/ch-store.png'}
                fill
                className="inset-0 object-cover rounded-xl"
                alt="project"
              />
            </div>

            <h3 className="text-lg font-bold">Ch-store</h3>

            <p className="text-foreground/80 text-sm">
              Ecommerce app built using next.js app directory
            </p>
          </a>
          <a
            target="_blank"
            href="https://twitter-clone-isaac.vercel.app/"
            className="space-y-2 text-left"
          >
            <div className="relative w-full h-[236px]">
              <Image
                src={'/nuxt-project.png'}
                fill
                className="object-left inset-0 object-cover rounded-xl"
                alt="project"
              />
            </div>

            <h3 className="text-lg font-bold">Twitter clone app</h3>

            <p className="text-foreground/80 text-sm">
              A twitter website clone built using nuxt 3 + Prisma
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
