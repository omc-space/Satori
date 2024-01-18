<template>
  <div class="relative h-screen min-h-180 flex-center flex-col lg:flex-row">
    <slot name="left" />
    <slot />
    <slot name="right" />
  </div>
</template>
