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
  <div ref="target" class="relative h-full min-h-200 flex flex-col justify-center lg:my-0 lg:h-screen lg:flex-row lg:items-center">
    <div class="flex-center flex-1 lg:w-1/2">
      <slot name="left" :visible="targetIsVisible" />
    </div>
    <slot />
    <div class="flex-1 lg:w-1/2">
      <slot name="right" :visible="targetIsVisible" />
    </div>
  </div>
</template>
