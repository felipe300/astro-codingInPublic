import type { CollectionEntry } from "astro:content"

export function slugify (text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}

export function formatDate (date: string) {
  // toLocaleDateString(Language-Code)
  return new Date(date).toLocaleDateString("es-cl", {
    timeZone: "UTC",
  })
}

export function formatBlogPosts (
  posts: CollectionEntry<"blog">[],
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined as unknown as number,
  } = {}
) {
  const filteredPosts = posts.reduce((acc: unknown[], post) => {
    const { date, draft } = post.data
    if (filterOutDrafts && draft) return acc

    if (filterOutFuturePosts && new Date(date) > new Date()) return acc

    acc.push(post)
    return acc
  }, []) as unknown as CollectionEntry<"blog">[]

  if (sortByDate) {
    filteredPosts.sort(
      (a, b) =>
        new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
    )
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }

  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit)
  }

  return filteredPosts
}
