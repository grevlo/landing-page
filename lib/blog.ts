import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  keywords: string[]
  readingTime: string
  content: string
}

export function getAllPosts(): Omit<BlogPost, 'content'>[] {
  const fileNames = fs.readdirSync(blogsDirectory)
  return fileNames
    .filter(f => f.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(blogsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const wordCount = content.split(/\s+/).length
      const readingTime = `${Math.ceil(wordCount / 200)} min read`
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author || 'Dom Howarth',
        keywords: data.keywords || [],
        readingTime,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const wordCount = content.split(/\s+/).length
    const readingTime = `${Math.ceil(wordCount / 200)} min read`
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author || 'Dom Howarth',
      keywords: data.keywords || [],
      readingTime,
      content,
    }
  } catch {
    return null
  }
}
