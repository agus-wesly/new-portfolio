import React from 'react'
import { allBlogs } from '@/.contentlayer/generated'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDX } from '@/components/mdx-component'
import { cn, formatDate } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import ArrowLeft from '@/components/shared/arrow-left'
import { getTableOfContents } from '@/lib/toc'
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join('/')
  const post = allBlogs.find((blog) => blog.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string[]
  }
}): Promise<Metadata> {
  const blog = await getPostFromParams(params)
  if (!blog) return {}
  return {
    title: blog.title,
    description: blog.description,
  }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split('/'),
  }))
}

export default async function BlogDetailPage({ params }: Props) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }
  const toc = await getTableOfContents(post.body.raw)

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-[-200px] top-14 hidden xl:inline-flex'
        )}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        See all blog
      </Link>
      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-display text-4xl leading-tight lg:text-5xl font-extrabold">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <MDX code={post.body.code} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: 'ghost' }))}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          See all blog
        </Link>
      </div>
    </article>
  )
}
