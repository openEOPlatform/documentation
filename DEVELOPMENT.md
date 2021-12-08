# Development

This page documents how you can test your changed to the web page locally so that you don't need to commit every time to try out whether your change is working.

You need to follow these steps once:
* Install [Node and NPM](https://nodejs.org/en/) (usually contained in one package and installed together)
* Checkout the repository locally
* Run `npm install` in the folder created by the checkout procedure (i.e. the folder that contains this file)

You can now run three different commands for testing pruposes:
* `npm start` - spawns a local server for testing at `http://localhost:8080`
* `npm test` - checks links and some other things in Markdown, but unfortunately may not catch all issues.
* `npm run build` - builds the full page like the CI would do it, this is the final indicator whether deployment will work.

Some best pratices that you should follow (still evolving):
* Links to internal pages and images:
  * Always link to the `.md` files instead of the generated `.html` pages
  * Never use absolute URLs to link to internal pages
  * **Example:** To link to JS getting started guide use a relative path such as `./getting-started/javascript/index.md` instead of `https://docs.openeo.cloud/getting-started/javascript/index.html`. This allows to also correctly use the page locally and link checking works more reliably.
