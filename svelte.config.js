import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import image from 'svelte-image'
import { imagetools } from 'vite-imagetools'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    ...image({
      webpOptions: {
        quality: 90,
      },
      placeholder: 'blur',
      processFolders: ['images'],
    }),
  }),

  kit: {
    vite: {
      plugins: [imagetools()],
    },
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
  },
  experimental: {
    useVitePreprocess: true,
  },
}

export default config
