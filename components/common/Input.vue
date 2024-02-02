<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: string | undefined
  placeholder?: string
  required?: boolean
}>(), {
  required: false,
  placeholder: '请输入内容',
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <input
      :value="props.modelValue"
      type="text"
      :placeholder="props.placeholder + (props.required ? ' *' : '')"
      class="base-bg w-full rounded-md px-4 py-1.5 text-xs placeholder:text-gray/80 focus:outline-[var(--border-color)]"
      @input="emit('update:modelValue')"
    >
  </div>
</template>
