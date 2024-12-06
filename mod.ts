type SlugOptions = {
  separator?: string
  uppercase?: boolean
}

export function sluggo(string: string, options?: SlugOptions): string {
  const separator = options?.separator || '-'
  const uppercase = options?.uppercase || false

  if (uppercase) {
    return string.toUpperCase().replace(/\s/g, separator)
  }

  return string.toLowerCase().replace(/\s/g, separator)
}
