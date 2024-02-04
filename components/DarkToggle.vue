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
  <ClientOnly>
    <div class="flex items-center border border-gray/50 rounded-full bg-white dark:bg-black">
      <CommonIconButton :borderless="color.preference !== 'light'" @click="color.preference = 'light'">
        <div class="i-carbon-sun" />
      </CommonIconButton>
      <CommonIconButton :borderless="color.preference !== 'system'" @click="color.preference = 'system'">
        <div class="i-tabler:device-desktop" />
      </CommonIconButton>
      <CommonIconButton :borderless="color.preference !== 'dark'" @click="color.preference = 'dark'">
        <div class="i-carbon-moon" />
      </CommonIconButton>
    </div>
  </ClientOnly>
</template>
