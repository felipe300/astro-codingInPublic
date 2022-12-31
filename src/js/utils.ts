import type { MarkdownInstance } from "astro"
import type { Frontmatter } from "src/types/types"

export function slugify (text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export function formatDate (date: string) {
  // toLocaleDateString(Language-Code)
  return new Date(date).toLocaleDateString('es-cl', {
    timeZone: "UTC"
  })
}

export function formatBlogPosts (posts: MarkdownInstance<Frontmatter>[], {
  filterOutDrafts = true,
  filterOutFuturePosts = true,
  sortByDate = true,
  limit = undefined as unknown as number
} = {}) {
  const filteredPosts = posts.reduce((acc: MarkdownInstance<Frontmatter>[], post) => {
    const { date, draft } = post.frontmatter
    if (filterOutDrafts && draft) return acc

    if (filterOutFuturePosts && new Date(date) > new Date()) return acc

    acc.push(post)
    return acc
  }, [])

  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf())
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }

  if (typeof limit === 'number') {
    return filteredPosts.slice(0, limit)
  }

  return filteredPosts
}