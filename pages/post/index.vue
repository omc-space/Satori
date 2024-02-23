<script setup lang="ts">
definePageMeta({
  layout: 'base',
})
const { data: posts } = useAsyncData(() => getPosts())
</script>

<template>
  <div v-if="posts" class="m-auto max-w-3xl pt-16">
    <PostCard v-for="post in posts.data" :key="post.id" :post="post" />
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
  </div>
</template>
