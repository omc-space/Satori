<script setup lang="ts">
import { useMasterStore } from '~/store/master'
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
    path: '/note/latest',
    iconClass: 'i-tabler:notebook',
  },
  {
    name: '速览',
    path: '/timeline',
    iconClass: 'i-tabler:list-details',
  },
  {
    name: '友链',
    path: '/friends',
    iconClass: 'i-tabler:link',
  },
  {
    name: '更多',
    iconClass: 'i-tabler:alphabet-cyrillic',
    path: '/more',
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

const masterStore = useMasterStore()
</script>

<template>
  <header
    :class="showBg ? 'bg-white/80 dark:bg-black/50 dark:shadow-white/20 shadow backdrop-blur-md' : ''"
    class="fixed left-0 right-0 top-0 z-10 h-16 w-full transition duration-200"
  >
    <div class="relative grid grid-cols-[4.5rem_auto_4.5rem] mx-auto h-full max-w-7xl min-h-0 lg:px-8">
      <CommonHeaderMpNav :menus="menus" class="flex lg:hidden" />
      <div class="flex-center">
        <NuxtLink to="/" class="flex-center">
          <CommonLazyLoadImage class="h-10 w-10 rounded-4 bg-gray-3" :src="masterStore.masterInfo.avatar" alt="home" />
        </NuxtLink>
      </div>
      <CommonHeaderNav :menus="menus" class="hidden lg:flex" />
      <div class="flex-center">
        <CommonIconButton>
          <div class="i-tabler:user-plus" />
        </CommonIconButton>
      </div>
    </div>
  </header>
</template>
