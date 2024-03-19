<script lang="ts" setup>
import { microDampingPreset } from '~/constants/spring'
import { getNoteByNid } from '~/composables/api'
import { CollectionRefTypes } from '~/types'
import { useMasterStore } from '~/store/master'

const masterStore = useMasterStore()
const route = useRoute<'note-id'>()
const articleRef = ref<HTMLElement>()
const percentage = useScrollPercentage(articleRef)

const { data: note, pending } = useAsyncData(async () => {
  const res = await getNoteByNid(route.params.id)
  masterStore.headerInfo.subtitle = `手记 / ${res.data.mood}`
  masterStore.headerInfo.title = res.data.title
  masterStore.headerInfo.show = true
  nextTick(()=>{
    useHead({
      title: res.data.title,
    })
  })
  return res
})

onBeforeUnmount(() => {
  masterStore.headerInfo.show = false
})

function getWeather() {
  if (!note.value || !note.value.data.weather)
    return '未知'
  const { weather } = note.value.data

  if (weather.includes('晴'))
    return 'i-carbon-sun'
  if (weather.includes('阴'))
    return 'i-carbon-cloud'
  if (weather.includes('雨'))
    return 'i-carbon-rain-heavy'
  if (weather.includes('雪'))
    return 'i-carbon-snow-scattered'
  return 'i-carbon-word-cloud'
}
</script>

<template>
  <CommonLoading :loading="pending" />
  <div v-if="!pending">
    <CommonMotion v-if="note" :spring="microDampingPreset">
      <article class="border border-transparent rounded-md bg-slate-50 p-4 shadow-sm dark:border-neutral-800 md:border-zinc-200/70 dark:bg-zinc-900 lg:p-8 dark:shadow-[#333]">
        <header class="mt-6 select-none">
          <h1 class="text-2xl font-bold md:text-3xl">
            {{ note.data.title }}
          </h1>
          <div class="mt-8 flex items-center text-xs text-zinc-400">
            <div i-tabler:clock />
            <span>{{ formateJustDate(note.data.created) }}</span>
            <div class="mx-2 h-[0.9em] w-[1.5px] bg-zinc" />
            <div :class="getWeather()" />
            <span>{{ note.data.weather }}</span>
            <div class="mx-2 h-[0.9em] w-[1.5px] bg-zinc" />
            <div i-tabler:mood-smile-beam />
            <span>{{ note.data.mood }}</span>
            <div class="mx-2 h-[0.9em] w-[1.5px] bg-zinc" />
            <div i-tabler:book />
            <span>{{ note.data.count.read }}</span>
            <div class="mx-2 h-[0.9em] w-[1.5px] bg-zinc" />
            <div i-tabler:heart />
            <span>{{ note.data.count.like }}</span>
            <div class="mx-2 h-[0.9em] w-[1.5px] bg-zinc" />
            <div i-tabler:copyright />
          </div>
        </header>
        <div class="mt-10">
          <MarkdownViewer min-h-120 :value="note.data.text" />
          <section ref="articleRef" class="relative text-sm">
            <div class="flex justify-between">
              <div>
                <NuxtLink v-if="note.prev" :to="`/note/${note.prev.nid}`" class="flex-center">
                  <div i-tabler:chevron-left />
                  <span>上一篇</span>
                </NuxtLink>
              </div>
              <div>
                <NuxtLink v-if="note.next" :to="`/note/${note.next.nid}`" class="flex-center">
                  <span>下一篇</span>
                  <div i-tabler:chevron-right />
                </NuxtLink>
              </div>
            </div>
            <NuxtLink to="/timeline?type=notes" class="absolute left-1/2 top-0 flex-center text-primary -translate-x-1/2">
              <div>时间线</div>
              <div i-tabler:clock ml-2 />
            </NuxtLink>
          </section>
        </div>
      </article>
      <div v-if="note" class="p-4">
        <Comment :data="note.data" :type="CollectionRefTypes.Note" />
      </div>
    </CommonMotion>
    <CommonEmpty v-if="!note" />
  </div>

  <div v-if="note" class="sticky top-[120px] mt-[120px] hidden h-[calc(100vh-6rem-4.5rem-150px-120px)] pl-4 xl:block">
    <div class="text-secondary">
      {{ percentage }}%
    </div>
  </div>
</template>
