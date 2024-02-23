<script setup lang="ts">
import type { PostModel } from '~/types'

const { post } = defineProps<{ post: PostModel }>()
</script>

<template>
  <div class="relative h-[100px] max-w-120 flex-1">
    <NuxtLink :to="`/post/${post.id}`" class="group relative inline-block w-full border border-gray/20 rounded-md">
      <div class="w-full rounded-md from-white to-transparent bg-gradient-to-r p-4 dark:from-black">
        <h3 class="text-omit text-[18px] lg:text-xl">
          {{ post.title }}
        </h3>
        <div class="mt-6 flex flex-1 items-center justify-between text-xs">
          <div>
            <span>{{ dateFns(post.created).format('YY 年MM 月DD 日') }}{{ post.modified ? '（已编辑）' : '' }}</span>
            <span v-for="i in post.tags" :key="i" class="satori-link--underline"># {{ i }}</span>
          </div>
          <div class="text-x text-primary op-0 transition group-hover:opacity-100">
            阅读全文->
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 top-0 z--1 h-full w-full rounded-md bg-gray-100" />
    </NuxtLink>
  </div>
</template>
