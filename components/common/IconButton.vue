<script setup lang="ts">
const props = withDefaults(defineProps<{
  disabled?: boolean
  borderless?: boolean
  rounded?: boolean
  size?: 'sm' | 'md' | 'lg'
}>(), {
  disabled: false,
  borderless: false,
  rounded: true,
  size: 'md',
})
</script>

<template>
  <button
    class="border border-transparent p-2"
    :class="{
      'dark:bg-gray-800 bg-zinc-50 !border-gray/20 dark:border-neutral-700 shadow-lg shadow-zinc-800/5': !props.borderless,
      'rounded-full': props.rounded,

    }"
    :disabled="props.disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
