<script lang="ts" setup>
import { microDampingPreset } from '~/constants/spring'

const articleRef = ref<HTMLElement>()
const percentage = useScrollPercentage(articleRef)
</script>

<template>
  <CommonMotion :spring="microDampingPreset">
    <article ref="articleRef" class="border border-transparent rounded-md bg-slate-50 px-4 shadow-sm dark:border-neutral-800 md:border-zinc-200/70 dark:bg-zinc-900 lg:p-8 dark:shadow-[#333]">
      <header>
        <h1 class="text-3xl font-bold">
          穿越云南，穿梭银幕
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
        content
      </div>
    </article>
    <div class="p-4">
      <Comment />
    </div>
  </CommonMotion>
  <div class="sticky top-[120px] mt-[120px] hidden h-[calc(100vh-6rem-4.5rem-150px-120px)] pl-4 xl:block">
    <div class="text-secondary">
      {{ percentage }}%
    </div>
  </div>
</template>
