<script setup lang="ts">
import { microDampingPreset } from '~/constants/spring'

const route = useRoute()
const router = useRouter()
const page = computed(()=> Number(route.query.page || 1))
const { data: posts, pending,refresh } = useAsyncData(() => getPosts({page: page.value}))
useHead({
  title: '文稿',
})

const changePage = (page: 1 | -1) => {
  router.push({
    path: '/post',
    query: {
      page: posts.value!.pagination.currentPage + page,
    }
  })
}
watch(page, async () => {
  window.scrollTo({top: 0})
  refresh()
})
</script>

<template>
  <CommonLoading :loading="pending" />
  <div v-if="posts && !pending" class="m-auto max-w-3xl pt-16 base-container">
    <CommonMotion
      v-for="post, idx in posts.data"
      :key="post.id"
      :spring="microDampingPreset"
      :transition="{ delay: idx * 0.15 }"
    >
      <PostCard :post="post" />
    </CommonMotion>
    <div class="flex justify-between">
      <div class="text-right">
        <button
          v-if="posts.pagination.hasPrevPage"
          @click="changePage(-1)"
          class="mr-4 border-[2px] border-primary rounded-md px-4 py-1 text-sm text-primary transition-colors hover:border-primary"
        >
          上一页
        </button>
      </div>
      <div>
        <button
          v-if="posts.pagination.hasNextPage"
          @click="changePage(1)"
          class="mr-4 border-[2px] border-primary rounded-md px-4 py-1 text-sm text-primary transition-colors hover:border-primary"
        >
          下一页
        </button>
      </div>
    </div>
    <CommonEmpty v-if="!posts?.data.length" />
  </div>
</template>
