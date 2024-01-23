<script setup lang="ts">
const emit = defineEmits(['close'])
const visible = ref(false)
const toggle = () => (visible.value = !visible.value)

function handleClose() {
  visible.value = false
  emit('close')
}
</script>

<template>
  <div @click="toggle">
    <slot />
  </div>
  <Teleport to="body">
    <Transition name="dialog">
      <div v-if="visible" class="fixed inset-0 z-20 bg-white p-2">
        <slot name="content" :close="handleClose" />
        <button class="absolute right-0 top-0 p-8" @click="handleClose">
          <div class="i-carbon:close text-xl" />
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.3s ease;
}

/* .dialog-enter-from, */
.dialog-leave-to {
  opacity: 0;
}
</style>
