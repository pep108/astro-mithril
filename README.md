# @astrojs/mithril ⚛️

This **[Astro integration][astro-integration]** enables server-side rendering and client-side hydration for your [Mithril](https://mithril.js.org/) components.

## Why Mithril?

Mithril is an extremely lightweight and flexible client-side JavaScript framework. It's small (<10 kb gzip) but powerful and fun to work with. The Astro starter project with a simple Mithril button & counter loaded a total of 37.8 kB. The idential Astro starter project with the same button & countered rendered by React loaded 150 kB.

## Installation

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

To use your first Mithril component in Astro, head to our [UI framework documentation][astro-ui-frameworks]. You'll explore:
- 📦 how framework components are loaded,
- 💧 client-side hydration options, and
- 🤝 opportunities to mix and nest frameworks together

## Troubleshooting

For help, check out the `#support` channel on [Discord](https://astro.build/chat). Our friendly Support Squad members are here to help!

You can also check our [Astro Integration Documentation][astro-integration] for more on integrations.

## Contributing

This package is maintained by pep108. You're welcome to submit an issue or PR!
