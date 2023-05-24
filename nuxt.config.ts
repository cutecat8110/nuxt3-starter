// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  pinia: {
    autoImports: ['defineStore']
  }
})
