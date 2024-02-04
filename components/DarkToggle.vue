<script setup lang="ts">
const color = useColorMode()
useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})
</script>

<template>
  <div class="flex items-center border border-gray/50 rounded-full bg-white dark:bg-black">
    <CommonIconButton :borderless="color.value !== 'light'" @click="color.value = 'light'">
      <div class="i-carbon-sun" />
    </CommonIconButton>
    <CommonIconButton :borderless="color.value !== 'system'" @click="color.value = 'system'">
      <div class="i-tabler:device-desktop" />
    </CommonIconButton>
    <CommonIconButton :borderless="color.value !== 'dark'" @click="color.value = 'dark'">
      <div class="i-carbon-moon" />
    </CommonIconButton>
  </div>
</template>
