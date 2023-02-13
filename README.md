# astro-mithril ⚛️

This **[Astro integration](https://docs.astro.build/en/guides/integrations-guide/)** enables server-side rendering and client-side hydration for your **[Mithril](https://mithril.js.org/)** components.

## Why Mithril?

Mithril is an extremely lightweight and flexible client-side JavaScript framework. It's small (<10 kb gzip) but powerful and fun to work with. The Astro starter project with a simple Mithril button & counter loaded a total of 37.8 kB. The idential Astro starter project with the same button & countered rendered by React loaded 150 kB.

## Installation

### Quick Install
  
The `astro add` command-line tool automates the installation for you. Run one of the following commands in a new terminal window. (If you aren't sure which package manager you're using, run the first command.) Then, follow the prompts, and type "y" in the terminal (meaning "yes") for each one.
  
```sh
# Using NPM
npx astro add astro-mithril
# Using Yarn
yarn astro add astro-mithril
# Using PNPM
pnpm astro add astro-mithril
```
  
If you run into any issues, [feel free to report them to us on GitHub](https://github.com/pep108/astro-mithril/issues) and try the manual installation steps below.

### Install dependencies manually

First, install the `astro-mithril` integration like so:

```sh
npm install astro-mithril
```

Most package managers will install associated peer dependencies as well. Still, if you see a "Cannot find package 'mithril'" (or similar) warning when you start up Astro, you'll need to install `mithril` and `mithril-node-render`:

```sh
npm install mithril mithril-node-render
```

Now, apply this integration to your `astro.config.*` file using the `integrations` property:

__`astro.config.mjs`__

```js ins={2} "mithril()"
import { defineConfig } from 'astro/config';
import mithril from 'astro-mithril';

export default defineConfig({
  // ...
  integrations: [mithril()],
});
```

## Getting started

To use your first Mithril component in Astro, head to the Astro [UI framework documentation](https://docs.astro.build/en/core-concepts/framework-components/). You'll explore:
- 📦 how framework components are loaded,
- 💧 client-side hydration options, and
- 🤝 opportunities to mix and nest frameworks together

## Example

Check out the example in the /example folder

## Troubleshooting

For help, check out the `#support` channel on [Discord](https://astro.build/chat).

You can also check our [Astro Integration Documentation](https://docs.astro.build/en/guides/integrations-guide/) for more on integrations.

## Contributing

This package is maintained by [pep108](https://github.com/pep108/). You're welcome to submit an issue or PR!
