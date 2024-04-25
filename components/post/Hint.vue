<script lang="ts" setup>
const props = defineProps<{
  type: 'success' | 'warning' | 'info'
  text?: string
}>()
const record = {
  success: 'text-green i-carbon:checkmark-outline',
  warning: 'text-orange i-carbon:warning-alt',
  info: 'text-gray i-carbon:information',
}
</script>

<template>
  <div v-bind="$attrs" text="sm gray-800" border="1px orange-200" items mb-10 min-h-20 flex items-center justify-center gap-4 rounded bg-orange-50 p-4>
    <div text-3xl lg:text-base :class="record[props.type]" />
    <div>
      <slot>
        {{ props.text }}
      </slot>
    </div>
  </div>
</template>
