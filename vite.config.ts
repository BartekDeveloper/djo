import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'

const SITE = 'https://bartekdeveloper.github.io/djo'

function sitemap(): Plugin {
  return {
    name: 'sitemap-djo',
    closeBundle() {
      const pages = ['', 'hiszpania.html', 'meksyk.html', 'gry.html']
      const urls = pages
        .map((p) => `  <url><loc>${SITE}/${p}</loc><changefreq>monthly</changefreq></url>`)
        .join('\n')
      writeFileSync(
        'dist/sitemap.xml',
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap()],
  base: './',
  build: {
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        hiszpania: 'hiszpania.html',
        meksyk: 'meksyk.html',
        gry: 'gry.html',
        notfound: '404.html',
      },
    },
  },
})
