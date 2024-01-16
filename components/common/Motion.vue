<script setup lang="ts">
import { Motion } from '@oku-ui/motion'
import { spring } from 'motion'
import type { AnimationOptionsWithOverrides, VariantDefinition } from 'motion'
import { softBouncePreset } from '~/constants/spring'

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
    :initial="initial"
    :animate="animate"
    :transition="transition"
  >
    <slot />
  </Motion>
</template>
