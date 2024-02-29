<script lang="ts" setup>
import { microDampingPreset } from '~/constants/spring'
import { getNoteByNid } from '~/composables/api'
import { CollectionRefTypes, type NoteModel } from '~/types'

const route = useRoute<'note-id'>()
const articleRef = ref<HTMLElement>()
const percentage = useScrollPercentage(articleRef)
const note = ref<NoteModel>()

if (route.params.id === 'latest')
  getLastNote().then(res => note.value = res.data)
else
  getNoteByNid(route.params.id).then(res => note.value = res.data)
</script>

<template>
  <CommonMotion v-if="note" :spring="microDampingPreset">
    <article ref="articleRef" class="border border-transparent rounded-md bg-slate-50 p-4 shadow-sm dark:border-neutral-800 md:border-zinc-200/70 dark:bg-zinc-900 lg:p-8 dark:shadow-[#333]">
      <header>
        <h1 class="text-3xl font-bold">
          {{ note.title }}
        </h1>
        <div class="mt-8 flex items-center text-xs text-zinc-400">
          <div i-tabler:clock />
          <span>2024年1月14日星期日</span>
          <div class="mx-2 h-[0.9em] w-[1.5px] bg-zinc" />
          <div i-tabler:sun />
          <span>晴</span>
          <div class="mx-2 h-[0.9em] w-[1.5px] bg-zinc" />
          <div i-tabler:mood-smile-beam />
          <span>开心</span>
          <div class="mx-2 h-[0.9em] w-[1.5px] bg-zinc" />
          <div i-tabler:book />
          <span>511</span>
          <div class="mx-2 h-[0.9em] w-[1.5px] bg-zinc" />
          <span>5</span>
          <div class="mx-2 h-[0.9em] w-[1.5px] bg-zinc" />
          <div i-tabler:copyright />
        </div>
      </header>
      <div class="mt-8 min-h-120">
        <MarkdownViewer :value="note.text" />
      </div>
    </article>
    <div v-if="note" class="p-4">
      <Comment :data="note" :type="CollectionRefTypes.Note" />
    </div>
  </CommonMotion>
  <div v-if="note" class="sticky top-[120px] mt-[120px] hidden h-[calc(100vh-6rem-4.5rem-150px-120px)] pl-4 xl:block">
    <div class="text-secondary">
      {{ percentage }}%
    </div>
  </div>
</template>
