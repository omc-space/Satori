<script lang="ts" setup>
import { reboundPreset } from '~/constants/spring'

const route = useRoute<'note-id'>()
const id = computed(() => route.params.id)
const { data: notes } = useAsyncData(() => getNoteList({ page: 1, size: 5 }))
const selectId = ref(Number(route.params.id))
</script>

<template>
  <NuxtLayout name="note">
    <template #left>
      <ul class="group max-w-[200px] text-x">
        <CommonMotion
          v-for="i, idx in notes?.data"
          :key="i.id"
          :initial="{ opacity: 0, x: -20 }"
          :transition="{ delay: 0.15 * idx + 1 }"
          :animate="{ opacity: 1, x: 0 }"
          class="my-1"
        >
          <NuxtLink
            :to="`/note/${i.nid}`"
            class="block flex items-center text-gray-400 transition-colors duration-300 hover:text-gray-600"
            :class="{ 'text-gray-800': selectId === i.nid }"
            @click="selectId = i.nid"
          >
            <CommonMotion
              v-if="selectId === i.nid"
              :spring="reboundPreset"
              :initial="{ x: -20 }"
              :animate="{ x: 0 }"
            >
              <div class="transition-colors" i-tabler:circle-dot mr-1 text-black group-hover:text-red />
            </CommonMotion>
            <div class="text-omit">
              {{ i.title }}
            </div>
          </NuxtLink>
        </CommonMotion>
      </ul>
    </template>

    <NuxtPage :page-key="id" />
  </NuxtLayout>
</template>
