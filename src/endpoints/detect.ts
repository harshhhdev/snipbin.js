import { client } from '../client'
import { language } from '../types/language'

/**
 * Represents an endpoint for detecting the language
 * of a code snippet.
 *
 * @see https://snip.hxrsh.in/api-docs.md
 */
export class Detect {
  /**
   * Detects the language of a snippet of code.
   *
   * @see https://snip.hxrsh.in/api-docs.md
   * @see https://lang.myst.rs
   * @see https://github.com/go-enry/go-enry
   *
   * @param data The required to detect the language of this snip.
   * @returns The language of the snip, or undefined if something went wrong.
   */
  async detectLanguage(data: {
    snippet: string
  }): Promise<language | undefined> {
    return client.post<language>(`/detect`, data)
  }
}
