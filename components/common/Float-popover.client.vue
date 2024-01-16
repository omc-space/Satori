<script setup lang="ts">
import { Menu as VMenu } from 'floating-vue'
</script>

<template>
  <VMenu
    :distance="6"
    :triggers="['hover']"
    :delay="0"
  >
    <button w-20>
      Click me
    </button>

    <CommonMotion>
      <template #popper>
        <div>
          list
        </div>
      </template>
    </CommonMotion>
  </VMenu>
</template>

<style>
.v-popper--theme-dropdown .v-popper__inner {
  padding: 6px;
}

.v-popper--theme-dropdown .v-popper__popper--hidden {
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.15s,
    visibility 0.15s;
}

.v-popper--theme-dropdown .v-popper__popper--shown {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}

.v-popper--theme-dropdown .v-popper__arrow-outer {
  visibility: hidden;
}

.v-popper--theme-dropdown .v-popper__arrow-inner {
  visibility: hidden;
}
</style>
