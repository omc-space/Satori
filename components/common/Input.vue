<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: string | undefined
  placeholder?: string
  required?: boolean
  type?: 'text' | 'textarea'
  maxLength?: number
}>(), {
  required: false,
  placeholder: '请输入内容',
  type: 'text'
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div w-full>
    <input
      v-if="props.type === 'text'"
      :value="props.modelValue"
      type="text"
      :placeholder="props.placeholder + (props.required ? ' *' : '')"
      class="w-full rounded-md my-1 px-4 py-1.5 text-xs base-bg placeholder:text-gray/80 focus:outline-[var(--border-color)]"
      @input="(e) => emit('update:modelValue', (e.target! as HTMLInputElement).value)"
    >
    <textarea
      v-if="props.type === 'textarea'"
      :value="props.modelValue"
      class="bg-gray-200/50 transition dark:bg-zinc-800/50 w-full resize-none p-2 rounded text-x text-gray-600 focus:outline-none"
      :placeholder="props.placeholder"
      :maxlength="maxLength"
      rows="5"
      @input="(e) => emit('update:modelValue', (e.target! as HTMLInputElement).value)"
    />
  </div>
</template>
