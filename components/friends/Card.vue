<script setup lang="ts">
import type { LinkModel } from '~/types'

const props = defineProps<{
  data: LinkModel
}>()
</script>

<template>
  <NuxtLink :to="props.data.url" flex-center flex-col gap-2 rounded-md p-4 transition hover:bg-gray-2>
    <CommonLazyLoadImage :src="props.data.avatar" h-20 w-20 rounded-xl/>
    <div text-bold>
      {{ props.data.name }}
    </div>
    <div text="xs gray-700">
      {{ props.data.description }}
    </div>
  </NuxtLink>
</template>
