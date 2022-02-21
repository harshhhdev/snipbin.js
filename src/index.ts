import { client } from './client'

import { Snip } from './endpoints/snip'
export const snipbin = new Snip()

import { Detect } from './endpoints/detect'
export const detect = new Detect()

export * from './types/snip'
export * from './types/user'
export * from './types/language'

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
