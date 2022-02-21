import { client } from '../client'
import { snip } from '../types/snip'

/**
 * Represents the collection of fields that can be passed when creating a new snip.
 * @see https://snip.hxrsh.in/api-docs.md
 */
type SnipCreateFields = Partial<
  Pick<snip, 'slug' | 'content' | 'password' | 'language' | 'author'>
>

/**
 * Represents the collection of fields that can be modified when editing an existing snip.
 * @see https://snip.hxrsh.in/api-docs.md
 */
type SnipEditFields = Partial<Pick<snip, 'slug' | 'content' | 'password'>>

/**
 * Represents an endpoint for managing pastes.
 *
 * @see https://snip.hxrsh.in/api-docs.md
 */
export class Snip {
  /**
   * Fetches a snip by its ID.
   *
   * @remarks
   * You cannot fetch snips a password
   *
   * @see https://snip.hxrsh.in/api-docs.md
   *
   * @param id The ID of the snip to fetch.
   * @returns The fetched snip or undefined if no snip was found.
   */
  async getSnip(id: string): Promise<snip | undefined> {
    return client.get<snip>(`/snip/${id}`)
  }

  /**
   * Creates a new snip using the specified fields.
   *
   * @remarks
   * Note that if you want the snip to be tied to your account, or want it
   * to be private, or want to use tags you need to authorize the request
   * using your personal API token.
   *
   * @see https://snip.hxrsh.in/api-docs.md
   *
   * @param data The data to use to create the snip.
   * @returns The created snip or undefined if something went wrong.
   */
  async createSnip(data: SnipCreateFields): Promise<snip | undefined> {
    return client.post<snip>('/snip/new', data)
  }

  /**
   * Applies a set of changes to an existing snip.
   *
   * @remarks
   * Note that you can only edit snip tied to your own account. To ensure this,
   * you need to authorize the request using your personal API token.
   *
   * @see https://snip.hxrsh.in/api-docs.md
   *
   * @param id The ID of the snip to edit.
   * @param data The data to modify in the snip.
   * @returns The modified snip or undefined if the paste was not found or something went wrong.
   */
  async editSnip(id: string, data: SnipEditFields): Promise<snip | undefined> {
    return client.patch<snip>(`/snip/${id}/edit`, data)
  }

  /**
   * Deletes the paste with the specified ID.
   *
   * @remarks
   * Note that you can only delete snips tied to your account. To ensure this,
   * you need to authorize the request using your personal API token. Additionally,
   * note that this action is irreversible.
   *
   * @param id The ID of the snip to delete.
   * @returns Whether or not the snip was successfully deleted.
   */
  async deleteSnip(id: string): Promise<boolean> {
    return client.del(`/snip${id}/delete`)
  }
}
