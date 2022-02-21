import { assert } from 'chai'

import { detect } from './snipbin'

describe('Snip', () => {
  it('detects languages', async () => {
    const test: { snippet: string } = {
      snippet: "console.log('This is a sample paste');",
    }

    const language = detect.detectLanguage(test)
    assert.isDefined(language)
  })
})
