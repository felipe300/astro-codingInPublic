export function sluglify (text: string) {
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