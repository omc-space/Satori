<script setup lang="ts">
definePageMeta({
  layout: 'base',
})
const route = useRoute<'categories-id'>()
const { data } = await useAsyncData('posts', () => apiClient.category.getCategoryByIdOrSlug(route.params.id))
</script>

<template>
  <div v-if="data">
    <CommonMotion
      :initial="{ scale: 0.95, y: 5, opacity: 0 }"
      :animate="{ scale: 1, y: 0, opacity: 1 }"
    >
      <h1 class="text-3xl font-bold">
        分类 - {{ data.name }}
      </h1>
      <div class="mt-4">
        当前共有 {{ data.count }} 篇文章，加油！
      </div>
    </CommonMotion>
    <ul class="timeline-container mt-12 text-sm text-secondary">
      <CommonMotion
        v-for="i, idx in data.children"
        :key="i.id"
        class="timeline-item flex justify-between"
        :delay="(idx + 4) * 0.08"
      >
        <CommonLink to="/post/:id()">
          模块化的请求数据统一管理的构想
        </CommonLink>
        <div>01/30/2024</div>
      </CommonMotion>
    </ul>
  </div>
</template>
