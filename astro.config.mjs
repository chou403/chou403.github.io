import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'

// https://astro.build/config
export default defineConfig({
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
      // material-theme-palenight -> one-dark-pro
			theme: 'one-dark-pro',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				experimentalThemes: {
          // vitesse-light -> one-dark-pro
					light: 'one-dark-pro',
          // material-theme-palenight -> one-dark-pro
					dark: 'one-dark-pro',
				  },
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind()
	]
})
