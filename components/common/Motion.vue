<script setup lang="ts">
import { Motion } from '@oku-ui/motion'
import { spring } from 'motion'
import type {
  AnimationOptionsWithOverrides,
  KeyframeOptions,
  SpringOptions,
  VariantDefinition,
} from 'motion'
import { softBouncePreset } from '~/constants/spring'

const props = defineProps<{
  initial?: VariantDefinition
  transition?: AnimationOptionsWithOverrides
  animate?: VariantDefinition
  spring?: SpringOptions
  easing?: Pick<KeyframeOptions, 'easing'>
}>()

const initial: VariantDefinition = {
  y: 50,
  opacity: 0,
}

const transition: AnimationOptionsWithOverrides = {
  delay: 0.2,
  easing: spring(softBouncePreset),
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
    :transition="props.transition ?? transition"
  >
    <slot />
  </Motion>
</template>
