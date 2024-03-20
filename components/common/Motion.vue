<script setup lang="ts">
import { Motion } from '@oku-ui/motion'
import { spring } from 'motion'
import type {
  AnimationOptionsWithOverrides,
  KeyframeOptions,
  SpringOptions,
  VariantDefinition,
} from 'motion'
import { softSpringPreset } from '~/constants/spring'

const props = defineProps<{
  initial?: VariantDefinition
  transition?: AnimationOptionsWithOverrides
  exit?: VariantDefinition 
  animate?: VariantDefinition
  spring?: SpringOptions
  easing?: Pick<KeyframeOptions, 'easing'>
  delay?: number
}>()

const initial: VariantDefinition = {
  y: 50,
  opacity: 0.001,
}

const transition: AnimationOptionsWithOverrides = {
  easing: spring(props.spring ?? softSpringPreset),
  delay: props.delay,
  ...props.transition,
}

const animate: VariantDefinition = {
  y: 0,
  opacity: 1,
}
</script>

<template>
  <Motion
    :initial="props.initial ?? initial"
    :animate="props.animate ?? animate"
    :transition="transition"
    :exit="props.exit"
    v-bind="$attrs"
  >
    <slot />
  </Motion>
</template>
