// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/styles/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "nuxt-swiper",
  ],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  i18n: {
    locales: ["uz", "ru", "en"],
    defaultLocale: "uz",
    vueI18n: "./i18n.config.ts",
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || "https://admin.uzbekbusinessconnect.com/api",
      apiBaseUrl: process.env.API_BASE_URL || "https://verel-auto.uz/api",
    },
  },
});
