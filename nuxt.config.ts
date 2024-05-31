import { loadEnv } from 'vite'
import { appDescription } from './constants/index'

// interface VITE_ENV_CONFIG {
//   VITE_API_HOST: string
//   VITE_PACK_ENV: string
//   VITE_PACK_URL: string
// }
const envScript = (process.env as any).npm_lifecycle_script.split(' ') || []
const envName = envScript[envScript.length - 1] // 通过启动命令区分环境
const envData = loadEnv(envName, 'env') as unknown as any

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'floating-vue/nuxt',
    '@oku-ui/motion-nuxt',
  ],
  runtimeConfig: {
    env: envScript[envScript.length - 1],
    public: envData,
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  alias: {
    '~/': 'src/',
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/global.css',
    // '~/styles/markdown.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },
  plugins: [
    { src: './plugins/masonry', mode: 'client' },
  ],
  devtools: {
    enabled: false,
  },
})
