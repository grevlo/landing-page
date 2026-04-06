import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Grevlo',
  description: 'Insights on automated client reporting, web agency operations and API-first development from the Grevlo team.',
  openGraph: {
    title: 'Blog — Grevlo',
    description: 'Insights on automated reporting for web agencies.',
    url: 'https://grevlo.com/blog',
  },
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-[#1E3A8A] mb-4">Blog</h1>
      <p className="text-gray-600 mb-12 text-lg">
        Thoughts on automated reporting, agency operations and building Grevlo.
      </p>
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold text-[#1E3A8A] hover:underline mb-2">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-3">{post.description}</p>
            <div className="flex gap-4 text-sm text-gray-400">
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
              <span>{post.author}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
