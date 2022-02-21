import chalk from 'chalk'
import { assert } from 'chai'

import { snipbin } from './snipbin'

import { snip } from '../src/types/snip'

describe('Snip', () => {
  const createdSnips: Array<snip> = []

  after(async () => {
    if (createdSnips.length > 0) {
      console.log(chalk.gray('\n==== Paste Cleanup ===='))

      for (const snip of createdSnips) {
        const format = chalk`{cyan ${snip.slug}} (${snip.id})`
        console.log(chalk`{gray Cleaning up paste ${format}}.`)

        await snipbin.deleteSnip(snip.slug)
      }

      console.log(chalk.gray('=======================\n'))
    }
  })

  it('retrieves snips', async () => {
    const snip = await snipbin.getSnip('abt')

    assert.isDefined(snip)
    assert.strictEqual(snip?.id, 4)
  })

  it('creates snips', async () => {
    const snip = await snipbin.createSnip({
      slug: 'sbak',
      content: "console.log('Testing out this API wrapper...')",
      language: 'js',
    })

    assert.isDefined(snip)

    if (snip) {
      assert.strictEqual(snip.slug, 'sbak')
      createdSnips.push(snip)
    }
  })

  it('edits pastes', async () => {
    const snip = await snipbin.createSnip({
      slug: 'gpiz',
      content: "console.log('Testing out this API wrapper...')",
      language: 'js',
    })

    assert.isDefined(snip)

    if (snip) {
      const editedSnip = await snipbin.editSnip(snip.slug, {
        content: "console.log('This paste has been edited!')",
      })

      assert.isDefined(editedSnip)

      if (editedSnip) {
        assert.strictEqual(
          editedSnip.content,
          "console.log('This paste has been edited!')"
        )

        createdSnips.push(editedSnip)
      }
    }
  })

  it('deletes snips', async () => {
    const snip = await snipbin.createSnip({
      slug: 'vyjk',
      content: "console.log('Testing out this API wrapper...')",
      language: 'js',
    })

    assert.isDefined(snip)

    if (snip) {
      await snipbin.deleteSnip(snip.slug)
      const deletedSnip = await snipbin.getSnip(snip.slug)

      assert.isUndefined(deletedSnip)
    }
  })
})
