<template>
  <div class="relative grid-cols-[auto,200px] min-h-[120px] flex lg:grid">
    <div>
      <slot name="left" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
