<script setup lang="ts">
import type { NavigationItem } from '~/types'

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
        path: '/post/article',
      },
      {
        name: '项目',
        path: '/post/project',
      },
      {
        name: '友链',
        path: '/post/link',
      },
      {
        name: '留言板',
        path: '/post/message',
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
  },
])
</script>

<template>
  <header class="fixed left-0 right-0 top-0 z-10 h-16 w-full bg-white/80 shadow backdrop-blur-md">
    <div class="relative grid grid-cols-[4.5rem_auto_4.5rem] mx-auto h-full max-w-7xl min-h-0 lg:px-8">
      <HeaderMpNav :menus="menus" class="flex lg:hidden" />
      <div class="flex-center">
        <NuxtLink to="/" class="flex-center">
          <img class="h-10 w-10 rounded-4 bg-gray-3 p-1" src="/nuxt.svg" alt="home">
        </NuxtLink>
      </div>
      <HeaderNav :menus="menus" class="hidden lg:flex" />
    </div>
  </header>
</template>
