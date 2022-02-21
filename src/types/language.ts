/**
 * The JSON response of a language being
 * detected on the site.
 *
 * @remarks
 * This is simply a wrapper around another
 * API wrapper, known as LangMyst, which
 * uses a library called go-enry to detect
 * the language of a snippet. A faster
 * way would be directly interacting with
 * the LangMyst API.
 *
 * @see https://snip.hxrsh.in/api-docs.md
 * @see https://lang.myst.rs
 * @see https://github.com/go-enry/go-enry
 */
export type language = {
  /**
   * The detected language of the snippet
   */
  data: string
}
