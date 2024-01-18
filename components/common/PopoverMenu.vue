<script setup lang="ts">
import { Dropdown as VDropdown } from 'floating-vue'
</script>

<template>
  <VDropdown
    :auto-hide="false"
    distance="14"
    theme="menu"
    :delay="{ show: 0, hide: 50 }"
    popper-class="my-popover-theme"
    compute-transform-origin
  >
    <slot />

    <template #popper>
      <slot name="popper" />
    </template>
  </VDropdown>
</template>

<style lang="postcss">
.v-popper--theme-dropdown .v-popper__inner {
  padding: 4px;
}
.my-popover-theme .v-popper__wrapper {
  background-color: transparent;
}
.my-popover-theme .v-popper__inner {
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
}

.v-popper--theme-dropdown .v-popper__popper--hidden {
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.15s,
    visibility 0.15s;
}

.v-popper__popper--shown .v-popper__wrapper .v-popper__inner {
  visibility: visible;
  animation: spring-in 0.5s;
  transition: opacity 0.15s;
}

.v-popper--theme-dropdown .v-popper__arrow-outer {
  visibility: hidden;
}

.dark .my-popover-theme .v-popper__inner {
  color: white;
  border: 1px solid hsla(240, 5%, 96%, 0.1);
}
.dark .my-popover-theme .v-popper__inner {
  background-color: rgba(0, 0, 0, 0.212);
}
/**去除三角符号 */
.v-popper--theme-dropdown .v-popper__arrow-inner {
  visibility: hidden;
}

@keyframes spring-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
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
