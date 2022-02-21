import { user } from '@typings/user'

/**
 * Represents a snip object on the site.
 *
 * @see https://snip.hxrsh.in/api-docs.md
 */
export type snip = {
  /**
   * The unique and autoincremental ID of the snip.
   */
  id: number
  /**
   * The unique slug of the snip.
   */
  slug: string
  /**
   * The content of the snip.
   */
  content: string
  /**
   * The optional, hashed password of this snip.
   */
  password?: string
  /**
   * The language of this snip.
   */
  language: string
  /**
   * The author of this snip.
   */
  author?: user
  /**
   * When this snip was created.
   */
  createdAt: Date
}
