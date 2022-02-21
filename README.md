# SnipBin.js

![npm](https://img.shields.io/npm/v/snipbin.js)
![NPM](https://img.shields.io/npm/l/snipbin.js)
![npm](https://img.shields.io/npm/dt/snipbin.js)

An API wrapper for [SnipBin](https://snip.hxrsh.in/), written in TypeScript.

[SnipBin](https://snip.hxrsh.in/) is also written by me -- be sure to check it out and leave a ⭐ if you enjoyed the concept!

# ⚡ Getting Started

## 💻 Installation

```zsh
# install snipbin.js@latest
yarn add snipbin.js

# or... 
# npm install snipbin.js
```

## ✏ Usage

### 🔒 Authorization

Set your SnipBin API key to use restricted features of this API.

Note: You don't have to be authenticated to use this library or SnipBin's API.

```ts
import { authorize } from 'snipbin.js'

authorize('myApiKey')
```

### 🔗 Fetching Snips

Note: You can't fetch encrypted snips.

```ts
import { snipbin } from 'snipbin.js'

snipbin.getSnip('abt')
```

### 🔗 Creating Snips

Note: In order to link a snip with your account, make sure to set authorize with your API key.

```ts
import { snipbin, authorize } from 'snipbin.js'

authorize('myApiKey')
snipbin.createSnip({
  slug: 'test-snip',
  content: "import { snipbin } from 'snipbin.js'",
  language: 'js',
  // password: 'secret'
})
```

### 🔗 Editing Snips

Note: Since you can only edit snips on your account, you must set authorize with your API key.

```ts
import { snipbin, authorize } from 'snipbin.js'

authorize('myApiKey')
snipbin.editSnip('test-snip', {
  slug: 'test-snip2',
  content: "we're editing this thing, whoa!",
  // password: 'secret'
})
```

### 🔗 Deleting Snips

Note: Since you can only delete snips on your account, you must set authorize with your API key. Also, it goes without saying that this action is irreversible. 

```ts
import { snipbin, authorize } from 'snipbin.js'

authorize('myApiKey')
snipbin.deleteSnip('test-snip')
```

### 💡 Detecting Language

Note: This is simply a wrapper around [LangMyst](https://lang.myst.rs), which uses [go-enry](https://github.com/go-enry/go-enry) to detect languages.

```ts
import { detect } from 'snipbin.js'

detect.detectLanguage({ snippet: "import { snipbin } from 'snipbin.js'" })
```

Aside from that, the codebase is also fully documented. If you prefer, you can go through the codebase to better find your way around this project with the different return types and functions.

Additionally, you can find the different endpoints and internals of this API over on [SnipBin's API documentation](https://snip.hxrsh.in/api-docs.md)

# 🔧 Tools Used

- [chai](https://www.npmjs.com/package/chai)
- [TypeScript](https://www.typescriptlang.org/)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [mocha](https://www.npmjs.com/package/mocha)
- [node-fetch](https://stitches.dev/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

# 🤞 Contributing

After setting up the project, and making changes:

```git
git add .
git commit -m "commit message"
git push YOUR_REPO_URL YOUR_BRANCH
```

# 💙 Credits

Since I haven't written a proper API wrapper before, a big round of thanks to [Ian Hornik](https://github.com/yiliansource) for writing [pastemyst.ts](https://github.com/yiliansource/pastemyst-ts) to help me get a breeze of this.
