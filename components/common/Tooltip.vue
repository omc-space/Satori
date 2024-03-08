<script setup lang="ts">
import { Tooltip as VTooltip } from 'floating-vue'
</script>

<template>
  <VTooltip
    distance="4"
    theme="menu"
    :delay="{ show: 0, hide: 50 }"
    popper-class="my-tooltip-theme"
    compute-transform-origin
  >
    <slot />

    <template #popper>
      <slot name="popper" />
    </template>
  </VTooltip>
</template>

<style>
.my-tooltip-theme .v-popper__inner {
  padding: 0.4rem 1rem;
  border-radius: 1rem;
}
.my-tooltip-theme .v-popper__wrapper {
  background-color: transparent;
}
.my-tooltip-theme .v-popper__inner {
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
}

.my-tooltip-theme .v-popper__popper--hidden {
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.15s,
    visibility 0.15s;
}

.my-tooltip-theme .v-popper__wrapper .v-popper__inner {
  visibility: visible;
  animation: fade-in 0.5s;
  transition: opacity 0.15s;
}

.my-tooltip-theme .v-popper__arrow-outer {
  visibility: hidden;
}

/**去除三角符号 */
.v-popper--theme-dropdown .v-popper__arrow-inner {
  visibility: hidden;
}

.dark .my-tooltip-theme .v-popper__inner {
  color: white;
  border: 1px solid hsla(240, 5%, 96%, 0.1);
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  40% {
    opacity: 0.9;
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
