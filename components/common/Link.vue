<script setup lang="ts">
const props = defineProps<{ to: string }>()
</script>

<template>
  <NuxtLink class="satori-link--underline inline-block" :to="props.to">
    <slot />
  </NuxtLink>
</template>

<style>
/* copy from shiro https://cn.innei.ren/ */
.satori-link--underline,
.satori-timeline a {
  color: currentColor;
  background-image: linear-gradient(
    var(--primary-color, oklch(var(--primary-color) / 1)),
    var(--primary-color, oklch(var(--primary-color) / 1))
  );
  background-size: 0 1.5px;
  background-repeat: no-repeat;
  transition: all 0.5s ease;
  border-width: 0;
  text-decoration-line: none;
  background-position: left 1.2em;
}
.satori-link--underline:hover,
.satori-timeline a:hover {
  background-size: 100% 1.5px;
  transition: all 0.25s ease;
}
</style>
