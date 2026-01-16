// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@tresjs/nuxt', 
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/seo'
  ],

  site: {
    url: 'https://rzndev.vercel.app', // TODO: Update with your actual domain
    name: 'rzn.dev',
    description: 'Portfolio of a Software Systems Engineer specializing in robust architecture and immersive design.',
    defaultLocale: 'en',
  },

  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '·',
        siteName: 'RznDev'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0a0a0a' } // Matches typical dark theme background
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css']
})
