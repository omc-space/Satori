<script lang="ts" setup>
const props = defineProps<{
  onClick?: () => void
}>()
</script>

<template>
  <button
    v-bind="$attrs"
    class="border border-slate-200 rounded-xl bg-white p-2 text-x shadow-xl dark:border-slate-700 dark:bg-slate-900"
    @click="props.onClick"
  >
    <slot />
  </button>
</template>
