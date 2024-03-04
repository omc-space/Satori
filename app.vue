<script setup lang="ts">
import { getAggregate } from './composables/api'
import { appName } from '~/constants'

getAggregate().then((res) => {
  useHead({
    title: `${res.url.title} • ${res.url.description}`,
  })
})
useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
