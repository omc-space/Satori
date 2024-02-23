<script setup lang="ts">
import { microDampingPreset } from '~/constants/spring'
import { getPostById } from '~/composables/api'

const route = useRoute<'post-id'>()

const content = ref<HTMLElement | null>(null)
const percentage = useScrollPercentage(content)

const fullPath = computed(() => window.location.href)
const { data: post } = useAsyncData(() => getPostById(route.params.id))
</script>

<template>
  <NuxtLayout v-if="post" name="post" class="m-auto max-w-6xl">
    <CommonMotion :spring="microDampingPreset">
      <MarkdownViewer :value="post.text" />
      <div>
        <section ref="content" class="py-6 text-xs text-gray-600 lh-6">
          <div>文章标题：{{ post.title }}</div>
          <div>文章作者：<span class="text-gray-500">Innei</span></div>
          <div>
            <ClientOnly>
              <span>文章链接：<span class="text-gray-500">{{ fullPath }}</span></span>
            </ClientOnly>
            <button class="ml-1 select-none">
              [复制]
            </button>
          </div>
          <div>最后修改时间: {{ post.modified ?? post.created }}</div>
          <CommonDivider />
          <div>版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</div>
        </section>
        <Comment class="mt-8" />
      </div>
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
    </CommonMotion>
  </NuxtLayout>
</template>
