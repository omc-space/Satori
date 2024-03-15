<script lang="ts" setup>
import { getSayList } from '~/composables/api';
useHead({
  title: '说说',
})
const { data, pending } = useAsyncData(async () => {
  const res = await getSayList({page: 1,size: 50})
  return res.data
})

</script>

<template>
  <CommonLoading :loading="pending" />
  <div class="base-container">
    <ClientOnly>
      <SayList v-if="data && !pending" :data="data" />
    </ClientOnly>
  </div>
</template>

<style scoped>

</style>
