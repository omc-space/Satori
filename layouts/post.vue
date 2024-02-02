<script setup lang="ts">
const content = ref<HTMLElement | null>(null)
const percentage = useScrollPercentage(content)
</script>

<template>
  <div class="relative grid-cols-[auto_200px] m-auto max-w-6xl px-4 py-8 lg:grid">
    <div ref="content" class="base-min-h">
      <slot />
    </div>
    <aside class="sticky top-[120px] mt-[120px] hidden h-[calc(100vh-6rem-4.5rem-150px-120px)] pl-4 lg:block">
      <slot name="aside" />
      <CommonDivider />
      <div class="text-secondary">
        {{ percentage }}%
      </div>
    </aside>
  </div>
</template>
