<template>
  <div class="relative grid-cols-[auto_200px] m-auto mt-12 max-w-6xl px-4 py-8 lg:grid">
    <div class="base-min-h min-w-0">
      <slot />
    </div>
    <aside class="sticky top-[120px] mt-[120px] hidden h-[calc(100vh-4rem-150px-120px)] pl-4 lg:block">
      <slot name="aside" />
    </aside>
  </div>
</template>
