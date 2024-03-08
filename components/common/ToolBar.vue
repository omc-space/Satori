<script lang="ts" setup>
const { y } = useWindowScroll({behavior: 'smooth'})

</script>

<template>
  <Teleport to="body">
    <div fixed right-4 bottom-8 z-60>
      <Transition name="fade">
        <button 
          v-if="y>300"
          class="p-2 rounded-xl shadow-xl border text-x bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
          @click="y=0"
        >
          <div i-tabler:arrow-bar-to-up></div>
        </button>
      </Transition>
    </div>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
