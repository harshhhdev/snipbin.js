import { snip } from '@typings/snip'

/**
 * Represents a snip object on the site.
 *
 * @remarks
 * There is no way to get the different
 * users registered on SnipBin, this type
 * is only used as a reference for the
 * snip type.
 *
 * @see https://snip.hxrsh.in/api-docs.md
 */
export type user = {
  /**
   * The unique and autoincremental ID of the user.
   */
  id: number
  /**
   * The unique email of the user.
   */
  email: string
  /**
   * The name of the user.
   */
  name: string
  /**
   * The unique autogenerated API key assigned to the user.
   */
  api: string
  /**
   * A collection of all snips linked to this user's account.
   */
  snips: snip[]
  /**
   * When this user was created.
   */
  createdAt: Date
}