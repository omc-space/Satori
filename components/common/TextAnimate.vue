<script lang="ts" setup>
import { spring } from 'motion'
const { text,delay } = defineProps<{ text: string | string[],delay?: number }>()
const textArray = computed(()=>{
  let arr = []
  for(let i of text){
    arr.push(i)
  }
  return arr
})
</script>

<template>
  <Motion
    v-for="char, idx in textArray" 
    :key="idx" class="char" 
    :initial="{ opacity: 0.001, y: 20 }"
    :animate="{ opacity: 2, y: 0 }"
    :transition="{ delay: idx * 0.04 + (delay ?? 0), easing: spring({mass: 1.5, stiffness: 300, damping: 20})}"
  >
    <span>{{ char === ' '?'&nbsp':char }}</span>
  </Motion>
</template>

<style scoped>
.char{
  display: inline-block;
  /* animation: bounce .5s forwards;
  opacity: 0;
  transform: translateY(20px); */
}
@keyframes bounce {
  0%{
    opacity: 0;
   transform: translateY(20px);
  }
  70%{
    transform: translateY(-1px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
