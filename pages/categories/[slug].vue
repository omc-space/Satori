<script setup lang="ts">
import { getPostByCategory } from '~/composables/api'
import { microDampingPreset } from '~/constants/spring';

const route = useRoute<'categories-slug'>()
const { data, pending } = useAsyncData(async () => {
  const res = await getPostByCategory(route.params.slug)
  return res.data
})
onMounted(()=>{
  useHead({
    title: `分类 - ${data.value?.name}`,
  })
})
</script>

<template>
  <CommonLoading :loading="pending" />
  <div v-if="data && !pending" class="base-container">
    <CommonMotion
      v-if="data"
      :initial="{ scale: 0.95, y: 5, opacity: 0 }"
      :animate="{ scale: 1, y: 0, opacity: 1 }"
    >
      <h1 class="text-3xl font-bold">
        分类 - {{ data.name }}
      </h1>
      <div class="mt-4">
        当前共有 {{ data.children?.length }} 篇文章，加油！
      </div>
    </CommonMotion>
    <ul class="timeline-container mt-12 text-sm text-secondary">
      <CommonMotion
        v-for="i, idx in data.children"
        :key="i.id"
        class="timeline-item flex justify-between"
        :delay="idx * 0.06 + 0.4"
        :spring="microDampingPreset"
      >
        <CommonLink :to="`/post/${i.id}`" class="min-w-0 text-omit">
          {{ i.title }}
        </CommonLink>
        <div>{{ dateFns(i.created).format('MM/DD/YYYY') }}</div>
      </CommonMotion>
    </ul>
    <CommonEmpty v-if="!data" h-full>
      分类不存在该分类下没有文章
    </CommonEmpty>
  </div>
</template>
