# Development

This page documents how you can test your changed to the web page locally so that you don't need to commit every time to try out whether your change is working.

## Building the documentation

You need to follow these steps once:
* Install [Node and NPM](https://nodejs.org/en/) (usually contained in one package and installed together)
* Checkout the repository locally
* Run `npm install` in the folder created by the checkout procedure (i.e. the folder that contains this file)

You can now run three different commands for testing purposes:
* `npm start` - spawns a local server for testing at `http://localhost:8080`
* `npm test` - checks links and some other things in Markdown, but unfortunately may not catch all issues.
* `npm run build` - builds the full page like the CI would do it, this is the final indicator whether deployment will work.

With a recent version of node (17.0.0 or higher), you might encounter an error along the lines of
`error:03000086:digital envelope routines::initialization error`.
A workaround (documented at [vuejs/vue-cli#6770](https://github.com/vuejs/vue-cli/issues/6770))
is to set `--openssl-legacy-provider` in  the `NODE_OPTIONS` environment variable, e.g.:

    # On Linux/Mac
    export NODE_OPTIONS=--openssl-legacy-provider
    # On Windows
    SET NODE_OPTIONS=--openssl-legacy-provider


## Writing and updating documentation

The documentation is built with [VuePress](https://vuepress.vuejs.org/), a static site generator.
The documentation source code is written in MarkDown format,
with a couple of [extensions provided by VuePress](https://vuepress.vuejs.org/guide/markdown.html).


## Tips
Some best practices that you should follow (still evolving):
* Links to internal pages and images:
  * Always link to the `.md` files instead of the generated `.html` pages
  * Never use absolute URLs to link to internal pages
  * **Example:** To link to JS getting started guide use a relative path such as `./getting-started/javascript/index.md` instead of `https://docs.openeo.cloud/getting-started/javascript/index.html`. This allows to also correctly use the page locally and link checking works more reliably.
