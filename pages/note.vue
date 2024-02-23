<script lang="ts" setup>
import { reboundPreset } from '~/constants/spring'

const route = useRoute<'note-id'>()
const id = computed(() => route.params.id)
const { data: notes } = useAsyncData(() => getNoteList({ page: 1, size: 5 }))
const selectId = ref(1)
</script>

<template>
  <NuxtLayout name="note">
    <template #left>
      <ul class="group max-w-[200px] text-x">
        <li
          v-for="i, idx in notes?.data"
          :key="i.id"
          class="my-1"
        >
          <NuxtLink
            :to="`/note/${i.nid}`"
            class="block flex items-center text-gray-400 transition-colors duration-300 hover:text-gray-600"
            :class="{ 'text-gray-800': selectId === idx }"
            @click="selectId = idx"
          >
            <CommonMotion
              v-if="selectId === idx"
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
        </li>
      </ul>
    </template>

    <NuxtPage :page-key="id" />
  </NuxtLayout>
</template>
