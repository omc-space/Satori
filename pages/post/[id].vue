<script setup lang="ts">
import { microDampingPreset } from '~/constants/spring'
import { getPostById } from '~/composables/api'
import { CollectionRefTypes } from '~/types'
import { useMasterStore } from '~/store/master'

const route = useRoute<'post-id'>()
const masterStore = useMasterStore()
const content = ref<HTMLElement | null>(null)
const percentage = useScrollPercentage(content)

const fullPath = computed(() => window.location.href)
const { data: post, pending } = useAsyncData(async () => {
  const res = await getPostById(route.params.id)
  masterStore.headerInfo.subtitle = res.category.name
  masterStore.headerInfo.title = res.title
  masterStore.headerInfo.show = true
  nextTick(() => {
    useHead({
      title: res.title,
    })
  })
  return res
})

onBeforeUnmount(() => {
  masterStore.headerInfo.show = false
})
</script>

<template>
  <CommonLoading :loading="pending" />
  <NuxtLayout v-if="post && !pending" name="post" class="m-auto max-w-6xl">
    <CommonMotion :spring="microDampingPreset">
      <section class="flex-center flex-col">
        <h1 class="text-2xl font-bold md:text-3xl">
          {{ post.title }}
        </h1>
        <div class="my-8 flex items-center gap-2 text-xs text-zinc-400">
          <div flex-center gap-1>
            <div i-tabler:clock />
            <span>{{ dateFns(post.created).fromNow() }}{{ post.modified ? '（已编辑）' : '' }}</span>
          </div>
          <div># {{ post.category.name }}</div>
          <div flex-center gap-1>
            <div i-tabler:book />
            <span>{{ post.count.read }}</span>
          </div>
          <div flex-center gap-1>
            <div i-tabler:thumb-up />
            <span>{{ post.count.like }}</span>
          </div>
          <div v-if="post.copyright" i-tabler:copyright />
        </div>
      </section>
      <MarkdownViewer :value="post.text" />
      <div>
        <section ref="content" class="py-6 text-xs text-gray-600 lh-6">
          <div>文章标题：{{ post.title }}</div>
          <div>文章作者：<span class="text-gray-500">{{ masterStore.masterInfo.name }}</span></div>
          <div>
            <ClientOnly>
              <span>文章链接：<span class="text-gray-500">{{ fullPath }}</span></span>
            </ClientOnly>
            <button class="ml-1 select-none">
              [复制]
            </button>
          </div>
          <div>最后修改时间: {{ formateDate(post.modified ?? post.created) }}</div>
          <CommonDivider />
          <div v-if="post.copyright">版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</div>
        </section>
        <Comment class="mt-8" :data="post" :type="CollectionRefTypes.Post" />
      </div>
    </CommonMotion>
    <template #aside>
      <div>
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <CommonDivider />
        <div class="text-secondary">
          {{ percentage }}%
        </div>
      </div>
    </template>
    <CommonEmpty v-if="!post" />
  </NuxtLayout>
</template>
