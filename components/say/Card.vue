<script lang="ts" setup>
import type { SayModel } from '~/types'

interface SayInfo extends SayModel {
  color?: string
  delay?: number
}
const { data, delay = 0 } = defineProps<{ data: SayInfo; delay?: number }>()
const transition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
  mass: 1,
  delay
}

</script>

<template>
  <CommonMotion 
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="transition"
    :style="`--color:${data.color};--bg:${data.color}1a;`"
    class="say-item"
    >
    <div pb-4>
      {{ data.text }}
    </div>
    <div class="say-info">
      <em flex-1>
        发布于：{{ dateFns(data.created).fromNow() }}
      </em>
      <em>{{ data.author }}</em>
      <span v-if="data.source">-</span>
      <span>{{ data.source }}</span>
    </div>
  </CommonMotion>
</template>

<style scoped>
.say-item{
  padding: 1em 1em 1em 2em;
  font-size: 14.5px;
  background-color: var(--bg);
  border-left: 4px solid var(--color) ;
  opacity: 0;
  transition-delay: var(--delay);
  margin-bottom: 1em;
}
.say-info{
  color: gray;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  gap: 4px;
}

</style>
