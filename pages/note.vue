<script lang="ts" setup>
import { reboundPreset } from '~/constants/spring'

const route = useRoute()
const id = computed(() => route.params.id as string)
// const {} = useScrollPercentage()
const selectId = ref(1)
</script>

<template>
  <NuxtLayout name="note">
    <template #left>
      <ul class="group max-w-[200px] text-x">
        <li
          v-for="i in 5"
          :key="i"
          class="my-1"
        >
          <NuxtLink
            :to="`/note/${i}`"
            class="block flex items-center text-gray-400 transition-colors duration-300 hover:text-gray-600"
            :class="{ 'text-gray-800': selectId === i }"
            @click="selectId = i"
          >
            <CommonMotion
              v-if="selectId === i"
              :spring="reboundPreset"
              :initial="{ x: -20 }"
              :animate="{ x: 0 }"
            >
              <div class="transition-colors" i-tabler:circle-dot mr-1 text-black group-hover:text-red />
            </CommonMotion>
            <div class="text-omit">
              穿越云南，穿梭银幕{{ i }}
            </div>
          </NuxtLink>
        </li>
      </ul>
    </template>

    <NuxtPage :page-key="id" />
  </NuxtLayout>
</template>
