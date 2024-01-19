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
  <div ref="target" class="relative my-20 h-screen min-h-180 flex-center flex-col lg:flex-row">
    <slot name="left" :visible="targetIsVisible" />
    <slot />
    <slot name="right" :visible="targetIsVisible" />
  </div>
</template>
