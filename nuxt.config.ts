// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/style.css'],
  vite: {
    build: {
      cssMinify: 'esbuild'
    }
  },
  app: {
    head: {
      link: [
        // Google Fonts: Oswald
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap' }
      ],
      script: [
        // Three.js (Required dependency for Vanta)
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js', defer: true },
        // Vanta Globe script
        { src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js', defer: true }
      ]
    }
  }
})
