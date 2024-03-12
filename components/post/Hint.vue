<script lang="ts" setup>
const props = defineProps<{
  type: 'success' | 'warning' | 'info',
  text?: string
}>()
const record = {
  success: 'text-green i-carbon:checkmark-outline',
  warning: 'text-orange i-carbon:warning-alt',
  info: 'text-gray i-carbon:information'
}
</script>

<template>
    <div v-bind="$attrs" flex justify-center items-center text="sm gray-800" min-h-20 p-4 border="1px orange-200" mb-10 gap-4 bg-orange-50 items rounded>
      <div text-3xl lg:text-base :class="record[props.type]" />
      <div>
        <slot>
          {{ props.text }}
        </slot>
      </div>
    </div>
</template>
