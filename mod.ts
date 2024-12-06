export function sluggo(string: string): string {
  return string.toLowerCase().replace(/\s/g, '-')
}
