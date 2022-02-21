import { client } from '@src/client'

import { Snip } from '@endpoints/snip'
export const snipbin = new Snip()

import { Detect } from '@endpoints/detect'
export const detect = new Detect()

export * from '@typings/snip'
export * from '@typings/user'

/**
 * Provides an API token to the library, used
 * to authorize private requests.
 *
 * @param token The token to authorize with.
 *
 * @see https://snip.hxrsh.in/api-docs.md
 */
export const authorize = (token: string): void => {
  client.token = token
}
