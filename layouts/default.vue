<script setup lang="ts">
const route = useRoute()
const isRoot = computed(() => route.path === '/')
</script>

<template>
  <CommonHeader />
  <main :class="isRoot ? '' : 'py-18'">
    <slot />
  </main>
  <Footer />
</template>
