import React from 'react'
import { allBlogs } from 'contentlayer/generated'
import compareDesc from 'date-fns/compareDesc'
import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/lib/utils'

export default function BlogPage({}: {}) {
  const blogs = allBlogs
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
  return (
    <div className="container max-w-5xl mx-auto py-10">
      <h1 className="text-5xl font-bold font-display mb-10">Blog Post</h1>
      <hr className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.length ? (
          blogs.map((blog) => (
            <article key={blog._id} className="relative space-y-2">
              <Image
                src={blog.image}
                alt={blog.title}
                width={804}
                height={452}
                className="rounded-md border bg-muted transition-colors"
              />
              <h1 className="text-2xl font-extrabold font-display">
                {blog.title}
              </h1>
              <p className="text-muted-foreground text-sm font-default">
                {blog.description}
              </p>
              <p className="font-default text-muted-foreground text-sm">
                {formatDate(blog.date)}
              </p>

              <Link href={blog.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))
        ) : (
          <p>No blog found</p>
        )}
      </div>
    </div>
  )
}
