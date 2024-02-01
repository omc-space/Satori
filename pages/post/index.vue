<script setup lang="ts">
import { CategoryType, type PostModel } from '@omc-space/api-client'

const posts: PostModel[] = [
  {
    id: 'aaa',
    title: 'Vue 3 + TypeScript + Vite',
    text: '写在前面上个月就开始重写了个人站点了。然后上周差不多写完了，现在你看到的就是全新设计的站点了。这件事计划了挺久了，终于在逃离 996 之后的日子里实现了，经过了一段代码马拉松，几乎是每天没有闲下来的时间，特别疯狂的做一件事。其实在上个月 Next.js App Router 出 stable 的时候也考虑过重构 kami，也确实尝试了，在一个星期之后，我终于放弃了。https://innei.in/posts/programming/next-app-router-migration-what-is-new-...',
    created: new Date().toDateString(),
    copyright: false,
    tags: ['折腾', 'blog'],
    count: {
      read: 100,
      like: 10,
    },
    slug: 'vue-3-typescript-vite',
    categoryId: '123123',
    images: [],
    category: {
      type: CategoryType.Category,
      id: '123123',
      slug: 'vue',
      name: 'Vue',
      count: 10,
      created: '23 年12 月17 日',
    },
    modified: new Date().toDateString(),
    allowComment: true,
  },
]
</script>

<template>
  <div class="m-auto max-w-3xl pt-16">
    <PostCard v-for="post in 6" :key="post" :post="posts[0]" />
    <div class="text-right">
      <button class="border-primary hover:border-primary mr-4 border-[2px] rounded-md px-4 py-2 text-sm text-primary transition-colors">
        下一页
      </button>
    </div>
  </div>
</template>
