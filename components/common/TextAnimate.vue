<script lang="ts" setup>
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
  <div v-bind="$attrs" data-cursor="text">
    <span 
      v-for="char, idx in textArray" 
      :key="idx" class="char" 
      :style="`animation-delay:${idx * 0.05 + (delay ?? 0)}s`"
    >
      {{ char === ' '?'&nbsp':char }}</span>
  </div>
</template>

<style scoped>
.char{
  display: inline-block;
  animation: bounce .5s forwards;
  opacity: 0;
  transform: translateY(20px);
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
