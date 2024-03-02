<script setup lang="ts">
import { getPostsByCategoryId } from '~/composables/api'

const route = useRoute<'categories-id'>()
const { data: category, pending } = await useAsyncData(() => getCategories({ ids: [route.params.id] }))
const { data } = await useAsyncData(() => getPostsByCategoryId([route.params.id]))
</script>

<template>
  <CommonLoading :loading="pending" />
  <NuxtLayout v-if="category" name="base">
    <CommonMotion
      v-if="data"
      :initial="{ scale: 0.95, y: 5, opacity: 0 }"
      :animate="{ scale: 1, y: 0, opacity: 1 }"
    >
      <h1 class="text-3xl font-bold">
        分类 - {{ category[route.params.id]?.name ?? '未知' }}
      </h1>
      <div class="mt-4">
        当前共有 {{ category[route.params.id]?.count ?? 0 }} 篇文章，加油！
      </div>
    </CommonMotion>
    <ul class="timeline-container mt-12 text-sm text-secondary">
      <CommonMotion
        v-for="i, idx in category[route.params.id]?.children"
        :key="i.id"
        class="timeline-item flex justify-between"
        :delay="(idx + 4) * 0.08"
      >
        <CommonLink :to="`/post/${i.id}`">
          {{ i.title }}
        </CommonLink>
        <div>{{ dateFns(i.created).format('MM/DD/YYYY') }}01/30/2024</div>
      </CommonMotion>
    </ul>
  </NuxtLayout>
  <CommonEmpty v-if="!data" h-full>
    分类不存在该分类下没有文章
  </CommonEmpty>
</template>
