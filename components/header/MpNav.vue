<script setup lang="ts">
import type { NavigationItem } from '~/types'
import { reboundPreset } from '~/constants/spring'

const { menus } = defineProps<{ menus: NavigationItem[] }>()
</script>

<template>
  <div class="flex-center">
    <CommonDialog>
      <button class="border border-gray/20 rounded-full p-2 shadow-lg shadow-zinc-800/8">
        <div class="i-tabler:menu-2" />
      </button>

      <template #content="{ close }">
        <div class="mt-10 h-full">
          <CommonMotion
            v-for="(menu, index) in menus" :key="index" class="mb-4"
            :initial="{ y: 20, opacity: 0 }"
            :spring="reboundPreset"
            :transition="{ delay: index * 0.15 }"
          >
            <section>
              <div class="mb-2 text-[16px]">
                <NuxtLink :to="menu.path" class="flex items-center gap-1" @click="close">
                  <div :class="menu.iconClass" />
                  {{ menu.name }}
                </NuxtLink>
              </div>
              <ul class="grid grid-cols-2 text-x">
                <li v-for="child in menu.children" :key="child.path" class="p-2">
                  <NuxtLink :to="child.path" class="flex items-center" @click="close">
                    <div :class="child.iconClass" />
                    <span>{{ child.name }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </section>
          </CommonMotion>
        </div>
      </template>
    </CommonDialog>
  </div>
</template>
