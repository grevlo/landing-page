import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import type { Plugin } from 'unified'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Grevlo`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://grevlo.com/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'Grevlo Ltd',
      url: 'https://grevlo.com',
    },
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/blog" className="text-sm text-gray-500 hover:text-[#1E3A8A] mb-8 block transition-colors">
        ← Back to blog
      </Link>
      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-[#1E3A8A] mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex gap-4 text-sm text-gray-400 mb-6">
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
            <span>{post.author}</span>
          </div>
          <p className="text-lg text-gray-600 border-l-4 border-[#1E3A8A] pl-4">
            {post.description}
          </p>
        </header>
        <div className="prose prose-lg max-w-none prose-headings:text-[#1E3A8A] prose-a:text-[#1E3A8A]">
          <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm as unknown as Plugin] } }} />
        </div>
      </article>
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-600 mb-4">
          Written by Dom Howarth, founder of Grevlo Ltd. Building automated
          reporting tools for UK web agencies.
        </p>
        <Link
          href="https://www.grevlo.com/#founding-partner"
          className="inline-block bg-[#A3E635] text-[#1E3A8A] font-bold px-6 py-3 rounded-lg hover:bg-[#92d120] transition-colors"
        >
          Apply for Founding Partner Access →
        </Link>
      </footer>
    </main>
  )
}
