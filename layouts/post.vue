<script setup lang="ts">
const content = ref<HTMLElement | null>(null)
const percentage = useScrollPercentage(content)
</script>

<template>
  <ClientOnly>
    <div class="relative grid-cols-[auto_200px] m-auto max-w-6xl min-h-[120px] lg:grid">
      <div ref="content">
        <slot />
      </div>
      <aside class="sticky top-[120px] mt-[120px] h-[calc(100vh-6rem-4.5rem-150px-120px)]">
        <slot name="aside" />
        <CommonDivider />
        <div class="text-secondary">
          {{ percentage }}%
        </div>
      </aside>
    </div>
  </ClientOnly>
</template>
