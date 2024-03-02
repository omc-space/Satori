<script setup lang="ts">
import { microDampingPreset } from '~/constants/spring'

const { data: posts, pending } = useAsyncData(() => getPosts())
</script>

<template>
  <CommonLoading :loading="pending" />
  <div v-if="posts" class="m-auto max-w-3xl pt-16 base-container">
    <CommonMotion
      v-for="post, idx in posts.data"
      :key="post.id"
      :spring="microDampingPreset"
      :transition="{ delay: idx * 0.15 }"
    >
      <PostCard :post="post" />
    </CommonMotion>
    <div class="text-right">
      <button
        v-if="posts.pagination.hasPrevPage"
        class="mr-4 border-[2px] border-primary rounded-md px-4 py-2 text-sm text-primary transition-colors hover:border-primary"
      >
        上一页
      </button>
    </div>
    <button
      v-if="posts.pagination.hasNextPage"
      class="mr-4 border-[2px] border-primary rounded-md px-4 py-2 text-sm text-primary transition-colors hover:border-primary"
    >
      下一页
    </button>
    <CommonEmpty v-if="!posts?.data.length" />
  </div>
</template>
