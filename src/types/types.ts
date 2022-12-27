export type Frontmatter = {
  title: string
  date: string
  author: string
  image: {
    src: string
    alt: string
  }
  description: string
  draft?: boolean
  category: string
}