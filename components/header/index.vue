<script setup lang="ts">
import type { NavigationItem } from '~/types'

const { y } = useWindowScroll()
const menus = ref<NavigationItem[]>([
  {
    name: '首页',
    path: '/',
    iconClass: 'i-tabler:alpha',
    children: [
      {
        name: '关于我',
        path: '/about',
      },
      {
        name: '留言板',
        path: '/message',
      },
      {
        name: '时间轴',
        path: '/timeline',
      },
      {
        name: '资源导航',
        path: '/navigation',
      },
      {
        name: '实验室',
        path: '/lab',
      },
      {
        name: '留言板',
        path: '/message',
      },
      {
        name: '留言板',
        path: '/message',
      },
    ],
  },
  {
    name: '文稿',
    path: '/post',
    iconClass: 'i-tabler:file-description',
    children: [
      {
        name: '文章',
        path: '/categories/article',
      },
      {
        name: '项目',
        path: '/categories/project',
      },
      {
        name: '友链',
        path: '/categories/link',
      },
      {
        name: '留言板',
        path: '/categories/message',
      },
    ],
  },
  {
    name: '手记',
    path: '/note',
    iconClass: 'i-tabler:notebook',
  },
  {
    name: '速览',
    path: '/overview',
    iconClass: 'i-tabler:list-details',
  },
  {
    name: '友链',
    path: '/link',
    iconClass: 'i-tabler:link',
  },
  {
    name: '更多',
    path: '/more',
    iconClass: 'i-tabler:alphabet-cyrillic',
    children: [
      {
        name: '听音乐',
        path: '/more/music',
        iconClass: 'i-tabler:music',
      },
    ],
  },
])
const showBg = computed(() => y.value > 50)
</script>

<template>
  <header
    :class="showBg ? 'bg-white/80 shadow backdrop-blur-md' : ''"
    class="fixed left-0 right-0 top-0 z-10 h-16 w-full transition duration-200"
  >
    <div class="relative grid grid-cols-[4.5rem_auto_4.5rem] mx-auto h-full max-w-7xl min-h-0 lg:px-8">
      <HeaderMpNav :menus="menus" class="flex lg:hidden" />
      <div class="flex-center">
        <NuxtLink to="/" class="flex-center">
          <img class="h-10 w-10 rounded-4 bg-gray-3 p-1" src="/nuxt.svg" alt="home">
        </NuxtLink>
      </div>
      <HeaderNav :menus="menus" class="hidden lg:flex" />
      <div class="flex-center">
        <button class="border border-gray/20 rounded-full p-2 shadow-lg shadow-zinc-800/5">
          <div class="i-tabler:user-plus" />
        </button>
      </div>
    </div>
  </header>
</template>
