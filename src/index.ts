import { type AstroIntegration } from 'astro';

function getRenderer() {
	return {
		name: 'astro-mithril',
		clientEntrypoint: 'astro-mithril/client.js',
		serverEntrypoint: 'astro-mithril/server.js',
	};
}

function getViteConfiguration() {
	return {
		resolve: {
			dedupe: ['mithril'],
		}
	};
}

export default function (): AstroIntegration {
	return {
		name: 'astro-mithril',
		hooks: {
			'astro:config:setup': ({ addRenderer, updateConfig }) => {
				addRenderer(getRenderer());
				updateConfig({ vite: getViteConfiguration() });
			},
		},
	};
}
