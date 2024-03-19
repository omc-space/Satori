<script lang="ts" setup>
const props = defineProps<{
  onClick?: () => void
}>()
</script>

<template>
  <button
    v-bind="$attrs"
    @click="props.onClick"
    class="p-2 rounded-xl shadow-xl border text-x bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
  >
    <slot/>
  </button>
</template>

