<script setup lang="ts">
import { getAggregate } from './composables/api'

const { data } = useAsyncData(()=> getAggregate())
onMounted(()=>{
  onBeforeRouteUpdate(()=> {
    document.body.scrollTo({top: 0})
  })
})
useHead({
  titleTemplate: (s) => {
    // if (s && s.length > 6)
    //   s = `${s.slice(0, 30)}...`
    const siteTitle = data.value?.url.title || '灰色と青 · 不虚光阴'
    return s ? `${s} - ${siteTitle}` : siteTitle
  },
  title: ()=> `${data.value?.url.title} • ${data.value?.url.description}`,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- <CommonToolbar /> -->
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
