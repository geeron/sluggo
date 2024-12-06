/**
 * Options for customizing the behavior of the `sluggo` function.
 */
export type SlugOptions = {
  /**
   * The character to use as a separator between words. Defaults to '-'.
   */
  separator?: string

  /**
   * Whether to convert the slug to uppercase. Defaults to false.
   */
  uppercase?: boolean
}

/**
 * Converts a given string into a slug, which is a URL-friendly version of the string.
 *
 * @param {string} string - The input string to convert into a slug.
 * @param {Object} [options] - Optional settings to customize the slug conversion.
 * @param {string} [options.separator='-'] - The character to use as a separator between words. Defaults to '-'.
 * @param {boolean} [options.uppercase=false] - Whether to convert the slug to uppercase. Defaults to false.
 * @returns {string} The converted slug.
 *
 * @example
 * // Basic usage
 * console.log(sluggo('Hello World')) // 'hello-world'
 *
 * @example
 * // Custom separator
 * console.log(sluggo('Hello World', { separator: '_' })) // 'hello_world'
 *
 * @example
 * // Uppercase slug
 * console.log(sluggo('Hello World', { uppercase: true })) // 'HELLO-WORLD'
 */
export function sluggo(string: string, options?: SlugOptions): string {
  const separator = options?.separator || '-'
  const uppercase = options?.uppercase || false

  if (uppercase) {
    return string.toUpperCase().replace(/\s/g, separator)
  }

  return string.toLowerCase().replace(/\s/g, separator)
}
