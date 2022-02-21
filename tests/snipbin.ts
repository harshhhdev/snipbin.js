import 'dotenv/config'
import chalk from 'chalk'

import * as pastemyst from '../src'

const apiToken = process.env.API_TOKEN
apiToken
  ? pastemyst.authorize(apiToken)
  : console.warn(
      chalk.yellow(
        'No API token was supplied in the environment variables. ' +
          'Unit tests that require authorization may not pass.'
      )
    )

export * from '../src'
