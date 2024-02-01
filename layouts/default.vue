<script setup lang="ts">
const route = useRoute()
const isRoot = computed(() => route.path === '/')
</script>

<template>
  <Header />
  <main :class="isRoot ? '' : 'pt-18'">
    <slot />
  </main>
  <Footer />
</template>
