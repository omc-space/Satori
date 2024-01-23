<script setup lang="ts">
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting
      stop()
    }
  },
)
</script>

<template>
  <div ref="target" class="relative h-screen min-h-200 flex-center flex-col lg:my-0 lg:flex-row">
    <div class="flex-center lg:w-1/2">
      <slot name="left" :visible="targetIsVisible" />
    </div>
    <slot />
    <div class="flex-center lg:w-1/2">
      <slot name="right" :visible="targetIsVisible" />
    </div>
  </div>
</template>
