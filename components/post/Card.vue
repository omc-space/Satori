<script setup lang="ts">
import { isOutOfDate } from '~/composables/date';
import type { PostModel } from '~/types'

const { post } = defineProps<{ post: PostModel }>()

</script>

<template>
  <div class="relative my-8">
    <NuxtLink :to="`/post/${post.id}`" class="group relative inline-block w-full rounded-md text-black/70 dark:text-white/70">
      <div class="w-full rounded-md p-4">
        <h3 class="text-omit text-[18px] text-black lg:text-xl dark:text-white">
          {{ post.title }}
        </h3>
        <div class="line-clamp-4 mt-6 text-sm">
          {{ post.text }}
        </div>
        <div class="mt-2 flex flex-1 items-center justify-between text-xs">
          <div>
            <span>{{ formateDate(post.created) }}{{ post.modified ? '（已编辑）' : '' }}</span>
            <span v-for="tag in post.tags" :key="tag" class="satori-link--underline mx-1"># {{ tag }}</span>
          </div>
          <div class="text-x text-primary">
            阅读全文->
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 top-0 z--1 h-full w-full scale-95 rounded-md bg-gray-200 op-0 transition duration-200 group-hover:scale-100 dark:bg-gray/20 group-hover:op-100" />
      <div v-if="post.pin && !isOutOfDate(post.pin)" class="i-tabler:pin-filled absolute top-4 right-2 text-red" />
    </NuxtLink>
  </div>
</template>
